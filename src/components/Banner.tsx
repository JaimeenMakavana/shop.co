import React from "react";

const Banner = () => {
  return (
    <div className=" bg-black fixed top-0 inset-x-0 text-white inline-flex w-full justify-center items-center">
      <p className=" text-xs">Sign up and get 20% off to your first order.</p>
      <button className="text-sm font-semibold">Sign Up Now</button>
    </div>
  );
};

export default Banner;
