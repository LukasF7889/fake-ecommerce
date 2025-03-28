import { Link, useOutletContext } from "react-router";
import { useEffect, useState } from "react";

const NavBar = ({ cart }) => {
  const [quant, setQuant] = useState(0);
  console.log(cart);

  useEffect(() => {
    setQuant(0);
    cart.forEach((e) => {
      setQuant((prev) => prev + e.quantity);
    });
  }, [cart]);

  return (
    <div className="flex justify-between bg-red-400">
      <p>
        <Link to="/">eCommerce Shopy</Link>
      </p>
      <div className="flex gap-5">
        <Link to="/">HOME</Link>
        <div className="flex">
          <Link to="/cart">CART</Link>
          <div className="bg-red-500 rounded-full ">({quant})</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
