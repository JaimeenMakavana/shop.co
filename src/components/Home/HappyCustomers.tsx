"use client";
import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import { Rating } from "react-simple-star-rating";

const Reviews = [
  {
    id: 1,
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "John D.",
    review:
      "Shop.co has an amazing selection of men's clothing. The shirts I bought are comfortable and stylish, perfect for both work and casual outings.",
  },
  {
    id: 3,
    name: "Emily R.",
    review:
      "I've never been disappointed with my purchases from Shop.co. The fabrics are high-quality and the designs are trendy. I always get compliments on my outfits.",
  },
  {
    id: 4,
    name: "Michael B.",
    review:
      "The customer service at Shop.co is fantastic. They were very helpful with my inquiries and the shipping was fast. The clothes fit perfectly and look great.",
  },
  {
    id: 5,
    name: "Jessica T.",
    review:
      "I love the variety of accessories available at Shop.co. The handbags and jewelry are stylish and affordable. They add the perfect touch to any outfit.",
  },
  {
    id: 6,
    name: "David K.",
    review:
      "Shop.co offers excellent quality at reasonable prices. The pants and jackets I've purchased are durable and look good as new even after several washes.",
  },
  {
    id: 7,
    name: "Amanda L.",
    review:
      "The dresses from Shop.co are simply beautiful. They fit like a glove and the designs are stunning. I've found my go-to store for all my fashion needs.",
  },
  {
    id: 8,
    name: "Chris W.",
    review:
      "As a regular shopper at Shop.co, I can say they consistently deliver great products. The shirts and shorts I've bought are my favorite pieces in my wardrobe.",
  },
  {
    id: 9,
    name: "Olivia H.",
    review:
      "The sales and discounts at Shop.co are fantastic. I always find great deals on high-quality clothes. Their new arrivals are always exciting to check out.",
  },
  {
    id: 10,
    name: "James P.",
    review:
      "I'm very satisfied with my purchases from Shop.co. The materials are comfortable, the sizes are accurate, and the designs are exactly what I was looking for.",
  },
];

const ReviewHeader = ({
  CurrentReview,
  setCurrentReview,
}: {
  CurrentReview: any;
  setCurrentReview: any;
}) => {
  const handleLeftSide = () => {
    if (CurrentReview === 0) {
      setCurrentReview(Reviews.length - 1);
    }
    setCurrentReview(CurrentReview - 1);
  };
  const handleRightSide = () => {
    if (CurrentReview === Reviews.length - 1) {
      setCurrentReview(0);
    }
    setCurrentReview(CurrentReview + 1);
  };
  return (
    <div className=" flex justify-between items-end">
      <h1 className="lHeading text-black">OUR HAPPY CUSTOMERS</h1>
      <div className=" flex justify-between items-center gap-3 text-[25px]">
        <PiArrowLeftLight
          onClick={handleLeftSide}
          className=" cursor-pointer"
        />
        <PiArrowRightLight
          onClick={handleRightSide}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
};

const ReviewCard = ({ data }: { data: any }) => {
  return (
    <div className=" rounded-xl border border-gray-200 p-3 space-y-2 min-h-[192px]">
      <div className=" flex justify-start items-center gap-2">
        <Rating size={20} />
      </div>
      <p className=" inline-flex justify-start items-center gap-1">
        {data.name}
        <span className="">
          <MdOutlineDone className=" bg-green-600 rounded-full text-white p-[2px]" />
        </span>
      </p>
      <p className=" text-gray-500 text-sm">{data.review}</p>
    </div>
  );
};

const HappyCustomers = () => {
  const [CurrentReview, setCurrentReview] = useState(0);

  return (
    <div className="p-[16px] space-y-4">
      <ReviewHeader
        setCurrentReview={setCurrentReview}
        CurrentReview={CurrentReview}
      />
      <ReviewCard data={Reviews[CurrentReview]} />
    </div>
  );
};

export default HappyCustomers;
