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

const Footer = () => {
  return (
    <div className=" bg-lightGrey grid grid-cols-2 px-[16px]">
      <div className="col-span-full flex flex-col h-[100px] justify-between py-4">
        <p className=" font-bold">SHOP.CO</p>
        <div className=" inline-flex justify-start items-center gap-3">
          <SocialMediaIcon icon={<PiTwitterLogoThin />} href="/" />
          <SocialMediaIcon icon={<PiFacebookLogoThin />} href="/" />
          <SocialMediaIcon icon={<PiInstagramLogoThin />} href="/" />
          <SocialMediaIcon icon={<PiGithubLogoThin />} href="/" />
        </div>
      </div>
      <FooterMenu menu="COMPANY" subMenu={CompanySubmenu} />
      <FooterMenu menu="HELP" subMenu={HelpSubmenu} />
      <FooterMenu menu="FAQ" subMenu={FAQSubmenu} />
      <FooterMenu menu="RESOUCES" subMenu={ResouceSubmenu} />
    </div>
  );
};

export default Footer;
