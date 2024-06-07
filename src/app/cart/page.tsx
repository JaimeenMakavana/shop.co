import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import React from "react";
import Cart1 from "/public/image/cart1.png";
import { HiOutlineTrash } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { CiBarcode } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";

const CartCard = () => {
  return (
    <div className=" flex gap-3 pt-3">
      <div className=" size-[100px] rounded-xl overflow-hidden shrink-0">
        <Image src={Cart1} quality={100} alt="cart" width={100} height={100} />
      </div>
      <div className=" flex-1 h-[100px] justify-between items-center">
        <div className=" flex justify-between items-start">
          <div className=" flex-1">
            <h2 className=" whitespace-nowrap max-w-[120px] truncate">
              Gradient Graphic T-shirt
            </h2>
            <p className=" text-xs font-semibold">
              Size: <span className=" font-normal">Large</span>
            </p>
            <p className=" text-xs font-semibold">
              Color: <span className=" font-normal">White</span>
            </p>
          </div>
          <div className=" p-1">
            <HiOutlineTrash />
          </div>
        </div>
        <div className="flex justify-between items-center pl-1">
          <p className=" font-semibold">$145</p>
          <p className=" inline-flex gap-3 bg-lightGrey rounded-full py-1 px-3">
            <span>-</span> 1 <span>+</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const ValueComp = ({
  titleClass,
  priceClass,
  title,
  value,
}: {
  title: string;
  value: string;
  titleClass?: string;
  priceClass?: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <p className={twMerge(` text-gray-500`, titleClass)}>{title}</p>
      <p className={twMerge(`font-bold`, priceClass)}>${value}</p>
    </div>
  );
};

const page = () => {
  return (
    <div className="px-[16px] py-[16px]">
      <Breadcrumb />
      <h1 className=" lHeading font-bold text-black  py-3">Your Cart</h1>
      <div className=" card border space-y-4 divide-y max-h-[520px] overflow-y-auto scrollRemove">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>

      <div className=" card border space-y-2 mt-5 ">
        <h1 className=" mHeading font-semibold text-black py-3">
          Order Summary
        </h1>
        <ValueComp title="Subtotal" value="565" />
        <ValueComp
          title="Descount (-20%)"
          value="-112"
          priceClass=" text-red-500"
        />
        <ValueComp title="Delivery Fee" value="15" />
        <div className=" border-t pt-2 mt-2">
          <ValueComp titleClass=" text-black" title="Total" value="467" />
        </div>
        <div className=" flex justify-between items-center gap-2">
          <div className="relative flex-1">
            <CiBarcode className=" absolute top-[9px] left-2" />
            <input
              type="text"
              placeholder="Add Promo Code"
              className="w-[180px] focus:outline-none bg-lightGrey rounded-full py-[6px] pl-[30px]"
            />
          </div>
          <button className=" btn btn-black btn-git px-2">Apply</button>
        </div>
        <button className=" btn btn-black inline-flex justify-center items-center gap-2">
          Go Check Out{" "}
          <span>
            <GoArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default page;
