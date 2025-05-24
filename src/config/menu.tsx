import { ReactNode } from "react";
import { translate } from "core/config/i18n";
import { OrderDetails, ShoppingCart } from "@carbon/icons-react";

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
    link: "/shopping-cart",
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
  {
    name: translate("menu.item_title"),
    link: "/item",
    show: true,
    active: false,
  },
  {
    name: translate("menu.dashboard_title"),
    link: "/dashboard",
    show: true,
    active: false,
  },
];
