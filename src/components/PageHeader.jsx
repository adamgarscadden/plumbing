import React from "react";
import { useSelector } from "react-redux";
import ProductSelector from "./ProductSelector";
import ProductSort from "./ProductSort";

const PageHeader = () => {
  const productSelector = useSelector((state) => state.product.productSelector);

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
        <ProductSelector />
        <ProductSort />
      </div>
    </header>
  );
};

export default PageHeader;
