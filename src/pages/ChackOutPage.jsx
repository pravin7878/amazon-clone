import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chackOut } from "../redux/slises/cartSlices";

const EnhancedCheckoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.data);
    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quentity, 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const isSuccess = await simulatePayment();
        setIsSubmitting(false);

        if (isSuccess) {
            dispatch(chackOut());
            navigate("/payment-success");
        } else {
            navigate("/payment-failure");
        }
    };

    return (
        <div className="checkout-page-container max-w-screen-lg mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

            {/* Order Summary */}
            <section className="order-summary border p-4 mb-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">Order Summary</h3>
                {cartItems.map((item) => (
                    <div key={item?.id} className="flex justify-between mb-2">
                        <span>{item?.name}</span>
                        <span>{item?.quentity} x ${item.price}</span>
                    </div>
                ))}
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                </div>
            </section>

            {/* Shipping Address Form */}
            <section className="shipping-address border p-4 mb-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">Shipping Address</h3>
                <form onSubmit={handlePayment}>
                    <div className="mb-3">
                        <label className="block text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div className="flex mb-3 space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium">Postal Code</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleInputChange}
                                required
                                className="w-full border p-2 rounded"
                            />
                        </div>
                    </div>

                    {/* Payment Information */}
                    <section className="payment-info border p-4 mb-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium mb-2">Payment Information</h3>
                        <div className="mb-3">
                            <label className="block text-sm font-medium">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                required
                                className="w-full border p-2 rounded"
                                placeholder="xxxx-xxxx-xxxx-xxxx"
                            />
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium">Expiration Date</label>
                                <input
                                    type="text"
                                    name="expirationDate"
                                    value={formData.expirationDate}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full border p-2 rounded"
                                    placeholder="MM/YY"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium">CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full border p-2 rounded"
                                    placeholder="xxx"
                                />
                            </div>
                        </div>
                    </section>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 font-medium"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Processing..." : "Place Order"}
                    </button>
                </form>
            </section>
        </div>
    );
};

// Mock payment process simulation function
const simulatePayment = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5; 
            resolve(isSuccess);
        }, 2000);
    });
};

export default EnhancedCheckoutPage;
