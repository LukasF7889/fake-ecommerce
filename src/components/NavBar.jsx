import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-red-400">
      <p>eCommerce Shopy</p>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/cart">CART</Link>
      </div>
    </div>
  );
};

export default NavBar;
