"use client";
//@ts-ignore
import { Fade } from "react-reveal";

import Loader from "@/components/Global/Loader";
import Title from "@/components/Global/Title";
import { useGetter } from "@/hooks/api";
import { BOXES_GETTER } from "@/hooks/keys";

import Card from "./Card";

export default function Box() {
  const { data, isLoading } = useGetter({
    endPoint: "/api/boxes",
    key: BOXES_GETTER,
  });

  return (
    <div>
      <Title content="" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[20px] md:gap-[50px] justify-center md:justify-between lg:justify-start">
        {isLoading &&
          Array(4)
            .fill(0)
            .map((element, index) => <Loader key={index} />)}
        {!isLoading &&
          data.map((element: any, index: number) => (
            <Fade key={index} bottom delay={200 * index}>
              <Card {...element} />
            </Fade>
          ))}
      </div>
    </div>
  );
}
