import React from "react";
import { PiShoppingCartSimpleThin, PiUserCircleThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="fixed top-[20px] h-[50px] inset-x-0 flex justify-between items-center px-[16px] bg-white">
      <div className=" inline-flex justify-start items-center gap-2">
        <MobileMenu />
        <span className=" font-bold">SHOP.CO</span>
      </div>
      <div className=" inline-flex justify-end items-center gap-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
