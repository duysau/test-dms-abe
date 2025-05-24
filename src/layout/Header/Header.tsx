// components/Header.tsx

import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "antd";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo và tiêu đề */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Động Lực" className="h-10" />
          <div className="text-orange-400 font-bold text-lg">
            Web dành cho đại lý
          </div>
        </div>
        <div className="flex">
          {/* Ô tìm kiếm */}
          <div className="flex-1 mx-4 max-w-md">
            <div className="relative">
              <Input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                className="w-full border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
              />
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Chuông + mã số */}
          <div className="flex items-center space-x-1">
            <BellIcon className="h-5 w-5 text-gray-600" />

            <span className="text-sm">0003528</span>
          </div>
        </div>
      </div>
    </header>
  );
}
