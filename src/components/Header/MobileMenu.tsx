"use client";
import { MobileMenuPageData } from "@/Statics/Header";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import MobileMenuWrapper from "./MobileMenuWrapper";
import MobileMenuPage from "./MobileMenuPage";

const MobileMenu = () => {
  const [MobileToggle, setMobileToggle] = useState(false);
  return (
    <div>
      <RxHamburgerMenu onClick={() => setMobileToggle(!MobileToggle)} />
      {/* menu*/}
      <MobileMenuWrapper
        MobileToggle={!MobileToggle}
        setMobileToggle={setMobileToggle}
      >
        {MobileMenuPageData.map((ele: any, index: any) => (
          <MobileMenuPage
            key={index}
            pageName={ele.pageName}
            subPage={ele.subPage ? ele.subPage : []}
          />
        ))}
      </MobileMenuWrapper>
    </div>
  );
};

export default MobileMenu;
