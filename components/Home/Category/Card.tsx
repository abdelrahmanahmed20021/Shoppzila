import React from "react";

import BG from "@/components/Global/BG";
import { Button } from "@nextui-org/react";

export default function Card({ src, title }: { src: string; title: string }) {
  return (
    <Button
      as={"div"}
      variant="bordered"
      className="flex hover:text-main-900 border-[0] w-full h-full flex-col justify-center items-center gap-5"
    >
      <BG
        src={src}
        sty="w-[140px] h-[140px] rounded-[140px] lg:w-[170px] lg:h-[170px] lg:rounded-[170px] "
      />
      <div className="text-[1.2rem] font-[600]">{title}</div>
    </Button>
  );
}
