import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-green-800 p-4">
            <div className="text-center max-w-lg">
                <div className="text-6xl mb-4">🎉</div>
                <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
                <p className="text-lg mb-6">
                    Thank you for your purchase! Your order has been placed successfully.
                    You’ll receive a confirmation email shortly.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                    Back to Homepage
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
