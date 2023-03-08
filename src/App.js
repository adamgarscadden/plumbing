import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const productSelector = useSelector((state) => state.product.productSelector);

  const fetchData = async () => {
    const endpoint =
      "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI";

    const params = {
      query: productSelector,
      pageNumber: 1,
      size: 0,
      additionalPages: 0,
      sort: 1,
    };

    try {
      const result = await axios.post(endpoint, params);
      setData(result.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("data", data);
  console.log("error", error);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-5xl font-bold text-gray-900 w-full m-auto mb-3 text-center">
          🚽 Toilets
        </h1>
        <p className="mb-10 w-3/4 text-center m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          nesciunt ex atque iste est, nam asperiores dignissimos iusto earum, id
          sapiente sunt sequi ullam autem beatae! Nesciunt vero deleniti optio?
        </p>
      </header>
      <main>
        {data?.products?.map((product) => (
          <article className="bg-gray-100 p-4" key={product.id}>
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
        ))}
      </main>
    </div>
  );
};

export default App;
