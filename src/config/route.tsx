import { ComponentType, lazy } from "react";
import { Route } from "./config-type";
import { DASHBOARD_ROUTE, ITEM_ROUTE } from "./route-const";
import { Navigate, RouteObject } from "react-router-dom";
import ItemPage from "pages/ItemPage/ItemPage";
import DashboardPage from "pages/DashboardPage/DashboardPage";
import { ROOT_ROUTE } from "core/consts";

type LazyImport<T = any> = {
  default?: ComponentType<T>;
  [key: string]: any;
};

// async function retryImport(
//   fn: () => Promise<any>,
//   retries = 3,
//   delay = 1000
// ): Promise<any> {
//   try {
//     return await fn();
//   } catch (error) {
//     if (retries <= 0) throw error;
//     // eslint-disable-next-line no-console
//     console.warn(`Retrying import... Attempts left: ${retries}`);
//     return await new Promise((resolve) =>
//       setTimeout(() => resolve(retryImport(fn, retries - 1, delay)), delay)
//     );
//   }
// }

// export const modules: Record<string, () => Promise<LazyImport>> = {
//   ItemPage: () => import("pages/ItemPage/ItemPage"),
//   DashboardPage: () => import("pages/DashboardPage/DashboardPage"),
//   // "login": () => import("../pages/login"),
// };

// export const lazyLoad = (key: keyof typeof modules) =>
//   lazy(() =>
//     retryImport(modules[key]).then((module) => ({
//       default: module.default ?? module[key as string],
//     }))
//   );

// const ItemPage = lazyLoad("ItemPage");
// const DashboardPage = lazyLoad("DashboardPage");

const userRoutes: RouteObject[] = [
  {
    path: ITEM_ROUTE,
    Component: ItemPage,
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
