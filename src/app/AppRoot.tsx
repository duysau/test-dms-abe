import { Route, Routes } from "react-router-dom";
import App from "./App";
import { SHOPPING_CART_ROUTE } from "config/route-const.tsx";
import Login from "pages/LoginPage";
import { Provider } from "react-redux";
import { persistor, store } from "rtk";
import { PersistGate } from "redux-persist/integration/react";

const AppRoot = () => {
  console.log("SHOPPING_CART_ROUTE", SHOPPING_CART_ROUTE);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route element={<Login />} path='/dms-abe/login' />
          <Route element={<App />} path={"/*"} />
        </Routes>
      </PersistGate>
    </Provider>
  );
};

export default AppRoot;
