import { ComponentType, lazy } from "react";
import { RouteObject } from "react-router-dom";
import {
  DASHBOARD_ROUTE,
  ITEM_ROUTE,
  SHOPPING_CART_ROUTE,
} from "./route-const";

type LazyImport<T = any> = {
  default?: ComponentType<T>;
  [key: string]: any;
};

async function retryImport(
  fn: () => Promise<any>,
  retries = 3,
  delay = 1000
): Promise<any> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    // eslint-disable-next-line no-console
    console.warn(`Retrying import... Attempts left: ${retries}`);
    return await new Promise((resolve) =>
      setTimeout(() => resolve(retryImport(fn, retries - 1, delay)), delay)
    );
  }
}

export const modules: Record<string, () => Promise<LazyImport>> = {
  CartPage: () => import("pages/CartPage"),
  DashboardPage: () => import("pages/DashboardPage"),
  // "login": () => import("../pages/login"),
};

export const lazyLoad = (key: keyof typeof modules) =>
  lazy(() =>
    retryImport(modules[key]).then((module) => ({
      default: module.default ?? module[key as string],
    }))
  );

const CartPage = lazyLoad("CartPage");
const DashboardPage = lazyLoad("DashboardPage");

const userRoutes: RouteObject[] = [
  {
    path: SHOPPING_CART_ROUTE,
    Component: CartPage,
  },
  {
    path: DASHBOARD_ROUTE,
    Component: DashboardPage,
  },
  // {
  //   path: ROOT_ROUTE,
  //   action: <Navigate to={DASHBOARD_ROUTE} />,

  //   index: false,
  // },
];

export default userRoutes;
