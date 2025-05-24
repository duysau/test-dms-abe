import { Menu } from "@carbon/icons-react";
import classNames from "classnames";
import { menu } from "config/menu";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [translate] = useTranslation();
  return (
    <div className="flex gap-4 p-2 items-center justify-start border-b border-gray-200 overflow-x-auto whitespace-nowrap">
      <button className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>

      {menu
        .filter((item) => item.show)
        .map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={classNames(
              "flex flex-col items-center text-xs text-gray-600 hover:text-purple-600 transition",
              { "text-purple-700 font-semibold": item.active }
            )}
          >
            {item.icon}
            <span className="mt-1 hidden sm:inline">
              {translate(item.name)}
            </span>
          </a>
        ))}
    </div>
  );
};

export default NavBar;
