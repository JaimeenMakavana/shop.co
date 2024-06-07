"use client";
import React, { useRef, useState } from "react";
import {
  PiMagnifyingGlassThin,
  PiShoppingCartSimpleThin,
  PiUserCircleThin,
} from "react-icons/pi";
import { useOutsideClick } from "@prismane/core/hooks";
import Link from "next/link";
import { SlSettings } from "react-icons/sl";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { DiMitlicence } from "react-icons/di";
import Image from "next/image";

const ProfileDropdown = () => {
  return (
    <div
      className="absolute top-6 right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div className=" flex justify-start items-center gap-3 py-2 pl-4 mx-auto border-b ">
        <div className=" size-[30px] rounded-full overflow-hidden">
          <Image
            src={
              "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            width={500}
            height={500}
            alt=""
            className=" object-contain object-center min-w-full min-h-full"
          />
        </div>
        <p className=" text-sm">Jaimeen M.</p>
      </div>
      <div className="py-1" role="none">
        <p
          className="pl-4 py-2 text-sm text-gray-700  flex gap-2 "
          role="menuitem"
          id="menu-item-0"
        >
          <SlSettings className=" size-[20px]" />
          Account settings
        </p>
        <p
          className=" flex gap-2 pl-4 py-2 text-sm text-gray-700"
          role="menuitem"
          id="menu-item-1"
        >
          <IoIosHelpCircleOutline className=" size-[20px]" />
          Support
        </p>
        <p
          className=" flex gap-2 pl-4 py-2 text-sm text-gray-700"
          role="menuitem"
          id="menu-item-2"
        >
          <DiMitlicence className=" size-[20px]" />
          License
        </p>
        <form
          method="POST"
          action="#"
          role="none"
          className=" border-t border-black"
        >
          <button
            type="submit"
            className="block w-full px-4 py-2 text-left text-sm text-gray-700"
            role="menuitem"
            id="menu-item-3"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
};

const SearchBar = () => {
  const [SearchBarToggle, setSearchBarToggle] = useState(true);
  const [ProfileToggle, setProfileToggle] = useState(false);
  //   handle outside click
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setSearchBarToggle(!SearchBarToggle);
  });
  return (
    <>
      {SearchBarToggle ? (
        <>
          <PiMagnifyingGlassThin
            className={`size-[20px] cursor-pointer`}
            onClick={() => setSearchBarToggle(!SearchBarToggle)}
          />
          <Link href="/cart">
            <PiShoppingCartSimpleThin className=" size-[20px] cursor-pointer " />
          </Link>
          <div className="relative">
            <PiUserCircleThin
              className=" size-[20px] cursor-pointer"
              onMouseEnter={() => setProfileToggle(true)}
              onMouseLeave={() => setProfileToggle(false)}
            />
            {ProfileToggle && <ProfileDropdown />}
          </div>
        </>
      ) : (
        <div className=" relative" ref={ref}>
          <PiMagnifyingGlassThin
            className={`size-[20px] absolute left-[6px] top-[6px] cursor-pointer`}
            onClick={() => setSearchBarToggle(!SearchBarToggle)}
          />
          <input
            type="text"
            className=" w-[120px] pl-[26px] text-sm py-1 focus:outline-none border rounded-full bg-lightGrey"
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
