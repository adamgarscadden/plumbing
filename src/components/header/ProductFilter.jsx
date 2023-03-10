import React from "react";

const ProductFilter = ({ val, category, onChange }) => {
  return (
    <>
      <div className="relative w-1/2 mr-3">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={val}
          onChange={(event) => onChange(event.target.value)}
        >
          {category === "product" && (
            <>
              <option value="toilets">Toilets</option>
              <option value="baths/corner-baths">Baths</option>
            </>
          )}
          {category === "sort" && (
            <>
              <option value="1">Recommended</option>
              <option value="2">Lowest Price</option>
              <option value="3">Highest Price</option>
              <option value="4">Highest Discount</option>
            </>
          )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
