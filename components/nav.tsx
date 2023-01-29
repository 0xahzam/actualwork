import Image from "next/image";
import manifesto from "../public/manifesto.svg";
import resources from "../public/resources.svg";
import twitter from "../public/twitter.svg";
import menu from "../public/menu.svg";

export default function nav() {
  return (
    <div className="mt-[32px] flex content-center justify-between">
      <div className="lg:ml-[80px] ml-[16px] text-[24px] font-[700]">ActualWork</div>
      <div className=" mr-[80px] hidden flex-row gap-[12px] lg:flex">
        <div className="cursor-pointer border-[rgba(17, 17, 17] border-opacity-[12%] flex h-[38px] items-center justify-center gap-[7.67px]  rounded-[6px] border-[1px] border-solid bg-[#FFFFFF] pl-[10px] pr-[10px]">
          <Image src={manifesto} alt="" />
          <div className="text=[14px] font-[500]" />
          Manifesto
        </div>
        <div className="cursor-pointer border-[rgba(17, 17, 17] border-opacity-[12%] flex h-[38px] items-center justify-center gap-[7.67px]  rounded-[6px] border-[1px] border-solid bg-[#FFFFFF] pl-[10px] pr-[10px]">
          <Image src={resources} alt="" />
          <div className="text=[14px] font-[500]" />
          Resources
        </div>
        <div className="cursor-pointer border-[rgba(17, 17, 17] border-opacity-[12%] flex h-[38px] items-center justify-center gap-[7.67px]  rounded-[6px] border-[1px] border-solid bg-[#FFFFFF] pl-[10px] pr-[10px]">
          <Image src={twitter} alt="" />
          <div className="text=[14px] font-[500]" />
          Follow on Twitter
        </div>
      </div>
      <div className=" lg:mr-[80px] mr-[16px] flex lg:hidden">
        <div className="cursor-pointer border-[rgba(17, 17,  17] border-opacity-[12%] flex h-[38px] items-center justify-center gap-[7.67px] rounded-[6px]  border-[1px] border-solid bg-[#FFFFFF] pl-[10px] pr-[10px] lg:hidden">
          <Image src={menu} alt="" />
          <div className="text=[14px] font-[500]" />
          Menu
        </div>
      </div>
    </div>
  );
}
