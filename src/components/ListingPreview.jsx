// eslint-disable-next-line react/prop-types
export function ListingPreview({name,description,price,industry,location}) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-700">Industry: {industry}</p>
                    <p className="text-gray-700">Location: {location}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-700 font-bold">{price}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}