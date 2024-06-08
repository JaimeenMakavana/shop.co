import { MdOutlineDone } from "react-icons/md";
import { Rating } from "react-simple-star-rating";

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

export default ReviewCard;
