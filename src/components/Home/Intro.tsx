"use client";
import Image from "next/image";
import HI1 from "/public/image/HI1.png";
import HI2 from "/public/image/Vector.png";
import { twMerge } from "tailwind-merge";
import { usePathname, useRouter } from "next/navigation";

const DataDisplay = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <div>
      <h3 className=" mHeading font-bold text-black">{name}</h3>
      <p className=" paragraph">{desc}</p>
    </div>
  );
};

const Decoratives = ({ size, position }: { size: any; position: any }) => {
  const className = `size-[${size}px] absolute ${position}`;
  return (
    <div className={twMerge(` size-[60px]`, className)}>
      <Image src={HI2} alt="deco1" quality={100} className=" object-cover" />
    </div>
  );
};
const Intro = () => {
  const router = useRouter();

  return (
    <div className=" grid bg-offWhite px-[16px] py-[16px] md:grid-cols-2 md:px-10">
      <div className=" space-y-2 ">
        <h1 className=" lHeading text-black">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className=" paragraph">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button
          className=" btn btn-black md:w-fit md:px-5 md:my-5"
          onClick={() => router.push(`/category/casual`)}
        >
          Shop Now
        </button>
        <div className="grid grid-cols-2 space-y-1 place-items-center md:grid-cols-3">
          <DataDisplay name="200+" desc="International Brands" />
          <DataDisplay name="2,000+" desc="High-Quality Products" />
          <div className=" col-span-full md:col-span-1">
            <DataDisplay name="30,000+" desc="Happy Customers" />
          </div>
        </div>
      </div>
      <div className=" w-full relative">
        <Decoratives size={100} position="top-0 right-0" />
        <Decoratives size={50} position="top-10 left-0" />
        <Image src={HI1} alt="demo" quality={100} className=" object-cover" />
      </div>
    </div>
  );
};

export default Intro;
