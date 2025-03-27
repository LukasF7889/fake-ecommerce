import { Link } from "react-router";
import { saveStorage, getStorage } from "../components/Storage";

const Home = ({ products, categories, cart, setCart }) => {
  return (
    <>
      <p> PRODUCTS </p>
      {categories.map((e, index) => (
        <button key={index}>{e}</button>
      ))}
      <div className="grid grid-cols-4 gap-4">
        {products.map((e) => (
          <div key={e.id} className="bg-blue-300 px-4 py-4 rounded-2xl">
            <img src={e.image} />
            <p>{e.title}</p>
            <p>{e.price}</p>
            <p>{e.rating.rate}</p>
            <div>
              <button
                onClick={() => {
                  saveStorage(e);
                  setCart(getStorage());
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default Home;
