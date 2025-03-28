import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { getStorage } from "../utils/Storage";
import { useState } from "react";

const MainLayout = () => {
  const [cart, setCart] = useState(getStorage());

  return (
    <div>
      <header>
        <nav>
          <NavBar cart={cart} />
        </nav>
      </header>
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
    </div>
  );
};

export default MainLayout;
