import React from "react";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-[20px] h-[50px] inset-x-0 flex justify-between items-center px-[16px] bg-white z-[5]">
      <div className=" inline-flex justify-start items-center gap-2">
        <MobileMenu />
        <Link href="/" className=" font-bold">
          SHOP.CO
        </Link>
      </div>
      <div className=" inline-flex justify-end items-center gap-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
