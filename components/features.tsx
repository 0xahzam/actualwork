import Image from "next/image";
import arrow from "../public/Arrow - Right.svg";
export default function features() {
  return (
    <div className="flex justify-center">
      <div className="lg:mt-[200px] mt-[80px] flex w-[328px] flex-col gap-[48px] lg:w-[864px]">
        <div className="text-[24px] font-[700] text-[#111111] lg:text-center lg:text-[48px]">
          Resources to get you started
        </div>
        <div className="flex flex-col gap-[20px] lg:grid lg:grid-cols-2 lg:grid-rows-2">
          <div className="flex h-[144px] lg:w-[422px] w-[328px] items-center justify-center rounded-[12px] border-[1px] border-solid border-[#111111] border-opacity-25 bg-[#ffffff]">
            <div className="flex lg:w-[358px] w-[280px] justify-center gap-[20px]">
              <div className="flex w-[292.75px] flex-col gap-[12px]">
                <div className="text-[20px] font-[600] leading-[130%] text-[#111111]">
                  Why you should build in public?
                </div>
                <div className="text-[16px] text-[#111111] opacity-[50%]">
                  by Ryan Hoover of Product Hunt
                </div>
              </div>
              <Image src={arrow} alt="" />
            </div>
          </div>
          <div className="flex h-[144px] lg:w-[422px] w-[328px] items-center justify-center rounded-[12px] border-[1px] border-solid border-[#111111] border-opacity-25 bg-[#ffffff]">
            <div className="flex lg:w-[358px] w-[280px] justify-center gap-[20px]">
              <div className="flex w-[292.75px] flex-col gap-[12px]">
                <div className="text-[20px] font-[600] leading-[130%] text-[#111111]">
                  What exactly is building in public?
                </div>
                <div className="text-[16px] text-[#111111] opacity-[50%]">
                  by buildinpublic.xyz{" "}
                </div>
              </div>
              <Image src={arrow} alt="" />
            </div>
          </div>
          <div className="flex h-[144px] lg:w-[422px] w-[328px] items-center justify-center rounded-[12px] border-[1px] border-solid border-[#111111] border-opacity-25 bg-[#ffffff]">
            <div className="flex lg:w-[358px] w-[280px] justify-center gap-[20px]">
              <div className="flex w-[292.75px] flex-col gap-[12px]">
                <div className="text-[20px] font-[600] leading-[130%] text-[#111111]">
                  The ultimate side project playbook{" "}
                </div>
                <div className="text-[16px] text-[#111111] opacity-[50%]">
                  by BuildbySTL cohort{" "}
                </div>
              </div>
              <Image src={arrow} alt="" />
            </div>
          </div>
          <div className="flex h-[144px] lg:w-[422px] w-[328px] items-center justify-center rounded-[12px] border-[1px] border-solid border-[#111111] border-opacity-25 bg-[#ffffff]">
            <div className="flex lg:w-[358px] w-[280px] justify-center gap-[20px]">
              <div className="flex w-[292.75px] flex-col gap-[12px]">
                <div className="text-[20px] font-[600] leading-[130%] text-[#111111]">
                  The minimalist entrepreneur course{" "}
                </div>
                <div className="text-[16px] text-[#111111] opacity-[50%]">
                  by Sahil Lavingia of Gumroad{" "}
                </div>
              </div>
              <Image src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
