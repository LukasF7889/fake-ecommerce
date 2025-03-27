import { Routes, Route } from "react-router";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Category from "./pages/Category";
import { useState, useEffect } from "react";
import { getStorage, saveStorage } from "./components/Storage";

const App = () => {
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [newItem, setNewItem] = useState(null);
  const [cart, setCart] = useState(getStorage());

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await fetch("https://fakestoreapi.com/products");
        if (!result.ok) throw new Error(result.status);
        const json = await result.json();
        setProducts(json);
      } catch (error) {
        setError("Error: " + error);
      } finally {
        setLoad(false);
      }
    }

    async function getCat() {
      try {
        const result = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!result.ok) throw new Error(result.status);
        const json = await result.json();
        setCategories(json);
      } catch (error) {
        setError("Error: " + error);
      } finally {
        setLoad(false);
      }
    }

    setLoad(true);
    getProducts();
    getCat();
  }, []);

  if (load) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Home
              products={products}
              categories={categories}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart products={products} cart={cart} />}
        />
        <Route path="/cat/:catid" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default App;
