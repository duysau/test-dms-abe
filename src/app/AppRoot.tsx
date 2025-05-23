import React from "react";
import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { ROOT_ROUTE } from "core/consts";
import { ITEM_ROUTE } from "config/route-const";

const AppRoot = () => {
  console.log("AppRoot", ROOT_ROUTE);
  console.log("itemRoute", ITEM_ROUTE);
  return (
    <>
      <Routes>
        <Route element={<div>Login</div>} path="/login" />
        <Route element={<App />} path={ROOT_ROUTE} />
      </Routes>
    </>
  );
};

export default AppRoot;
