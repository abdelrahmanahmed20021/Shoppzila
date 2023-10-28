"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import { updateRemainingTime } from "@/func/Timer";
import { Button, Spinner } from "@nextui-org/react";

type Timer = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
export default function RightCard() {
  const [timer, setTimer] = useState<Timer>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const activeTimer = setInterval(() => {
      setTimer(updateRemainingTime());
    }, 0);

    return () => {
      clearInterval(activeTimer);
    };
  }, []);
  return (
    <div className="flex-1  rounded-xl relative">
      <div className="w-full h-[450px] rounded-xl relative overflow-hidden">
        <Image
          className=" group-hover:scale-[1.07]"
          alt="slide-1"
          src={
            "https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_deal_bg.jpg"
          }
          placeholder="blur"
          quality={100}
          fill
          blurDataURL={
            "https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_deal_bg.jpg"
          }
          sizes="100vw"
          style={{
            objectFit: "cover",
            transition: "all ease-in-out .3s",
            transformOrigin: "center",
          }}
        />
      </div>
      <div className="absolute w-full flex justify-center items-center flex-col gap-[20px] top-0 left-0 p-[50px]">
        <span className="text-[1.1rem]">Up to 30% off </span>
        <h2 className="text-[1.3rem] font-[600]">Shoulder bags</h2>
        <Image
          src={
            "https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_p_deal.png"
          }
          blurDataURL="https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_p_deal.png"
          placeholder="blur"
          width={200}
          height={200}
          alt="bag-img"
          className="font-[700] text-[3rem]  leading-[42px]"
        />
        {timer.days != 0 && (
          <div className="flex gap-[10px]">
            <Button
              variant="bordered"
              radius="full"
              className="border-[1px] shadow-small bg-lit-900 flex flex-col min-w-[60px] h-[60px] gap-0 p-0 rounded-[60px]"
            >
              <div className="text-[1.3rem] font-[600]">{timer.days}</div>
              <div>Days</div>
            </Button>
            <Button
              variant="bordered"
              radius="full"
              className="border-[1px] shadow-small bg-lit-900 flex flex-col min-w-[60px] h-[60px] gap-0 p-0 rounded-[60px]"
            >
              <div className="text-[1.3rem] font-[600]">{timer.hours}</div>
              <div>Hours</div>
            </Button>
            <Button
              variant="bordered"
              radius="full"
              className="border-[1px] shadow-small bg-lit-900 flex flex-col min-w-[60px] h-[60px] gap-0 p-0 rounded-[60px]"
            >
              <div className="text-[1.3rem] font-[600]">{timer.minutes}</div>
              <div>Mins</div>
            </Button>
            <Button
              variant="bordered"
              radius="full"
              className="border-[1px] shadow-small bg-lit-900 flex flex-col min-w-[60px] h-[60px] gap-0 p-0 rounded-[60px]"
            >
              <div className="text-[1.3rem] font-[600]">{timer.seconds}</div>
              <div>Secs</div>
            </Button>
          </div>
        )}
        {timer.days == 0 && <Spinner />}
        <Button
          className="text-drk-900 w-max text-[16px] font-[600] px-[20px]"
          radius="full"
          variant="bordered"
        >
          Shop now
        </Button>
      </div>
    </div>
  );
}
