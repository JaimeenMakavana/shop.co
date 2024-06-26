import React from "react";
import { CiMail } from "react-icons/ci";

const FooterCard = () => {
  return (
    <div className="grid md:grid-cols-2 bg-black absolute -top-[120px] inset-x-[16px] md:mx-6 card md:-top-14 md:h-[150px]">
      <h1 className="lHeading md:my-auto">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className=" space-y-2 md:my-auto">
        <div className=" relative rounded-full overflow-hidden">
          <CiMail className=" absolute left-2 top-[10px]" />
          <input
            type="text"
            placeholder="Enter your email address"
            className=" w-full pl-[27px] py-2 text-sm"
          />
        </div>
        <button className="btn btn-gr">Subscribe to Newsletter</button>
      </div>
    </div>
  );
};

export default FooterCard;
