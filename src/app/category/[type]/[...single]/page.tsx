"use client";
import { Reviews } from "@/Statics/Global";
import { NewArrivalDataconst } from "@/components/Home/HomeStatic";
import ShoppingCardComponent from "@/components/Home/NewArrival";
import ReviewCard from "@/components/Review";
import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";

const Rating = () => {
  return (
    <div className=" px-4 space-y-3">
      <div className=" flex justify-between items-center mt-4">
        <p className="mHeading font-semibold">All Review(410)</p>
        <div className=" flex justify-start items-center gap-2">
          <CiSettings className="text-[25px]" />
          <button className="btn btn-black px-3 !py-1">Write Review</button>
        </div>
      </div>
      {Reviews.map((ele: any, index: any) => (
        <ReviewCard key={index} data={ele} />
      ))}
    </div>
  );
};

const ProductDetail = () => {
  return (
    <div className=" px-4">
      <p>Product Details</p>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className=" px-4">
      <p>Product Details</p>
    </div>
  );
};
const ProductDetails = () => {
  const [SelectedTab, setSelectedTab] = useState("product");
  return (
    <div>
      <div className="flex box-border justify-between items-center mx-[16px] border-b-2 text-gray-500">
        <p
          className={`${
            SelectedTab === "product" && "text-black border-b-2 border-black"
          } cursor-pointer `}
          onClick={() => setSelectedTab("product")}
        >
          Product Details
        </p>
        <p
          className={`${
            SelectedTab === "rating" && "text-black border-b-2 border-black"
          } cursor-pointer `}
          onClick={() => setSelectedTab("rating")}
        >
          Rating & Reviews
        </p>
        <p
          className={`${
            SelectedTab === "faq" && "text-black border-b-2 border-black"
          } cursor-pointer `}
          onClick={() => setSelectedTab("faq")}
        >
          FAQs
        </p>
      </div>
      {SelectedTab === "product" && <ProductDetail />}
      {SelectedTab === "rating" && <Rating />}
      {SelectedTab === "faq" && <FAQ />}
    </div>
  );
};

const page = ({ params }: { params: any }) => {
  console.log("params::: ", params);
  return (
    <div className="py-[16px]">
      <div className=" flex justify-between items-center gap-2 py-4 mx-4 border-t">
        <p className="px-2 py-1 rounded-full bg-lightGrey">Small</p>
        <p className="px-2 py-1 rounded-full bg-lightGrey">Medium</p>
        <p className="px-2 py-1 rounded-full bg-lightGrey">Large</p>
        <p className="px-2 py-1 rounded-full bg-lightGrey">X-large</p>
      </div>

      <div className="flex justify-between items-center gap-3 py-4 mx-4 border-t">
        <div className="w-[100px] px-2 py-1 rounded-full bg-lightGrey inline-flex justify-between items-center">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <div className="flex-1 px-2 py-1 text-center rounded-full btn-black">
          Add to cart
        </div>
      </div>

      <ProductDetails />
      <ShoppingCardComponent
        name="You might also like"
        data={NewArrivalDataconst}
      />
    </div>
  );
};

export default page;
