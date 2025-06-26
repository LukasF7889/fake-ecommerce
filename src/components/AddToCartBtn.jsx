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
      <div className="w-auto flex flex-nowrap">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => handleUpdate(product.id, -1)}
        >
          -
        </button>
        <input
          type="text"
          className="bg-white text-black rounded-2xl mx-2 px-4 w-18"
          value={cart.find((o) => o.id === product.id)?.quantity || 0}
          readOnly
        />
        <button
          className="btn btn-outline btn-sm"
          onClick={() => handleUpdate(product.id, 1)}
        >
          +
        </button>
      </div>
    );
  } else {
    return (
      <button
        className="btn btn-primary btn-sm"
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
