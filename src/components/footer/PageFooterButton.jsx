import React from "react";

const PageFooterButton = ({ onClick, value, buttonText }) => {
  return (
    <button
      onClick={(event) => onClick(event.target.value)}
      value={value}
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-3"
    >
      {buttonText}
    </button>
  );
};

export default PageFooterButton;
