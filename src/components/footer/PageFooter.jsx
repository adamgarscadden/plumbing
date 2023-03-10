import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePageDecrement, changePageIncrement } from "../../store";
import PageFooterButton from "./PageFooterButton";

const PageFooter = ({ data }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.product.pagination);

  if (!data.products) return null;

  const handleButton = (event) => {
    if (event === "previous") {
      dispatch(changePageDecrement());
    }
    if (event === "next") {
      dispatch(changePageIncrement());
    }
  };

  return (
    <div className="mt-5 flex justify-items-center items-center">
      {page !== 1 && (
        <PageFooterButton
          value="previous"
          buttonText="Previous Page"
          onClick={handleButton}
        />
      )}
      <PageFooterButton
        value="next"
        buttonText="Next Page"
        onClick={handleButton}
      />
    </div>
  );
};

export default PageFooter;
