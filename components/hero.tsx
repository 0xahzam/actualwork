import Image from "next/image";
import mckup from "../public/mckup.svg";
function hero() {
  return (
    <div className="flex justify-center">
      <div className="lg:mt-[152px] mt-[63px] flex gap-[18px] flex-col lg:flex-row">
        <div className="flex lg:w-[552px] w-[328px] flex-col lg:gap-[40px] gap-[24px] self-center">
          <div className="lg:text-[64px] sm:leading-[32px] text-[32px] font-[700] lg:leading-[64px] text-[#111111]">
            Build and ship projects in public
          </div>

          <div className="lg:text-[24px] text-[18px] font-[400] text-[#171717] opacity-[60%]">
            Document your weekly progress of building your project in public.
            Simply add your weekly goals, share it on twitter and build.
          </div>

          <div className="flex gap-[12px] flex-col lg:flex-row">
            <div className="cursor-pointer flex h-[38px] lg:w-[159px]  items-center justify-center rounded-[6px] bg-[#111111] text-[14px] font-[500] text-[#FFFFFF]">
              Start a new project
            </div>
            <div className="cursor-pointer flex h-[38px] lg:w-[159px]  items-center justify-center rounded-[6px] border-[1px] border-solid border-[#171717] bg-[#FFFFFF] text-[14px] font-[500] text-[#111111]">
              Start a new project
            </div>
          </div>
        </div>
        <Image className="lg:w-[auto] lg:h-[auto] sm:w-[328px] sm:h-[298px]" src={mckup} alt="" />
      </div>
    </div>
  );
}

export default hero;
