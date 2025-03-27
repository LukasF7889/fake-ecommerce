import { Link } from "react-router";
import { useEffect, useState } from "react";
import { saveStorage, getStorage } from "../components/Storage";

const Home = ({ products, categories, cart, setCart }) => {
  useEffect(() => {
    const storedCart = getStorage();
    setCart(storedCart || []);
  }, [setCart]);

  const handleUpdate = (id, change) => {
    const updatedCart = cart.map((e) => {
      if (e.id === id) {
        const newQuant =
          Math.sign(change) === -1 && e.quantity < 1 ? 0 : e.quantity + change;
        return { ...e, quantity: newQuant };
      }
      return e;
    });

    saveStorage(updatedCart);
    setCart(updatedCart);
  };

  const displayToCart = (e) => {
    const itemInCart = cart.find((o) => o.id === e.id);

    if (itemInCart) {
      return (
        <>
          <button onClick={() => handleUpdate(e.id, -1)}>-</button>
          <input
            type="text"
            value={itemInCart.quantity} //make sure this is an controlled object by setting it to 1 by default
            readOnly
          />
          <button onClick={() => handleUpdate(e.id, 1)}>+</button>
        </>
      );
    } else {
      return (
        <button
          onClick={() => {
            const newItem = { ...e, quantity: 1 };
            const updatedCart = [...cart, newItem];
            saveStorage(updatedCart);
            setCart(updatedCart);
          }}
        >
          Add to cart
        </button>
      );
    }
  };

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
            <div>{displayToCart(e)}</div>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default Home;
