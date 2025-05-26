import { Route, Routes } from "react-router-dom";
import App from "./App";
import { SHOPPING_CART_ROUTE } from "config/route-const.tsx";
import Login from "pages/LoginPage";

const AppRoot = () => {
  console.log("SHOPPING_CART_ROUTE", SHOPPING_CART_ROUTE);
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/dms-abe/login" />
        <Route element={<App />} path={"/*"} />
      </Routes>
    </>
  );
};

export default AppRoot;
