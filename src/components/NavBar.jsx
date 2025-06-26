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
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1 font-semibold ml-4">
        <Link to="/">eShopShop! - Smart Deals!</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/cart">
              CART <div className="rounded-full ">({quant})</div>
            </Link>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2"></ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
