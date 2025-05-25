import { ReactNode } from "react";
import { translate } from "core/config/i18n";
import { OrderDetails, ShoppingCart } from "@carbon/icons-react";
import { SHOPPING_CART_ROUTE } from "./route-const";

export interface MenuItem {
  name: string;
  link: string;
  show: boolean;
  active: boolean;
  icon?: string | ReactNode;
  children?: MenuItem[];
}

export const menu: MenuItem[] = [
  {
    name: translate("menu.shopping_cart_title"),
    link: SHOPPING_CART_ROUTE,
    show: true,
    active: false,
    icon: <ShoppingCart />,
  },
  {
    name: translate("menu.order_title"),
    link: "/order",
    show: true,
    active: false,
    icon: <OrderDetails />,
  },
];
