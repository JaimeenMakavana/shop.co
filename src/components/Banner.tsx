"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className="banner bg-black fixed top-0 inset-x-0 text-white inline-flex w-full justify-center items-center z-[5] py-[2px]">
      <Marquee className="text-xs mb-4">
        Sign up and get 20% off to your first order.
      </Marquee>
      <button className="text-xs font-semibold">Sign Up Now</button>
    </div>
  );
};

export default Banner;
