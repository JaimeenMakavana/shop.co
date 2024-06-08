"use client";

import { MobileMenuPageData } from "@/Statics/Header";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenuWrapper from "./MobileMenuWrapper";
import MobileMenuPage from "./MobileMenuPage";
import Image from "next/image";

const MobileMenu = () => {
  const [MobileToggle, setMobileToggle] = useState(true);
  return (
    <div>
      <RxHamburgerMenu
        onClick={() => setMobileToggle(!MobileToggle)}
        className=" cursor-pointer sm:hidden"
      />
      {/* menu*/}
      <MobileMenuWrapper
        MobileToggle={MobileToggle}
        setMobileToggle={setMobileToggle}
      >
        <div className=" flex justify-start items-center gap-3 pb-3 mb-3 border-b ">
          <div className=" size-[40px] rounded-full overflow-hidden">
            <Image
              src={
                "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              width={500}
              height={500}
              alt=""
              className=" object-contain object-center min-w-full min-h-full"
            />
          </div>
          <p>Jaimeen M.</p>
        </div>
        <div className=" space-y-3">
          {MobileMenuPageData.map((ele: any, index: any) => (
            <MobileMenuPage
              key={index}
              icon={ele.icon}
              pageName={ele.pageName}
              subPage={ele.subPage ? ele.subPage : []}
            />
          ))}
        </div>
      </MobileMenuWrapper>
    </div>
  );
};

export default MobileMenu;
