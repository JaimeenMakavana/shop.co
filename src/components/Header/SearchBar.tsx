"use client";
import React, { useRef, useState } from "react";
import {
  PiMagnifyingGlassThin,
  PiShoppingCartSimpleThin,
  PiUserCircleThin,
} from "react-icons/pi";
import { useOutsideClick } from "@prismane/core/hooks";

const SearchBar = () => {
  const [SearchBarToggle, setSearchBarToggle] = useState(false);
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
            className={`size-[20px]`}
            onClick={() => setSearchBarToggle(!SearchBarToggle)}
          />
          <PiShoppingCartSimpleThin className=" size-[20px]" />
          <PiUserCircleThin className=" size-[20px]" />
        </>
      ) : (
        <div className=" relative" ref={ref}>
          <PiMagnifyingGlassThin
            className={`size-[20px] absolute left-[6px] top-[6px]`}
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
