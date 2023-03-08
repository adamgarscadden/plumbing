import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductItem from "./components/ProductItem";
import PageError from "./components/PageError";

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
      <header className="mt-5">
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
        <PageError error={error} />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {data?.products?.map((product) => (
            <ProductItem product={product} />
          ))}
        </section>
      </main>
      <footer>Pagination goes here</footer>
    </div>
  );
};

export default App;
