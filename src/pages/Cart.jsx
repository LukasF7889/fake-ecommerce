import { useOutletContext } from "react-router";
import AddToCartButton from "../components/AddToCartBtn";


const Cart = () => {
  const { cart, setCart } = useOutletContext();

  return (
    <>
      {cart.map((e) => (
        <div key={e.id} className="flex">
          <img src={e.image}></img>
          <p>{e.category}</p>
          <p>{e.title}</p>
          <p>{e.price}</p>
          <p>{e.quantity}</p>
          <div>
            <p>Total: {e.price * e.quantity}</p>
            <AddToCartButton product={e} cart={cart} setCart={setCart} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
