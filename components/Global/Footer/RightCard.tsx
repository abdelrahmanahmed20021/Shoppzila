import { HiOutlineArrowLongRight } from "react-icons/hi2";

import { Button, Input } from "@nextui-org/react";

export default function RightCard() {
  return (
    <div className="flex flex-col gap-3 text-lit-800">
      <h6 className="text-[2rem] font-[700]">Let’s get in touch</h6>
      <p className="w-[300px]">
        Sign up for our newsletter and receive 10% off your
      </p>
      <Input
        size="lg"
        className="text-drk-900 text-[1.4rem]"
        type="email"
        endContent={
          <Button className="min-w-[40px] hover:text-main-900 border-main-900 hover:bg-transparent bg-main-900 text-lit-900 hover:scale-[1.1] h-[40px] rounded-[40px] border-[1px] p-0">
            <HiOutlineArrowLongRight size="20px" />
          </Button>
        }
        classNames={{ input: "text-[1.2rem] px-[10px]" }}
        placeholder="Enter your email address..."
      />
    </div>
  );
}
