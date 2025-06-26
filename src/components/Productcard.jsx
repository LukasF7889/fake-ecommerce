import AddToCartButton from "./AddToCartBtn";

const Productcard = ({ product, cart, setCart }) => {
  return (
    <div className="bg-blue-300 px-4 py-4 rounded-2xl">
      <img src={product.image} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.rating.rate}</p>
      <AddToCartButton product={product} cart={cart} setCart={setCart} />
    </div>
  );
};

export default Productcard;
