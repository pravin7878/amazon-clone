import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({
    id,
    title,
    category,
    brand,
    description,
    price,
    images,
    rating
}) => {
    return (
        <Link to={`/view-product/${id}`}>
        <div className='flex flex-col p-4 border rounded-lg shadow-md bg-white h-[350px] cursor-pointer'>
            <div className='w-full h-[200px]  rounded-md'>
                <img
                    className='w-full h-full object-cover'
                    src={images[0]}
                    alt={title}
                />
            </div>
            <h3 className='mt-2 text-lg font-semibold'>{title}</h3>
            <p className='text-sm text-gray-500'>{category}</p>
            <p className='text-sm text-gray-500'>{brand}</p>
            <p className='text-gray-700 font-medium'>${price}</p>
        </div>
        </Link>
    );
};
