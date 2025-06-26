import { Routes, Route } from "react-router";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Category from "./pages/Category";
import { useState, useEffect } from "react";
import useFetch from "./utils/useFetch";

const App = () => {
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const { prod, cat, lo, err } = useFetch();

  useEffect(() => {
    setProducts(prod);
    setLoad(lo);
    setCategories(cat);
    setError(err);
    console.log(products);
  }, [prod, cat]);

  if (error) return <p>ERROR</p>;

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Home products={products} categories={categories} load={load} />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/cat/:catName"
          element={
            <Category products={products} categories={categories} load={load} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
