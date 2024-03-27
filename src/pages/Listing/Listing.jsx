import { Link, useParams } from "react-router-dom";
import { MOCK_COMPANIES } from "../../consts";

export function ListingDetails() {
  const { id } = useParams();

  const listing = MOCK_COMPANIES.find((company) => company.id === parseInt(id));

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-2/3">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {listing.name}
          </h2>
          <p className="text-gray-600 mb-4">{listing.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">Price: {listing.price}</p>
          </div>
        </div>
        <div className="p-4 flex justify-end">
          <Link
            to={`/edit-listing/${id}`}
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit Listing
          </Link>
        </div>
      </div>
    </div>
  );
}
