import React, { useEffect, useState } from 'react'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import Select from 'react-select';

// import asits
import logo from "../assets/amazon_logo.png"
import logolight from "../assets/amazon_logo-lite.png"
import CustomSelect from '../utils/CustomeSelect'
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../redux/slises/catagorySlice';


export const Nevbar = () => {
    const [cartItemCount, setcartItemCount] = useState(0)
    const [searchQuiry, setsearchQuiry] = useState("")
    const dispach = useDispatch()
    const categories = useSelector((state) => state.categories)

    const data = categories.data.slice(0, 13)

    const hendelSerch = () => {
        console.log(searchQuiry);
    }

    useEffect(() => {
        dispach(getCategory())
    }, [])

    return (<>
        <div className=' bg-[#131921]  text-white flex justify-between px-3 py-2'>
            <div className='w-[25%] flex justify-between gap-1'>
                {/* logo for md screen*/}
                <span className='cursor-pointer flex w-[50%] items-center'>
                    <Link className='w-[80%] m-auto' to={"/"}>
                        <div className='w-full flex justify-center items-center'>
                            <span className='w-[90%] m-auto'>
                                <img src={logolight} alt="amazon.in" />
                            </span>
                            <span className='w-[10%] mb-2'>.in</span>
                        </div>
                    </Link>
                </span>

                <span className='w-[65%] text-[12px] m-auto cursor-pointer'>
                    <p>Delivering to Jaipur 302001</p>
                    <span className='flex font-bold'>
                        <CiLocationOn size={20} />
                        <h1>Update location</h1>
                    </span>
                </span>
            </div>
            <div className='w-[40%] flex text-black rounded-md  m-auto bg-white'>
                <span>
                    <CustomSelect />
                </span>
                <input
                    className='w-[80%] px-3 text-xl rounded-none'
                    type="search"
                    placeholder='Search Amazon.in'
                    value={searchQuiry}
                    onChange={(e) => setsearchQuiry(e.target.value)}
                />
                <span onClick={hendelSerch} className='w-[11%] bg-[#E49D43] flex justify-center rounded-r-md items-center cursor-pointer'>
                    <CiSearch size={30} />
                </span>
            </div>
            <div className='w-[25%] m-auto flex justify-between gap-1 items-center text-sm'>
                <span className=' w-[25%] cursor-pointer'>
                    <Select
                        options={[{ value: "english", label: "EN" }, { value: "hindi", label: "HI" }]}
                        placeholder="EN"
                        className='text-black cursor-pointer'
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                width: "100%",
                                display: 'flex',
                                fontSize: "12px",
                                padding: "0px",
                                cursor: "pointer"
                            })
                        }}
                    />
                </span>
                <span className='w-[35%] flex flex-col m-auto cursor-pointer items-center'>
                    <p>Hello,sing in</p>
                    <p className='font-bold text-[13px]'>Account & Lists</p>
                </span>
                <span className='w-[20%] flex flex-col items-center cursor-pointer'>
                    <p>Returns</p>
                    <p className='font-bold text-[13px]'>& Orders</p>
                </span>
                <span className='w-[20%] m-auto flex justify-center items-center relative pt-1 cursor-pointer'>
                    <p className=' text-yellow-400 absolute top-1 left-[43%] font-bold text-md px-1 rounded-md bg-black'>{cartItemCount}</p>
                    <FaCartPlus size={35} className='pt-1' />
                </span>
            </div>
        </div>
        <div className='bg-[#232F3E] flex justify-between px-1 text-white'>
            {data?.map((catagory,ind)=>{
                return <span key={ind} className='w-1/14 hover:border-2 hover:border-white cursor-pointer p-1'>{catagory}</span>
            }) }
        </div>
    </>
    )
}
