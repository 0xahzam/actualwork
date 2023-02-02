import React from "react";
import Image from "next/image";
import mckup from "../public/mckup.svg";
import Authflow from "./authflow";
import { useDisclosure } from "@chakra-ui/react";

function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex justify-center">
      <div className="mt-[63px] flex flex-col gap-[18px] lg:mt-[152px] lg:flex-row">
        <div className="flex w-[328px] flex-col gap-[24px] self-center lg:w-[552px] lg:gap-[40px]">
          <div className="text-[32px] font-[700] text-[#111111] sm:leading-[32px] lg:text-[64px] lg:leading-[64px]">
            Build and ship projects in public
          </div>

          <div className="text-[18px] font-[400] text-[#171717] opacity-[60%] lg:text-[24px]">
            Document your weekly progress of building your project in public.
            Simply add your weekly goals, share it on twitter and build.
          </div>

          <div className="flex flex-col gap-[12px] lg:flex-row">
            <div
              onClick={onOpen}
              className="flex h-[38px] cursor-pointer items-center  justify-center rounded-[6px] bg-[#111111] text-[14px] font-[500] text-[#FFFFFF] lg:w-[159px]"
            >
              Get Started
            </div>
            <div className="flex h-[38px] cursor-pointer items-center  justify-center rounded-[6px] border-[1px] border-solid border-[#171717] bg-[#FFFFFF] text-[14px] font-[500] text-[#111111] lg:w-[159px]">
              Explore Projects
            </div>
          </div>
        </div>
        <Image
          className="sm:h-[298px] sm:w-[328px] lg:h-[auto] lg:w-[auto]"
          src={mckup}
          alt=""
        />
      </div>

      <Authflow open={isOpen} close={onClose} />
    </div>
  );
}

export default Hero;
