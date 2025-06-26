import { Link, useOutletContext } from "react-router";
import { useEffect } from "react";
import { getStorage } from "../utils/Storage";
import AddToCartButton from "../components/AddToCartBtn";
import Productcard from "../components/Productcard";

const Home = ({ products, categories }) => {
  const { cart, setCart } = useOutletContext();

  useEffect(() => {
    const storedCart = getStorage();
    setCart(storedCart || []);
  }, [setCart]);

  return (
    <>
      <p> PRODUCTS </p>
      {categories.map((e, index) => (
        <Link className="link" to={`/cat/${e}`} key={index}>
          {e}
        </Link>
      ))}
      <div className="grid grid-cols-4 gap-4">
        {products.map((e) => (
          <div key={e.id}>
            <Productcard product={e} cart={cart} setCart={setCart} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
