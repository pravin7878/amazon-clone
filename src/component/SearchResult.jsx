import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../utils/ProductCard'
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import { getSerachResult } from '../redux/slises/searchSllice';
import { LoadingSpinner } from '../utils/Loading';
import { BiSearchAlt } from 'react-icons/bi';


export const SearchResult = () => {
    const { quiry } = useParams()
    const [priceOrder, setpriceOrder] = useState("")
    const [curruntPage, setcurruntPage] = useState(1)
    const [totelPage, settotelPage] = useState()
    const [skip, setskip] = useState(0)
    const dispatch = useDispatch()
    const searchResult = useSelector((state) => state?.searchResult)
    const { Error, isloading, result } = searchResult && searchResult

    
    console.log(quiry);
    console.log(priceOrder);
    
const hendelPrev = ()=>{
    setcurruntPage(curruntPage - 1)
}
const hendelNext = ()=>{
    setcurruntPage(curruntPage + 1)

}

    
    console.log(result);

    useEffect(() => {
        dispatch(getSerachResult({ quiry, priceOrder, skip }))
        settotelPage(Math.floor(result?.total/result.limit))
    }, [quiry,priceOrder])

    if (isloading){
    return <div className='h-[60vh] flex items-center justify-center'>
        <LoadingSpinner/>
    </div>
}

if(result?.products?.length === 0){
    return <div className="flex h-[60vh] flex-col items-center justify-center text-center p-6 mt-10 space-y-4">
        <BiSearchAlt className="text-6xl text-gray-400" />
        <h2 className="text-2xl font-semibold text-gray-700">
            No results found
        </h2>
        <p className="text-gray-500">
            We couldn't find any results for <span className="font-bold">{quiry}</span>.
        </p>
        <p className="text-gray-500">
            Try checking the spelling or using different keywords.
        </p>
    </div>
}

    return (
        <div className='w-[95%] m-auto flex justify-between mb-10 '>
            <div className='w-[15%] h-screen border-2'>
                <div className='mt-5 flex flex-col'>
                    <h3>Sort By Price</h3>
                    <span className='p-3'>
                            <select value={priceOrder} onChange={(e)=>setpriceOrder(e.target.value)} class="block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm  focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200">
                                <option value="">Select Order</option>
                                <option value="asc">Low to high</option>
                                <option value="desc">High to low</option>
                            </select>
                    </span>
                </div>

            </div>
            <div className='w-[80%]'>
                <div className=' grid grid-cols-4 gap-5 mt-5'>
                    {result?.products?.map((product, ind) => {
                        return <ProductCard key={ind} {...product} />
                    })}
                </div>

                <div className='flex justify-between w-[70%] m-auto shadow-lg py-2 px-4 border-2 text-blue-600'>
                    <button onClick={hendelPrev} className='hover:bg-gray-200 px-3 py-1 rounded-sm'>Prev</button>
                    <p>{curruntPage}/{totelPage}</p>
                    <button onClick={hendelNext} className='hover:bg-gray-200 px-3 py-1 rounded-sm'>Next</button>
                </div>
            </div>
            
        </div>
    )
}
