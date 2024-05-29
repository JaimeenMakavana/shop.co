"use client";
import Image from "next/image";
import ArrivalImg from "/public/image/arrival1.png";
import { Rating } from "react-simple-star-rating";
import { NewArrivalDataconst } from "./HomeStatic";
const ArrivalCard = ({ data }: { data: any }) => {
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
      <p className=" mHeading text-sm py-1">{data.title}</p>
      <div className=" flex justify-start items-center gap-2">
        <Rating size={20} />
        <p className=" text-xs mt-1">{data.rating}/5</p>
      </div>
      <p className=" mHeading">${data.price}</p>
    </div>
  );
};

const ShoppingCardComponent = ({ name, data }: { name: string; data: any }) => {
  return (
    <div className="px-[16px] py-[16px] space-y-2">
      <h1 className="lHeading text-black text-center py-2">{name}</h1>
      <div className=" flex justify-start overflow-x-scroll gap-3 scrolls">
        {data.map((ele: any) => (
          <ArrivalCard key={ele.id} data={ele} />
        ))}
      </div>
      <button className=" btn btn-border">View All</button>
    </div>
  );
};

export default ShoppingCardComponent;
