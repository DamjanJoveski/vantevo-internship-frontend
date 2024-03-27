import { useNavigate, useParams } from "react-router-dom";
import { MOCK_COMPANIES } from "../consts";
import { useState } from "react";

export function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [price, setPrice] = useState("");

  const listing = MOCK_COMPANIES.find((company) => company.id === parseInt(id));

  if (!listing) {
    return (
      <div className="font-bold text-xl text-white text-center p-4">
        Loading...
      </div>
    );
  }

  function handleChange(e) {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue <= 99999999) {
      setPrice(newValue);
    }
  }

  function handleUpdate() {
    const newPrice = parseFloat(price);
    if (!isNaN(newPrice)) {
      listing.price = newPrice;
    }
    navigate("/listings");
  }

  return (
    <section className="flex justify-center p-4 ">
      <div className="px-8 py-4 w-2/4 bg-white rounded-lg">
        <h1 className=" font-bold py-4 text-xl">{listing.name}</h1>
        <div className="flex  gap-4 items-center">
          <label htmlFor="price" className=" font-bold">
            Edit price:
          </label>
          <input
            type="number"
            id="price"
            placeholder={listing.price}
            min="0"
            max="99999999"
            className="p-2 rounded-lg border-2 border-black"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update listing
          </button>
        </div>
      </div>
    </section>
  );
}
