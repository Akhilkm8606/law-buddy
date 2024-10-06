import React from 'react';
const InputField = ({ label, type, name, value, onChange, error }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor={name}>{label}</label>
        <input
          className={`shadow-custom bg-transparent rounded-lg w-full p-2 ${error ? 'border-red-500' : ''}`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  };
  

export default InputField;