// PaymentFailure.js
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-800 p-4">
            <div className="text-center max-w-lg">
                <div className="text-6xl mb-4">😞</div>
                <h1 className="text-3xl font-bold mb-2">Payment Failed</h1>
                <p className="text-lg mb-6">
                    Unfortunately, we couldn’t process your payment. Please try again or
                    use a different payment method.
                </p>
                <div className="flex space-x-4">
                    <button
                        onClick={() => navigate("/checkout")}
                        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        Retry Payment
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                    >
                        Back to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailure;
