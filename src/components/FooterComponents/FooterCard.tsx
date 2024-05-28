import React from "react";
import { CiMail } from "react-icons/ci";

const FooterCard = () => {
  return (
    <div className="grid md:grid-cols-2 bg-black absolute top-0 inset-x-[16px] card">
      <p className="baiJamjuree text-white text-[26px] font-semibold">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </p>
      <div className=" space-y-2">
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
