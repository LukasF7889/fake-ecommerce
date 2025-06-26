import { useParams, useOutletContext, Link } from "react-router";
import Productcard from "../components/Productcard";
import Skeleton from "../components/Skeleton";

const Category = ({ products, categories, load }) => {
  const { cart, setCart } = useOutletContext();
  const { catName } = useParams();
  console.log(catName);
  console.log(products);

  if (load)
    return (
      <>
        <Link className="btn btn-primary btn-outline btn-sm" to="/">
          ← Go back
        </Link>
        <h1 className="mt-4 !text-primary">{catName.toLocaleUpperCase()}</h1>

        <Skeleton />
      </>
    );
  return (
    <>
      <Link className="btn btn-primary btn-outline btn-sm" to="/">
        ← Go back
      </Link>
      <h1 className="mt-4 !text-primary">{catName.toLocaleUpperCase()}</h1>
      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((product) => product.category === catName)
          .map((e) => (
            <div key={e.id}>
              <Productcard product={e} cart={cart} setCart={setCart} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Category;
