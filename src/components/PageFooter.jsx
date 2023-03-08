import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePageDecrement, changePageIncrement } from "../store";

const PageFooter = ({ data }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.product.pagination);

  if (!data.products) return null;

  return (
    <div className="mt-5 flex justify-items-center items-center">
      {page !== 1 && (
        <button
          disabled={page === 1}
          onClick={() => dispatch(changePageDecrement())}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-3"
        >
          Previous Page
        </button>
      )}
      <button
        onClick={() => dispatch(changePageIncrement())}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next Page
      </button>
    </div>
  );
};

export default PageFooter;
