import React from "react";
import {
  PiMagnifyingGlassThin,
  PiShoppingCartSimpleThin,
  PiUserCircleThin,
} from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="fixed top-[20px] h-[50px] inset-x-0 flex justify-between items-center px-[16px] bg-white">
      <div className=" inline-flex justify-start items-center gap-2">
        <RxHamburgerMenu />
        <span className=" font-bold">SHOP.CO</span>
      </div>
      <div className=" inline-flex justify-end items-center gap-4">
        <PiMagnifyingGlassThin className=" size-[20px]" />
        <PiShoppingCartSimpleThin className=" size-[20px]" />
        <PiUserCircleThin className=" size-[20px]" />
      </div>
    </header>
  );
};

export default Header;
