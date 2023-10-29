import React from "react";

import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";

import { Button } from "@nextui-org/react";

export default function Card({ src }: { src: string }) {
  return (
    <div className="flex gap-5 my-[20px]">
      <div className="relative w-[100px] h-[100px]">
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
      <div>
        <div className="text-[16px]">Classic BLACK Shirt Jacket</div>
        <div className="text-[14px]">
          <span className="text-main-900">Color: </span>Yellow
        </div>
        <div className="text-[14px]">
          <span className="text-main-900">Size: </span>XS
        </div>
        <div className="text-[14px]">
          <span className="text-main-900">Count :</span> 4 x $299.00
        </div>
      </div>
      <Button variant="light" color="danger">
        <AiFillDelete size="20px" />
      </Button>
    </div>
  );
}
