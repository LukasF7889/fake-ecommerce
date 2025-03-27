import { Route, Routes } from "react-router";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        ;
      </Routes>
    </>
  );
};

export default App;
