import React from "react";

import Image from "next/image";

import { cn } from "@/libs/cn";

export default function BG({ src, sty }: { src: string; sty?: string }) {
  return (
    <div
      className={cn(
        "w-full h-[220px] group sm:h-[450px] rounded-xl relative overflow-hidden",
        sty && sty
      )}
    >
      <Image
        className=" group-hover:scale-[1.07] cursor-pointer"
        alt={"Slide-Card"}
        src={src}
        placeholder="blur"
        quality={100}
        fill
        blurDataURL={src}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
          transition: "all ease-in-out .3s",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}
