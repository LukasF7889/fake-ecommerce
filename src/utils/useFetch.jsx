import { useState, useEffect } from "react";

const useFetch = () => {
  const [lo, setLo] = useState(true);
  const [err, setErr] = useState(null);
  const [prod, setProd] = useState([]);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await fetch("https://fakestoreapi.com/products");
        if (!result.ok) throw new Error(result.status);
        const json = await result.json();
        setProd(json);
      } catch (error) {
        setErr("Error: " + error);
      } finally {
        setLo(false);
      }
    }

    async function getCat() {
      try {
        const result = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!result.ok) throw new Error(result.status);
        const json = await result.json();
        setCat(json);
      } catch (error) {
        setErr("Error: " + error);
      } finally {
        setLo(false);
      }
    }

    setLo(true);
    getProducts();
    getCat();
  }, []);

  return { prod, cat, lo, err };
};

export default useFetch;
