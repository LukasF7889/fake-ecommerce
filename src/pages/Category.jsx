import { useParams } from "react-router";

const Category = ({ products, categories }) => {
  const { catName } = useParams();
  console.log(catName);
  console.log(products);

  return (
    <>
      <p>Categories!</p>

      {products
        .filter((product) => product.category === catName)
        .map((e) => (
          <p key={e.id}>{e.title}</p>
        ))}
    </>
  );
};

export default Category;
