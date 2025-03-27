import { Outlet } from react-router;
import NavBar from "./navBar";

const MainLayout = () => {
<div>
    <header>
        <nav>
            <NavBar />
        </nav>
    </header>
    <main>
        <Outlet />
    </main>
</div>

};

export default MainLayout;
