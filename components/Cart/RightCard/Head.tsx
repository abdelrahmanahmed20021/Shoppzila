"use client";
import React from "react";

import { useParams } from "next/navigation";

import { useGetter } from "@/hooks/api";
import { PRODUCT_GETTER } from "@/hooks/keys";
import { Divider } from "@nextui-org/react";

import Loader from "./Loader";

export default function Head() {
  const { id } = useParams();
  const { isLoading, data } = useGetter({
    endPoint: `/api/product/${Number(id) < 7 ? id : 7}`,
    key: `${PRODUCT_GETTER}-${id}`,
  });

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-[10px] md:gap-[30px]">
      <div className="md:text-[2rem] text-[1.5rem] font-[500]">
        {data[0].name}
      </div>
      <div className=" text-[2rem] md:text-[2.6rem]">
        <span>$</span>
        <bdi>{data[0].price}</bdi>
      </div>
      <Divider />
      <p>{data[0].desc}</p>
    </div>
  );
}
