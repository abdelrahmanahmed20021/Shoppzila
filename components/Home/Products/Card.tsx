import React from "react";

import Image from "next/image";
import { BiSolidCartAdd } from "react-icons/bi";
import { GoSearch } from "react-icons/go";

import { Button } from "@nextui-org/react";

export default function Card({
  src,
  subSrc,
  price,
  name,
}: {
  src: string;
  subSrc: string;
  price: string;
  name: string;
}) {
  return (
    <div className="relative group">
      <Button
        as={"div"}
        variant="bordered"
        className="relative group   border-[0]  w-[305px] h-[305px] overflow-hidden rounded-xl"
      >
        <Image
          className="opacity-[0] group-hover:opacity-[1]"
          alt={"Slide-Card"}
          src={subSrc}
          placeholder="blur"
          quality={100}
          fill
          blurDataURL={subSrc}
          sizes="100vw"
          style={{
            objectFit: "cover",
            transition: "all ease-in-out .4s",
            transformOrigin: "center",
          }}
        />
        <Image
          className=" group-hover:opacity-0"
          alt={"Slide-Card"}
          src={src}
          placeholder="blur"
          quality={100}
          fill
          blurDataURL={src}
          sizes="100vw"
          style={{
            objectFit: "cover",
            transition: "all ease-in-out .4s",
            transformOrigin: "center",
          }}
        />
        <Button
          style={{ transition: "all ease .5s" }}
          className="min-w-[40px] absolute top-[20px] group-hover:opacity-[1] group-hover:top-[10px] opacity-0 right-[10px] h-[40px] bg-lit-900 shadow-small rounded-[40px] p-0"
        >
          <GoSearch size="18px" />
        </Button>
        <div
          style={{ transition: "all ease .5s" }}
          className="bottom-[-100px] absolute group-hover:opacity-[1] bg-lit-900 rounded-tl-[20px]   p-5 group-hover:bottom-[-20px] opacity-0 right-[0px]"
        >
          <Button className="min-w-[40px]  bg-drk-900  h-[40px] text-lit-900 shadow-small rounded-[40px] p-0">
            <BiSolidCartAdd size="18px" />
          </Button>
        </div>
      </Button>

      <div className="font-[600] w-max mt-[20px]">{name}</div>
      <div>
        <span>$</span>
        <bdi>{price}</bdi>
      </div>
    </div>
  );
}
