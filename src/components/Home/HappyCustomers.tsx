"use client";
import React, { useState } from "react";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import ReviewCard from "../Review";
import { Reviews } from "@/Statics/Global";

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
