import { useState } from "react";
import axios from "axios";
import { ENDPOINT } from "../consts.js";
import { InputField } from "./InputField.jsx";

export function EditListing() {
    const [formData, setFormData] = useState({
        price: '',
        quantity: '',
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.put(`${ENDPOINT}/listings`, formData)
            .then(() => {
                setFormData({
                    price: '',
                    quantity: '',
                });
                setError(null);
                setLoading(false);
                
            })
            .catch((error) => {
                setError(error.response?.data?.message || 'An error occurred.');
                setLoading(false);
            });
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="p-5 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 md:text-2xl text-white px-6">Edit Listing</h2>
                    <form onSubmit={handleSubmit} className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {error && <div className="text-red-500">{error}</div>}
                        <div className="flex flex-col">
                            {/*<label htmlFor="price" className="text-sm font-bold text-gray-200 mb-2">Price:</label>*/}
                            <InputField
                                id="price"
                                type="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            {/*<label htmlFor="quantity" className="text-sm font-bold text-gray-200 mb-2">Quantity:</label>*/}
                            <InputField
                                id="quantity"
                                type="quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md" disabled={loading}>
                            {loading ? 'Updating...' : 'Update'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
