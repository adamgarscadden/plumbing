import React from "react";

const PageError = ({ error }) => {
  return (
    <div className="mt-5">
      <p className="text-center w-full text-red-400 font-bold">{error}</p>
    </div>
  );
};

export default PageError;
