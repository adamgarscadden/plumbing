import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeProductSelector } from "../store";

const ProductSelector = () => {
  const dispatch = useDispatch();
  const productSelector = useSelector((state) => state.product.productSelector);

  const handleProduct = (event) => {
    dispatch(changeProductSelector(event.target.value));
  };

  return (
    <>
      <div className="relative w-1/2">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={productSelector}
          onChange={handleProduct}
        >
          <option value="toilets">Toilets</option>
          <option value="baths/corner-baths">Baths</option>
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

export default ProductSelector;
