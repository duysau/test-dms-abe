// components/Header.tsx

import { Menu, Notification, Search, User } from "@carbon/icons-react";
import { Image, Input } from "antd";
import DmsLogo from "assets/dmslogo.png";
import NavBar from "layout/Nav";
import { Link } from "react-router-dom";
import { ROOT_ROUTE } from "config/route-const.tsx";

export default function Header() {
  return (
    <header className='border-b bg-white shadow-sm'>
      <div className='flex items-center justify-between px-4 py-2 md:px-8 md:py-3'>
        {/* Left: Menu + Logo (Mobile), Logo text (Desktop) */}
        <div className='flex items-center space-x-2'>
          <button className='md:hidden'>
            <Menu className='h-6 w-6 text-black' />
          </button>
          <Link to={ROOT_ROUTE}>
            <Image
              src={DmsLogo}
              alt='DMS Logo'
              preview={false}
              width={40}
              height={40}
              className='mr-4 h-8 md:block'
            />
            <span className='hidden text-lg font-bold text-orange-400 md:inline'>
              Web dành cho đại lý
            </span>
          </Link>
        </div>

        {/* Middle: Search bar (Desktop only) */}
        <div className='hidden max-w-md md:ml-auto md:flex'>
          <div className='relative w-full'>
            <Input
              type='text'
              placeholder='Tìm kiếm sản phẩm'
              className='w-full rounded-md border py-2 pl-10 pr-4 text-sm focus:border-blue-300 focus:outline-none focus:ring'
            />
            <Search className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
          </div>
        </div>

        {/* Right: Icons */}
        <div className='flex items-center space-x-4'>
          <Search className='h-5 w-5 text-black md:hidden' />
          <User className='h-5 w-5 text-black' />
          <div className='hidden items-center space-x-1 md:flex'>
            <Notification className='h-5 w-5 text-gray-600' />
            <span className='text-sm'>0003528</span>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
}
