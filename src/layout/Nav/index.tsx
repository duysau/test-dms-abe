import { Menu } from "@carbon/icons-react";
import classNames from "classnames";
import { menu } from "config/menu";
import { ROOT_ROUTE } from "core/config/consts";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [translate] = useTranslation();
  const location = useLocation();
  return (
    <div className="flex gap-4 p-2 px-4 items-center justify-start border-b border-gray-200 overflow-x-auto whitespace-nowrap">
      <button className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>

      {menu
        .filter((item) => item.show)
        .map((item) => (
          <Link
            to={ROOT_ROUTE + item.link}
            key={item.name}
            className={classNames(
              "flex items-center text-xs text-gray-600 hover:text-red-600 transition",
              {
                "text-red-600 font-semibold": location.pathname.includes(
                  item.link
                ),
              }
            )}
          >
            {item.icon}
            <span className="mt-1 ml-1 text-sm hidden sm:inline">
              {translate(item.name)}
            </span>
          </Link>
        ))}
    </div>
  );
};

export default NavBar;
