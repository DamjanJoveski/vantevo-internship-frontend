// eslint-disable-next-line react/prop-types
export function InputField({ formData, setFormData, type, fieldValue }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={type}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {type}
      </label>
      {type === "description" ? (
        <textarea
          id={type}
          name={type}
          value={fieldValue}
          onChange={handleInputChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={`Enter ${type}`}
          rows="3"
          required
        />
      ) : (
        <input
          type="text"
          id={type}
          name={type}
          value={fieldValue}
          onChange={handleInputChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={`Enter ${type}`}
          required
        />
      )}
    </div>
  );
}
