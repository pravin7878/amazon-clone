import React from 'react';

export const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-10 h-10 border-4 border-blue-500 border-solid rounded-full animate-spin border-t-transparent"></div>
        </div>
    );
};
