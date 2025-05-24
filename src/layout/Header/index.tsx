// components/Header.tsx

import {
  Menu,
  Notification,
  Search,
  ShoppingCart,
  User,
} from "@carbon/icons-react";
import { Image, Input } from "antd";
import DmsLogo from "assets/dmslogo.png";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 md:px-8 md:py-3">
        {/* Left: Menu + Logo (Mobile), Logo text (Desktop) */}
        <div className="flex items-center space-x-2">
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-black" />
          </button>
          <Image
            src={DmsLogo}
            alt="DMS Logo"
            preview={false}
            width={40}
            height={40}
            className="md:block h-8 mr-4"
          />
          <span className="hidden md:inline text-orange-400 font-bold text-lg">
            Web dành cho đại lý
          </span>
        </div>

        {/* Middle: Search bar (Desktop only) */}
        <div className="hidden md:flex md:ml-auto max-w-md">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="w-full border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <Search className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5 text-black md:hidden" />
          <User className="h-5 w-5 text-black" />
          <div className="hidden md:flex items-center space-x-1">
            <Notification className="h-5 w-5 text-gray-600" />
            <span className="text-sm">0003528</span>
          </div>
        </div>
      </div>
    </header>
  );
}
