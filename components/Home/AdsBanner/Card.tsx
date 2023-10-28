import React from "react";

import BG from "@/components/Global/BG";
import { cn } from "@/libs/cn";

export default function Card({
  src,
  title,
  subTitle,
}: {
  src?: string;
  title: string;
  subTitle: string;
}) {
  return (
    <div className="flex-1 relative">
      <BG
        src={
          src ||
          "https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_collection_01.jpeg"
        }
        sty="w-full min-h-[650px]"
      />
      <div
        className={cn(
          "absolute flex flex-col gap-[10px] ",
          !src ? " top-4 left-5" : "bottom-5 right-5"
        )}
      >
        <div className="bg-lit-900  rounded-[30px] px-5 text-[1.4rem] w-max shadow-small">
          {title}
        </div>
        <div className="rounded-bl-[30px] rounded-tr-[30px] px-[15px] text-[1.2rem] lg:text-[1.4rem]  shadow-small bg-lit-900 font-[600]">
          {subTitle}
        </div>
      </div>
    </div>
  );
}
