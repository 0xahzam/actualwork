import Image from "next/image";
import mckup from "../public/mckup.svg";
function hero() {
  return (
    <div className="flex justify-center">
      <div className="mt-[152px] flex gap-[18px]">
        <div className="flex w-[552px] flex-col gap-[40px]">
          <div className="text-[64px] font-[700] leading-[64px] text-[#111111]">
            Build and ship projects in public
          </div>

          <div className="text-[24px] font-[400] text-[#171717] opacity-[60%]">
            Document your weekly progress of building your project in public.
            Simply add your weekly goals, share it on twitter and build.
          </div>

          <div className="flex gap-[12px]">
            <div className="flex h-[38px] w-[159px] items-center justify-center rounded-[6px] bg-[#111111] text-[14px] font-[500] text-[#FFFFFF]">
              Start a new project
            </div>
            <div className="flex h-[38px] w-[159px] items-center justify-center rounded-[6px] border-[1px] border-solid border-[#171717] bg-[#FFFFFF] text-[14px] font-[500] text-[#111111]">
              Start a new project
            </div>
          </div>
        </div>
        <Image src={mckup} alt="" />
      </div>
    </div>
  );
}

export default hero;
