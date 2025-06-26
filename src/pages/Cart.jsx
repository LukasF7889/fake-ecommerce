import { useOutletContext } from "react-router";
import AddToCartButton from "../components/AddToCartBtn";
import { useEffect, useState } from "react";
import { saveStorage } from "../utils/Storage";

import trashicon from "../assets/trash-bin.svg";

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //get total price
    const sum =
      cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
    setTotal(Number(sum.toFixed(2)));
  }, [cart]);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    saveStorage(updatedCart);
  };

  if (!cart || cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-primary">
        <img
          className="rounded-full"
          src="https://placedog.net/240/240?random"
          alt="random doggo"
        />
        <h1>This cart is empty</h1>
        <p>Browse our products and add them to the cart! :)</p>
      </div>
    );
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <h1 className="!text-primary">YOUR CART</h1>
        {cart.map((e) => (
          <>
            <div
              key={e.id}
              className="flex flex-col md:flex-row flex-wrap gap-2 justify-between text-black"
            >
              <div className="flex gap-2 max-w-128 lg:max-w-1/2">
                <img className="h-full w-24 rounded-md" src={e.image}></img>
                <div>
                  <p className="text-sm">{e.category.toUpperCase()}</p>
                  <h2 className="card-title">{e.title}</h2>
                  <p className="card-title">{e.price}€</p>
                </div>
              </div>
              <div className="flex flex-col justify-between pb-4 items-center md:items-end">
                <div className="flex">
                  <AddToCartButton product={e} cart={cart} setCart={setCart} />
                  <button onClick={() => handleRemove(e.id)} className="ml-2">
                    <img
                      src={trashicon}
                      alt="trash"
                      className="h-auto w-[20px] hover:opacity-70"
                    />
                  </button>
                </div>
                <p className="text-md font-semibold">
                  Total: {e.price * e.quantity}
                </p>
              </div>
            </div>
            <hr></hr>
          </>
        ))}
      </div>
      <div className="flex gap-6 items-center justify-center">
        <div className="flex w-full flex-col items-end text-black mt-4">
          <p className="text-black font-bold text-xl">Your order in total</p>
          <p className="text-black font-bold text-3xl">{total}€</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => alert("This is the end of this react demo :)")}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
