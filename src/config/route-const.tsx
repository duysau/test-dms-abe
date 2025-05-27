import { join } from "path";

export const ROOT_ROUTE: string = process.env.PUBLIC_URL || "/";
export const LOGIN_ROUTE: string = join(ROOT_ROUTE, "/login");

export const SHOPPING_CART_ROUTE: string = join(ROOT_ROUTE, "/shopping-cart");
