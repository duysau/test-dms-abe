import { ROOT_ROUTE } from "core/config/consts";
import { Route, Routes } from "react-router-dom";
import App from "./App";

const AppRoot = () => {
  return (
    <>
      <Routes>
        <Route element={<div>Login</div>} path="/dms-abe/login" />
        <Route element={<App />} path={ROOT_ROUTE + "/*"} />
      </Routes>
    </>
  );
};

export default AppRoot;
