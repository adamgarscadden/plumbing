import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductItem from "./components/ProductItem";
import PageError from "./components/PageError";
import LoadingSpinner from "./components/LoadingSpinner";
import PageHeader from "./components/header/PageHeader";
import PageFooter from "./components/footer/PageFooter";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const productSelector = useSelector((state) => state.product.productSelector);
  const productSort = useSelector((state) => state.product.productSort);
  const page = useSelector((state) => state.product.pagination);

  const fetchData = async () => {
    const endpoint =
      "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI";

    const params = {
      query: productSelector,
      pageNumber: page,
      size: 0,
      additionalPages: 0,
      sort: productSort,
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
    window.scrollTo({ top: 0 });
  }, [productSelector, productSort, page]);

  console.log("data", data);

  return (
    <div className="p-4">
      <PageHeader />
      <main>
        <PageError error={error} />
        <LoadingSpinner data={data} />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {data?.products?.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </section>
      </main>
      <PageFooter data={data} />
    </div>
  );
};

export default App;
