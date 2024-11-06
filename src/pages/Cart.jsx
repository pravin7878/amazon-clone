import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { dicreaseQuentity, increaseQuentity, removeToCart } from '../redux/slises/cartSlices';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const state = useSelector((state) => state.cart);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data } = state;
    // console.log(data);
    
    const [cartData, setCartData] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || [];
        } catch (e) {
            console.error("Error parsing cart data from localStorage", e);
            return [];
        }
    })

    const totalPrice = cartData?.reduce((total, item) => total + item.price * item.quentity, 0).toFixed(2);

    const handleCheckout = () => {
        alert(`Your total is $${totalPrice}. Proceeding to checkout...`);
        navigate("/checkout")
    };

    useEffect(() => {
        if (data && data.length > 0) {
            localStorage.setItem("cart", JSON.stringify(data));
            setCartData(data);
        }
    }, [data]);

    return (
        <div className="container mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section: Cart Items */}
            <div className="col-span-2 space-y-6">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                {cartData && cartData.length > 0 ? (
                    cartData.map((item) => (
                        <div key={item.id} className="flex items-start bg-white p-4 rounded-lg shadow-md space-x-4">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-24 h-24 object-cover"
                            />
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                                <p className="text-gray-900 font-bold mt-2">₹{item.price}</p>
                                <p className="text-gray-900  mt-2 ">Totle Stock : {item.stock}</p>

                                <div className='flex justify-between pr-5'>
                                    <div className="flex items-center space-x-2 mt-4 gap-5">
                                        <button onClick={() => dispatch(dicreaseQuentity(item.id))} className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-colors duration-200">
                                            -
                                        </button>
                                        <p className="text-lg font-semibold">{item?.quentity}</p>
                                        <button onClick={() => dispatch(increaseQuentity(item.id))} className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-colors duration-200">
                                            +
                                        </button>
                                    </div>
                                    <button onClick={() => dispatch(removeToCart(item.id))} className="mt-4 text-sm text-red-600 underline">
                                        <MdDeleteForever size={30}/>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">Your cart is empty.</p>
                )}
            </div>

            {/* Right Section: Order Summary */}
            {cartData && cartData.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-md sticky top-4 h-max">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between text-lg mb-4">
                        <span>Total:</span>
                        <span className="font-bold">₹{totalPrice}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 font-semibold text-lg"
                    >
                        Proceed to Buy
                    </button>
                    <p className="mt-4 text-gray-600 text-sm">Part of your order qualifies for FREE delivery. Choose FREE delivery option at checkout.</p>
                </div>
            )}
        </div>
    );
};
