import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Authflow({ open, close }: any) {
  const [auth, setAuth] = useState(false);

  const loaded = () => {
    setAuth(true);
  };

  return (
    <>
      <Modal isOpen={open} onClose={close} isCentered>
        <ModalOverlay />
        <ModalContent
          maxHeight={!auth ? "170px" : "246px"}
          maxWidth={"328px"}
          borderRadius={"12px"}
        >
          <ModalBody>
            {!auth ? (
              <div className="flex flex-col gap-[24px] pt-[24px] pb-[24px]">
                <div>
                  <div className="text-[20px] font-[600] leading-[20px] text-[#111111]">
                    Continue with Google
                  </div>
                  <div className="mt-[4px] text-[12px]  font-[400] text-[#737373]">
                    We currently use google for authentication.
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[12px]">
                  <div
                    className="flex h-[34px] w-[280px] items-center justify-center rounded-[6px] bg-[#111111] text-[14px] font-[500] text-[#FFFFFF]"
                    onClick={loaded}
                  >
                    Continue with Google
                  </div>
                  <Image src={"flow1.svg"} alt={""} width={"16"} height={"6"} />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-[24px] pt-[24px] pb-[24px]">
                <div>
                  <div className="text-[20px] font-[600] leading-[20px] text-[#111111]">
                    Create an username{" "}
                  </div>
                  <div className="mt-[4px] text-[12px]  font-[400] text-[#737373]">
                    You need an unique username to use ActualWork.{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <div className="text-[12px] font-[400]">Username</div>
                  <Input
                    bg={""}
                    border={"1px solid #CFCFCF"}
                    height={"34px"}
                    width={"280px"}
                    _hover={{}}
                    _selected={{}}
                    focusBorderColor={"1px solid #CFCFCF"}
                    _focus={{}}
                  />
                </div>
                <div className="flex flex-col items-center gap-[12px]">
                  <div className="flex h-[34px] w-[280px] items-center justify-center rounded-[6px] bg-[#111111] text-[14px] font-[500] text-[#FFFFFF]">
                    Continue
                  </div>
                  <Image src={"flow2.svg"} alt={""} width={"16"} height={"6"} />
                </div>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
