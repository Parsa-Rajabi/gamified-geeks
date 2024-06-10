import React from 'react';

const Loading = (props) => {

    return (
        <div className="z-[100] fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900 bg-opacity-75">
            <div className="flex flex-col items-center gap-3">
                <span className="text-white text-lg font-bold">Loading</span>

                <svg
                    className="animate-spin h-24 w-24 text-white mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647z"
                    ></path>
                </svg>
            </div>
        </div>
    );
}

export default Loading;