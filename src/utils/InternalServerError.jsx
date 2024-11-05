import React from 'react';
import { useNavigate } from 'react-router-dom';

export const InternalServerErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); 
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-6xl font-bold text-red-500 mb-4">500</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Internal Server Error
            </h2>
            <p className="text-gray-600 mb-6 text-center">
                Sorry, something went wrong on our end. Please try again later.
            </p>
            <button
                onClick={handleGoHome}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
                Go to Homepage
            </button>
        </div>
    );
};
