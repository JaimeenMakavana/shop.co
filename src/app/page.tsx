import Image from "next/image";
import HI1 from "/public/image/HI1.png";
import { twMerge } from "tailwind-merge";
const DataDisplay = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <div>
      <h3 className=" mHeading font-bold text-black">{name}</h3>
      <p className=" paragraph">{desc}</p>
    </div>
  );
};

const Decoratives = ({ size, position }: { size: any; position: any }) => {
  const className = `size-[${size}px] ${position}`;
  return (
    <div className={twMerge(` size-[60px]`, className)}>
      <Image src={HI1} alt="deco1" quality={100} className=" object-cover" />
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <div className=" grid bg-offWhite px-[16px] py-[16px]">
        <div className=" space-y-2">
          <h1 className=" lHeading text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className=" paragraph">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className=" btn btn-black">Shop Now</button>
          <div className="grid grid-cols-2 space-y-1 place-items-center">
            <DataDisplay name="200+" desc="International Brands" />
            <DataDisplay name="2,000+" desc="High-Quality Products" />
            <div className=" col-span-full">
              <DataDisplay name="30,000+" desc="Happy Customers" />
            </div>
          </div>
        </div>
        <div className=" w-full relative">
          <Image src={HI1} alt="demo" quality={100} className=" object-cover" />
        </div>
      </div>
    </main>
  );
}
