import { Outlet, useOutletContext } from "react-router";
import NavBar from "../components/NavBar";
import { getStorage, saveStorage } from "../utils/Storage";
import { useState } from "react";

const MainLayout = () => {
  const [cart, setCart] = useState(getStorage());

  return (
    <div>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
    </div>
  );
};

export default MainLayout;
