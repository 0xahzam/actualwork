import React from "react";
import Image from "next/image";
import manifesto from "../public/manifesto.svg";
import resources from "../public/resources.svg";
import twitter from "../public/twitter.svg";
import menu from "../public/menu.svg";

export default function nav() {
  return (
    <div className="mt-[32px] flex content-center justify-between">
      <div className="ml-[80px] text-[24px] font-[700]">ActualWork</div>
      <div className=" mr-[80px] hidden flex-row gap-[12px] lg:flex">
        <div className="border-[rgba(17, 17, 17, 0.12)] flex h-[38px] items-center justify-center gap-[7.67px]  rounded-[6px] border-[1px] border-solid bg-[#FFFFFF] pl-[10px] pr-[10px]">
          <Image src={manifesto} alt="" />
          <div className="text=[14px] font-[500]" />
          Manifesto
        </div>
        <div className="border-[rgba(17, 17, 17, 0.12)] flex h-[38px] items-center justify-center gap-[7.67px]  rounded-[6px] border-[1px] border-solid bg-[#FFFFFF] pl-[10px] pr-[10px]">
          <Image src={resources} alt="" />
          <div className="text=[14px] font-[500]" />
          Resources
        </div>
        <div className="border-[rgba(17, 17, 17, 0.12)] flex h-[38px] items-center justify-center gap-[7.67px]  rounded-[6px] border-[1px] border-solid bg-[#FFFFFF] pl-[10px] pr-[10px]">
          <Image src={twitter} alt="" />
          <div className="text=[14px] font-[500]" />
          Follow on Twitter
        </div>
      </div>
      <div className=" mr-[80px] flex lg:hidden">
        <div className="border-[rgba(17, 17,  17, 0.12)] flex h-[38px] items-center justify-center gap-[7.67px] rounded-[6px]  border-[1px] border-solid bg-[#FFFFFF] pl-[10px] pr-[10px] lg:hidden">
          <Image src={menu} alt="" />
          <div className="text=[14px] font-[500]" />
          Menu
        </div>
      </div>
    </div>
  );
}
