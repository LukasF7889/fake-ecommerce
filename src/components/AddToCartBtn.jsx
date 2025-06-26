import { saveStorage, getStorage } from "../utils/Storage";

const AddToCartButton = ({ product, cart, setCart }) => {
  const handleUpdate = (id, change) => {
    let updatedCart = cart.map((e) => {
      if (e.id === id) {
        const newQuant = e.quantity + change;
        return { ...e, quantity: Math.max(newQuant, 0) };
      }
      return e;
    });

    saveStorage(updatedCart);
    setCart(updatedCart);
  };

  if (cart.find((o) => o.id === product.id)) {
    return (
      <div className="flex">
        <button onClick={() => handleUpdate(product.id, -1)}>-</button>
        <input
          type="text"
          value={cart.find((o) => o.id === product.id)?.quantity || 0}
          readOnly
        />
        <button onClick={() => handleUpdate(product.id, 1)}>+</button>
      </div>
    );
  } else {
    return (
      <button
        onClick={() => {
          const newItem = { ...product, quantity: 1 };
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

export default AddToCartButton;
