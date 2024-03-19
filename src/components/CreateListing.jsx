import {useState} from "react";
import {ENDPOINT} from "../consts.js";
import {InputField} from "./InputField.jsx";

export function CreateListing() {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        location: '',
    });

    const postData = async (data) => {
        try {
            const response = await fetch(`${ENDPOINT}create-listing`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if(response.ok){
                console.log('Successfully made listing')
            }
            else{
                    console.log('Error')
            }
        }
        catch (error) {
            console.log('Error while trying to creat listing', error.message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        postData(formData)
            .then(() => {
                setFormData({
                    name: '',
                    description: '',
                    category: '',
                    price: '',
                    location: '',
                });
            })
            .catch((error) => {
                console.error('Error submitting data:', error.message);
            });
    };


    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">New Listing</h2>
                <form onSubmit={handleSubmit}>
                    <InputField setFormData={setFormData} formData={formData} type='name' fieldValue={formData.name} />
                    <InputField setFormData={setFormData} formData={formData} type='price' fieldValue={formData.price}  />
                    <InputField setFormData={setFormData} formData={formData} type='category' fieldValue={formData.category}  />
                    <InputField setFormData={setFormData} formData={formData} type='location' fieldValue={formData.location}  />
                    <InputField setFormData={setFormData} formData={formData} type='description' fieldValue={formData.description}  />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}