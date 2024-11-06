import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from "../redux/slises/cartSlices.js"
import { LoadingSpinner } from '../utils/Loading.jsx'
import { InternalServerErrorPage } from '../utils/InternalServerError.jsx'
// import { CustomeTost } from '../utils/CustomTost.jsx'
import { toast } from 'react-toastify';

export const SingalProductPage = () => {
  const { id } = useParams()
  const [isLoading, setisLoading] = useState(false)
  const [isError, setisError] = useState(false)
  const [product, setproduct] = useState({})
  const navigate = useNavigate()
  const dispach = useDispatch()
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  // ''https://dummyjson.com/products/1''

  const getProduct = async () => {
    setisLoading(true)
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`)
      setproduct(res?.data)
      setisLoading(false)
    }
    catch (error) {
      setisError(true)
      setisLoading(false)
    }
  }

  const hendelAddToCart = () => {
    // const isExist = cartData.some((item) => item.id === id)
    // console.log(isExist);
    
    // if (isExist) {
    //   toast.warning("Product Already Present in Cart")
    // }
  //  else{
      dispach(addToCart({ ...product, quentity: 1 }))
      navigate("/")
      toast.info("Product Added To card")
  //  }
  }

  useEffect(() => {
    getProduct()
  }, [])

  if (isLoading) {
    return <div className='flex justify-center items-center h-screen'>
      <LoadingSpinner />
    </div>
  }

  if (isError) {
    return <div className='flex justify-center items-center h-screen'>
      <InternalServerErrorPage />
    </div>
  }
  return (
    <div className="w-[80%] my-5 mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image Gallery */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {product?.images?.map((image, index) => (
            <span key={index} className='h-[200px] w-[200px]'>
              <img

                src={image}
                alt={`${product.title} 
               image ${index + 1}`}
                className="rounded-lg border border-gray-300 w-full h-full" />
            </span>
          ))}
        </div>

        {/* Product Details */}
        <div className="flex flex-col w-full md:w-3/4 space-y-4">
          {/* Product Title and Brand */}
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">Brand: {product.brand}</p>

          {/* Price and Discount */}
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-semibold text-blue-500">${product.price}</p>
            <p className="text-gray-500 line-through">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</p>
            <span className="text-green-500 font-semibold">{product.discountPercentage}% OFF</span>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400 text-lg">&#9733;</span>
            <p className="text-gray-800">{product.rating} / 5</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-md">{product.description}</p>

          {/* Availability and Stock */}
          <p className="text-sm font-semibold text-green-600">{product.availabilityStatus}</p>
          <p className="text-gray-500">Stock: {product.stock} units available</p>

          {/* Shipping and Policies */}
          <div className="border-t pt-4 mt-4">
            <p className="text-gray-800 font-semibold">Shipping: {product.shippingInformation}</p>
            <p className="text-gray-800 font-semibold">Return Policy: {product.returnPolicy}</p>
            <p className="text-gray-800 font-semibold">Warranty: {product.warrantyInformation}</p>
          </div>




          {/* Add to Cart Button */}
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-8 my-10 hover:bg-blue-600 transition" onClick={hendelAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
