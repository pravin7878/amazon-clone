import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCat } from '../redux/slises/productSlice'
import { ProductCard } from '../utils/ProductCard'
import { LoadingSpinner } from '../utils/Loading'
import { InternalServerErrorPage } from '../utils/InternalServerError'
import CustomSlider from '../utils/customSlider'

export const ProductListing = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state?.products)

    console.log(products);


    const catagoies = [
        "beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches"
    ]

    useEffect(() => {
        catagoies.forEach((catagory) => {
            dispatch(getProductByCat(catagory))
        })
    }, [])

    if (products.isLoading) {
        return <LoadingSpinner />
    }

    if (products.isError) {
        return <InternalServerErrorPage/>
    }

    const { data } = products

    // console.log(data?.fragrances?.products);
    
    return (<>
        <div
            className='w-[95%] m-auto '
            >
            <h3 className='text-black my-3 font-bold'>Top deal On smartphones</h3>
            <div className='w-full grid grid-cols-5 gap-4'>
                {data?.smartphones?.products?.map((product, ind) => {
                    return <ProductCard key={ind} {...product} />
                })}
            </div>
          
            <h3 className='text-black my-3 font-bold'>Top deal On motorcycle</h3>
            <div className='w-full grid grid-cols-5 gap-4'>
                {data?.motorcycle?.products?.map((product, ind) => {
                    return <ProductCard key={ind} {...product} />
                })}
            </div>

            <h3 className='text-black my-3 font-bold'>Top deal On mens-shoes</h3>
            <div className='w-full grid grid-cols-5 gap-4'>
                {data["mens-shoes"]?.products?.map((product, ind) => {
                    return <ProductCard key={ind} {...product} />
                })}
            </div>
        </div>

    </>)
}
