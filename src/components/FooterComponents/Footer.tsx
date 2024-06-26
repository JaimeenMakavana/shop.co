import {
  CompanySubmenu,
  FAQSubmenu,
  HelpSubmenu,
  ResouceSubmenu,
} from "@/Statics/Footer";
import SocialMediaIcon, { FooterMenu } from "@/UI/SocialMediaIcon";
import React from "react";
import {
  PiFacebookLogoThin,
  PiGithubLogoThin,
  PiInstagramLogoThin,
  PiTwitterLogoThin,
} from "react-icons/pi";
import FooterCard from "./FooterCard";

const SocialMediaData = [
  { icon: <PiTwitterLogoThin />, href: "/" },
  { icon: <PiFacebookLogoThin />, href: "/" },
  { icon: <PiInstagramLogoThin />, href: "/" },
  { icon: <PiGithubLogoThin />, href: "/" },
];

const FooterData = [
  { menu: "COMPANY", subMenu: CompanySubmenu },
  { menu: "HELP", subMenu: HelpSubmenu },
  { menu: "FAQ", subMenu: FAQSubmenu },
  { menu: "RESOUCES", subMenu: ResouceSubmenu },
];
const Footer = () => {
  return (
    <div
      className=" bg-lightGrey grid grid-cols-2 px-[16px] relative pt-[120px]
     mt-[150px] max-w-screen-xl mx-auto md:px-10 md:grid-cols-4"
    >
      <FooterCard />
      <div className="col-span-full flex flex-col justify-between py-4">
        <p className=" font-bold">SHOP.CO</p>
        <p className=" text-sm text-gray-500 mb-2">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="flex justify-start items-center gap-3">
          {SocialMediaData.map((ele: any, index: any) => (
            <SocialMediaIcon key={index} icon={ele.icon} href={ele.href} />
          ))}
        </div>
      </div>
      {FooterData.map((ele: any, index: any) => (
        <FooterMenu menu={ele.menu} subMenu={ele.subMenu} key={index} />
      ))}
      <div className="border-t-2 col-span-full">
        <p className=" text-xs">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className=" inline-flex justify-center items-center gap-2"></div>
      </div>
    </div>
  );
};

export default Footer;
