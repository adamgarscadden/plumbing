import React from "react";

const ProductItem = ({ product }) => {
  return (
    <article className="bg-gray-100 p-4">
      <img
        src={product.image.url}
        alt={product.productName}
        className="w-full"
      />
      <div className="flex flex-col content-between">
        <h2 className="text-1xl font-bold text-gray-900  mt-3">
          {product.productName}
        </h2>
        <h3 className="mt-5 text-2xl">£{product.price.priceIncTax}</h3>
        <h4 className="mt-5 text-1xl">
          {product.stockStatus.status === "G" && "In Stock"}
          {product.stockStatus.status !== "G" && "Out Of Stock"}
        </h4>
      </div>
    </article>
  );
};

export default ProductItem;
