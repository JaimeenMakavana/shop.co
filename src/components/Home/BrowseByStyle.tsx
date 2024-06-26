"use client";
import Image from "next/image";
import Dress1 from "/public/image/dress1.png";
import Dress2 from "/public/image/dress2.png";
import Dress3 from "/public/image/dress3.png";
import Dress4 from "/public/image/dress4.png";
import { useRouter } from "next/navigation";

const DressCardData = [
  { id: 1, name: "Casual", url: Dress1 },
  { id: 2, name: "Formal", url: Dress2 },
  { id: 3, name: "Party", url: Dress4 },
  { id: 4, name: "Gym", url: Dress3 },
];

const DressCard = ({ name, url }: { name: string; url: any }) => {
  const router = useRouter();
  return (
    <div
      className=" w-[240px] h-[150px] rounded-xl group overflow-hidden relative hover:shadow-sm transition-all duration-300 cursor-pointer"
      onClick={() => router.push(`/category/${name}`)}
    >
      <p className=" absolute left-3 top-3 font-semibold group-hover:absolute">
        {name}
      </p>
      <Image
        src={url}
        alt="dress"
        width={290}
        height={190}
        quality={100}
        className=" object-cover transition-all duration-500 group-hover:scale-105 object-bottom right-0"
      />
    </div>
  );
};

const BrowseByStyle = () => {
  return (
    <div className=" mx-[16px] py-[16px] bg-lightGrey rounded-xl flex flex-col justify-center items-center space-y-2 md:mx-10">
      <h1 className=" lHeading text-black text-center font-bold">
        BROWSE BY dress STYLE
      </h1>
      <div className=" md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-4">
        {DressCardData.map((card: any) => (
          <DressCard key={card.id} name={card.name} url={card.url} />
        ))}
      </div>
    </div>
  );
};

export default BrowseByStyle;
