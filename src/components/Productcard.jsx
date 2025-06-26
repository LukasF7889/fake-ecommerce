import AddToCartButton from "./AddToCartBtn";

const Productcard = ({ product, cart, setCart }) => {
  return (
    <div className="card bg-base-100 shadow-lg h-full">
      <figure className="h-[200px] bg-white flex items-center justify-center p-2">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full"
        />
      </figure>
      <div className="card-body">
        <p className="my-0">★{product.rating.rate}</p>
        <h2 className="card-title my-0">
          {product.title.slice(0, 60)}
          {product.title.length > 59 ? "..." : ""}
        </h2>

        <p>
          {product.description.slice(0, 75)}
          {product.description.length > 74 ? "..." : ""}
        </p>

        <div className="card-actions justify-end w-full overflow-hidden mt-2">
          <div className="flex w-full justify-between">
            <p className="font-bold text-xl">{product.price}€</p>
            <AddToCartButton product={product} cart={cart} setCart={setCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
