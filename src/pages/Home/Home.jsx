import React from 'react';

function Home() {
    const handleBuyNow = () => {
        window.location.href = 'url';
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <div className="max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold mb-4">Start Your Business Today!</h1>
                <p className="text-lg text-gray-300 mb-6">Ready to turn your ideas into reality? Register your new company hassle-free and embark on your entrepreneurial journey now.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md" onClick={handleBuyNow}>
                    Buy Now
                </button>
            </div>
        </div>
    );
}

export default Home;
