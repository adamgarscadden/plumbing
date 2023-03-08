import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeProductSort, changePageNumber } from "../store";

const ProductSort = () => {
  const dispatch = useDispatch();
  const productSort = useSelector((state) => state.product.productSort);

  const handleSort = (event) => {
    dispatch(changeProductSort(event.target.value));
    dispatch(changePageNumber(1));
  };

  return (
    <>
      <div className="relative w-1/2">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={productSort}
          onChange={handleSort}
        >
          <option value="1">Recommended</option>
          <option value="2">Lowest Price</option>
          <option value="3">Highest Price</option>
          <option value="4">Highest Discount</option>
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

export default ProductSort;
