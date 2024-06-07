"use client";
import { Reviews } from "@/Statics/Global";
import { NewArrivalDataconst } from "@/components/Home/HomeStatic";
import ShoppingCardComponent from "@/components/Home/NewArrival";
import ReviewCard from "@/components/Review";
import Image from "next/image";
import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { Rating } from "react-simple-star-rating";

const Ratings = () => {
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
      {SelectedTab === "rating" && <Ratings />}
      {SelectedTab === "faq" && <FAQ />}
    </div>
  );
};

const page = ({ params }: { params: any }) => {
  console.log("params::: ", params);
  return (
    <div className="py-[16px]">
      <div className="min-[850px]:grid-cols-2 grid gap-5 p-4">
        <div className="flex flex-col md:flex-row">
          <div className="overflow-hidden rounded-xl p-1 sm:p-3 md:order-2">
            <Image
              src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={500}
              quality={100}
              className="min-h-full min-w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex items-center justify-between p-1 sm:p-3 md:flex-col md:gap-2">
            <div className="size-[100px] overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="min-h-full min-w-full object-cover"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="size-[100px] overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="min-h-full min-w-full object-cover"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="size-[100px] overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="min-h-full min-w-full object-cover"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className=" mHeading ">One Life Graphic T-shirt</h1>
          <div className=" flex justify-start items-center gap-2">
            <Rating size={20} />
          </div>
          <p>
            {" "}
            <span className="mHeading font-bold">$250 </span>{" "}
            <span className=" mHeading text-gray-400 font-bold line-through decoration-gray-500 ">
              $300
            </span>
          </p>
          <p className=" text-gray-500 text-sm">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
        </div>
      </div>

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
