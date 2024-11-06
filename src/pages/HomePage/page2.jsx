import React from 'react'
import CustomSlider from '../../utils/customSlider'
import { useSelector } from 'react-redux'

export const Page2 = () => {
    const products = useSelector((state) => state?.products)
    const { data } = products

    return (
        <div className='w-full bg-[#E3E6E6] px-10 py-10'>
            <h3 className='font-bold py-3'>Best Deal on kitchen-accessories</h3>
            <div>
                <CustomSlider data={data["kitchen-accessories"]?.products} />
            </div>

            <h3 className='font-bold py-3'>Best Deal on womens-dresses</h3>
            <div>
                <CustomSlider data={data["womens-dresses"]?.products} />
            </div>
        </div>
    )
}
