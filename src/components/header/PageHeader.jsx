import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeProductSelector,
  changePageNumber,
  changeProductSort,
} from "../../store";

import ProductFilter from "./ProductFilter";

const PageHeader = () => {
  const dispatch = useDispatch();
  const productSelector = useSelector((state) => state.product.productSelector);
  const productSort = useSelector((state) => state.product.productSort);

  const handleProduct = (event) => {
    dispatch(changeProductSelector(event));
    dispatch(changePageNumber(1));
  };

  const handleSort = (event) => {
    dispatch(changeProductSort(event));
    dispatch(changePageNumber(1));
  };

  return (
    <header className="mt-5">
      <h1 className="text-5xl font-bold text-gray-900 w-full m-auto mb-3 text-center">
        {productSelector === "toilets" && <span>🚽 Toilets</span>}
        {productSelector === "baths/corner-baths" && <span>🛁 Baths</span>}
      </h1>
      <p className="mb-10 w-3/4 text-center m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        nesciunt ex atque iste est, nam asperiores dignissimos iusto earum, id
        sapiente sunt sequi ullam autem beatae! Nesciunt vero deleniti optio?
      </p>
      <div className="flex w-1/2 m-auto">
        <ProductFilter
          val={productSelector}
          onChange={handleProduct}
          category="product"
        />
        <ProductFilter
          val={productSort}
          onChange={handleSort}
          category="sort"
        />
      </div>
    </header>
  );
};

export default PageHeader;
