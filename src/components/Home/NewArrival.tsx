"use client";
import Image from "next/image";
import React, { useState } from "react";
import ArrivalImg from "/public/image/arrival1.png";
import { Rating } from "react-simple-star-rating";
const ArrivalCard = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  return (
    <div className=" shrink-0">
      <div className="size-[200px] rounded-xl overflow-hidden">
        <Image
          src={ArrivalImg}
          width={200}
          height={200}
          alt="card"
          className=" object-cover"
        />
      </div>
      <p className=" mHeading text-sm py-1">T-SHIRT WITH TAPE DETAILS</p>
      <div className=" flex justify-start items-center gap-2">
        <Rating
          size={20}
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          emptyClassName=""
        />
        <p className=" text-xs mt-1">4.5/5</p>
      </div>
      <p className=" mHeading">$200</p>
    </div>
  );
};

const ShoppingCardComponent = ({ name }: { name: string }) => {
  return (
    <div className="px-[16px] py-[16px] space-y-2">
      <h1 className="lHeading text-black text-center py-2">{name}</h1>
      <div className=" flex justify-start overflow-x-scroll gap-3 scrolls">
        <ArrivalCard />
        <ArrivalCard />
        <ArrivalCard />
        <ArrivalCard />
        <ArrivalCard />
        <ArrivalCard />
        <ArrivalCard />
      </div>
      <button className=" btn btn-border">View All</button>
    </div>
  );
};

export default ShoppingCardComponent;
