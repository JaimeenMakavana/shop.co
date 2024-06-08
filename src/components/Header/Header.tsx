"use client";
import React from "react";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="fixed top-[20px] h-[50px] inset-x-0 flex justify-between items-center px-[16px] bg-white z-[5] max-w-screen-xl mx-auto md:px-10 md:shadow-sm">
      <div className=" inline-flex justify-start items-center gap-2 md:gap-0">
        <MobileMenu />
        <Link href="/" className=" font-bold">
          SHOP.CO
        </Link>
      </div>
      <div className="hidden sm:inline-flex justify-between items-center gap-3 md:gap-6 ">
        <p
          className=" cursor-pointer hover:underline"
          onClick={() => router.push("/category/casual")}
        >
          Shop
        </p>
        <p
          className=" cursor-pointer hover:underline"
          onClick={() => router.push("/")}
        >
          On Sale
        </p>
        <p
          className=" cursor-pointer hover:underline"
          onClick={() => router.push("/category/casual")}
        >
          New Arrivals
        </p>
        <p
          className=" cursor-pointer hover:underline"
          onClick={() => router.push("/category/casual")}
        >
          Brands
        </p>
      </div>
      <div className=" inline-flex justify-end items-center gap-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
