import React from "react";

import Image from "next/image";

import { Button } from "@nextui-org/react";

export default function LeftCard({ src }: { src: string }) {
  return (
    <div className="w-full group relative  cursor-grab">
      <div className="w-full h-[400px] rounded-xl relative overflow-hidden">
        <Image
          className=" group-hover:scale-[1.07]"
          alt="slide-1"
          src={src}
          placeholder="blur"
          quality={100}
          fill
          blurDataURL={src}
          sizes="100vw"
          style={{
            objectFit: "cover",
            transition: "all ease-in-out .3s",
            transformOrigin: "center",
          }}
        />
      </div>
      <div className="absolute flex flex-col gap-[20px] top-0 left-0 p-[50px]">
        <span>EmpowerHer Suits</span>
        <h1 className="font-[700] text-[3rem] leading-[42px]">
          Classic Elegance <br /> for Women
        </h1>
        <p>
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
