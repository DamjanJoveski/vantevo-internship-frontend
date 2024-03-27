import { useState } from "react";
import { MOCK_COMPANIES } from "../../consts.js";
import { ListingPreview } from "../../components/ListingPreview.jsx";

export function Listings() {
  //GET REQUEST TO THE SERVER

  const [filters, setFilters] = useState({
    priceRange: "",
  });

  const filteredCompanies = MOCK_COMPANIES.filter((company) => {
    return !filters.priceRange || company.price <= parseInt(filters.priceRange);
  });

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Company Listings
      </h1>

      {/* Filter controls */}
      <div className="flex mb-4">
        {/* Price range filter */}
        <select
          className="bg-white border rounded px-4 py-2 mr-4 focus:outline-none focus:shadow-outline"
          value={filters.priceRange}
          onChange={(e) => handleFilterChange("priceRange", e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="1000000">$1,000,000 or less</option>
          <option value="1500000">$1,500,000 or less</option>
          <option value="2000000">$2,000,000 or less</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredCompanies.map((company) => (
          <ListingPreview
            key={company.id}
            id={company.id}
            name={company.name}
            description={company.description}
            price={company.price}
          />
        ))}
      </div>
    </div>
  );
}
