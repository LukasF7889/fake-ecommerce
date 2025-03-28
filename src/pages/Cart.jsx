import { useOutletContext } from "react-router";

const Cart = () => {
  const { cart } = useOutletContext();
  return (
    <>
      {cart.map((e) => (
        <div key={e.id}>
          <img src={e.image}></img>
          <p>{e.category}</p>
          <p>{e.title}</p>
          <p>{e.price}</p>
          <p>{e.quantity}</p>
          <p>Total: {e.price * e.quantity}</p>
        </div>
      ))}
    </>
  );
};

export default Cart;
