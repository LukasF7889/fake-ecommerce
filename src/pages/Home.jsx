import { Link, useOutletContext } from "react-router";
import { useEffect } from "react";
import { getStorage } from "../utils/Storage";

import ProductGrid from "../components/ProductGrid";
import CategoryLinks from "../components/CategoryLinks";
import Skeleton from "../components/Skeleton";

const Home = ({ products, categories, load }) => {
  const { cart, setCart } = useOutletContext();

  useEffect(() => {
    const storedCart = getStorage();
    setCart(storedCart || []);
  }, [setCart]);

  if (load)
    return (
      <>
        <CategoryLinks categories={categories} />
        <h1 className="mt-4 !text-primary">TOP DEALS OF THE DAY</h1>
        <Skeleton />
      </>
    );
  return (
    <>
      <CategoryLinks categories={categories} />
      <h1 className="mt-4 !text-primary">TOP DEALS OF THE DAY</h1>
      <ProductGrid products={products} cart={cart} setCart={setCart} />
    </>
  );
};

export default Home;
