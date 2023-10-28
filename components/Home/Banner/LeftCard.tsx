import React from "react";

import BG from "@/components/Global/BG";
import { Button } from "@nextui-org/react";

export default function LeftCard({ src }: { src: string }) {
  return (
    <div className="w-full group relative  cursor-grab">
      <BG src={src} />
      <div className="absolute flex  flex-col gap-[20px] top-0 left-0 p-[20px] sm:p-[50px]">
        <span>EmpowerHer Suits</span>
        <h1 className="font-[700] text-[1.6rem] sm:text-[3rem] leading-[27px] sm:leading-[42px]">
          Classic Elegance <br /> for Women
        </h1>
        <p className="hidden sm:block">
          Naming a collection of women's suit jackets <br /> can help convey the
          style and identity of your brand.
        </p>
        <Button
          className="bg-main-900 text-lit-900 w-max text-[16px] font-[600] px-[20px]"
          radius="full"
        >
          Shop now
        </Button>
      </div>
    </div>
  );
}
