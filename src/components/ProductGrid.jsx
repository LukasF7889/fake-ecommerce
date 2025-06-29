import AddToCartButton from "../components/AddToCartBtn";
import Productcard from "../components/Productcard";
import Skeleton from "./Skeleton";

const ProductGrid = ({ products, cart, setCart }) => {
  if (!products || !cart) return <Skeleton />;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 grow">
      {products.map((e) => (
        <div key={e.id}>
          <Productcard product={e} cart={cart} setCart={setCart} />
        </div>
      ))}
    </div>
  );
};
export default ProductGrid;
