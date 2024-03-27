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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`${ENDPOINT}/listings`, formData)
            .then(() => {
                setFormData({
                    price: '',
                    quantity: '',
                });
                setError(null); // Clear any previous errors
            })
            .catch((error) => {
                setError(error.response.data.message);
            });
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="text-red-500">{error}</div>}
                <InputField
                    type="number"
                    name="price"
                    label="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <InputField
                    type="number"
                    name="quantity"
                    label="Quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
            </form>
        </div>
    );
}
