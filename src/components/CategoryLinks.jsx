import { Link } from "react-router";

const CategoryLinks = ({ categories }) => {
  return (
    <div className="flex gap-2 my-2">
      <p className="text-black font-semibold">Categories:</p>
      {categories.map((e, index) => (
        <Link
          className="link no-underline hover:underline bg-white text-black rounded-md px-2 py-1 textarea-sm "
          to={`/cat/${e}`}
          key={index}
        >
          {e.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default CategoryLinks;
