import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "pages/LoginPage";
import { Provider } from "react-redux";
import { persistor, store } from "rtk";
import { PersistGate } from "redux-persist/integration/react";
import { default as Cookies } from "js-cookie";
import { TOKEN } from "config/const";
import { useNavigate } from "react-router-dom";
import { httpInterceptor } from "core/config/http";
import { isEmpty } from "lodash";
import { LOGIN_ROUTE, ROOT_ROUTE } from "config/route-const";

const AppRoot = () => {
  const isAuth = Cookies.get(TOKEN);
  const navigate = useNavigate();

  httpInterceptor.setHistory(navigate);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route
            element={
              !isEmpty(isAuth) ? <Navigate to={ROOT_ROUTE} /> : <Login />
            }
            path={LOGIN_ROUTE}
          />
          <Route
            element={!isEmpty(isAuth) ? <App /> : <Navigate to={LOGIN_ROUTE} />}
            path={"/*"}
          />
        </Routes>
      </PersistGate>
    </Provider>
  );
};

export default AppRoot;
