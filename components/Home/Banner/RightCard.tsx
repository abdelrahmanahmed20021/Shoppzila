"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import BG from "@/components/Global/BG";
import { updateRemainingTime } from "@/func/Timer";
import { Button, Spinner } from "@nextui-org/react";

type Timer = {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
};
export default function RightCard() {
  const [timer, setTimer] = useState<Timer>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const keys = ["Days", "Hours", "Mins", "Secs"];
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
      <BG
        src="https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_deal_bg.jpg"
        sty="h-[430px]"
      />
      <div className="absolute w-full flex justify-center items-center flex-col gap-[20px] top-0 left-0 p-[30px] sm:p-[50px]">
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
            {Object.keys(timer).map((key, index) => (
              <Button
                key={index}
                variant="bordered"
                radius="full"
                className="border-[1px] shadow-small bg-lit-900 flex flex-col h-[50px] min-w-[50px] rounded-[50px] sm:min-w-[60px] sm:h-[60px] gap-0 p-0 sm:rounded-[60px]"
              >
                <div className="sm:text-[1.3rem] text-[20px] font-[500] sm:font-[600]">
                  {timer[key as keyof Timer]}
                </div>
                <div>{keys[index]}</div>
              </Button>
            ))}
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
