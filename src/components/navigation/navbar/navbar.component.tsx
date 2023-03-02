import Image from "next/image";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import LoginButton from "./login-button.component";
import Menu from "./menu/menu.component";

export type NavbarProps = {
  menu: {
    title: string;
    url: string;
    submenu: { [key: string]: any }[] | null;
  }[];
};

const Navbar: React.FC<NavbarProps> = ({ menu }) => {
  const depthLevel = 0;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center bg-white text-green-900 border-solid border-b-[1px] border-gray-300 h-[60px]">
      {/* Container Start */}
      <div className="container mx-auto px-5 max-w-[1200px] flex items-center  justify-between">
        {/* Title & Logo Start */}
        <div className="flex items-center z-50 md:w-auto w-full">
          <Image
            src="/static/yukpulih-logo.png"
            alt="Yuk Pulih Logo"
            className="md:cursor-pointer"
            width={28}
            height={28}
          />
          <span className="text-lg ml-2 font-bold">Yuk Pulih</span>
        </div>
        {/* Title & Logo End */}

        {/* Menu Start */}
        <div className="md:flex hidden items-center mt-2 text-small gap-5">
          {menu.map((item, index) => {
            return <p key={`title-${index}`}>{item.title}</p>;
          })}
        </div>
        {/* Menu End */}

        {/* Login and Search Button Start */}
        <div className="md:flex md:items-center gap-5 md:gap-3 hidden">
          <div className="cursor-pointer flex items-center justify-between gap-2 w-32 px-3 h-8 bg-gray-200 hover:bg-gray-300 border border-solid border-gray-200 rounded-lg">
            <span className="text-green-900 font-medium">Search</span>
            <MagnifyingGlassIcon className="h-5 w-5 text-green-900" />
          </div>
          <LoginButton />
        </div>
        {/* Login and Search Button End */}

        {/* Mobile/Tablet View Start */}
        {/* Xmark and Bar Button for Mobile/Tablet View Start */}
        <div className="md:hidden ml-auto flex items-center gap-5">
          <MagnifyingGlassIcon className="h-5 w-5 text-green-900 cursor-pointer" />
          {isOpen ? (
            <XMarkIcon
              onClick={() => setIsOpen(!isOpen)}
              className="h-7 w-7 text-green-900 cursor-pointer"
            />
          ) : (
            <Bars3Icon
              onClick={() => setIsOpen(!isOpen)}
              className="h-7 w-7 text-green-900 cursor-pointer"
            />
          )}
        </div>
        {/* Xmark and Bar Button for Mobile/Tablet View End */}

        {/* Menu for Mobile/Tablet View Start */}
        {isOpen && (
          <div className="md:hidden absolute left-0 top-0 bottom-0 right-0 my-[60px] w-full">
            {menu.map((item, index) => {
              return (
                <Menu
                  key={`menu-${index}`}
                  title={item.title}
                  url={item.url}
                  submenu={item.submenu}
                  depthLevel={depthLevel}
                />
              );
            })}
            <div className="p-5">
              <LoginButton />
            </div>
          </div>
        )}
        {/* Menu for Mobile/Tablet View End */}
        {/* Mobile/Tablet View End */}
      </div>
      {/* Container End */}
    </nav>
  );
};

export default Navbar;