import { useParams } from "react-router-dom";
import { MOCK_COMPANIES } from "../../consts";

export function ListingDetails() {
  const { id } = useParams();

  const listing = MOCK_COMPANIES.find((company) => company.id === parseInt(id));

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{listing.name}</h2>
        <p className="text-gray-600 mb-4">{listing.description}</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-700">Industry: {listing.industry}</p>
          <p className="text-gray-700">Location: {listing.location}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-bold">{listing.price}</p>
        </div>
      </div>
    </div>
  );
}
