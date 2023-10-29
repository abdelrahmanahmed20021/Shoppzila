"use client";
import React, { useState } from "react";

import { Button } from "@nextui-org/react";

export default function Appender() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-8">
      <div className="flex items-center border-[1px] gap-4">
        <Button
          onClick={() => {
            if (count > 0) {
              setCount((prev) => prev - 1);
            }
          }}
          variant="bordered"
          className="border-[0] min-w-[35px] h-[35px] p-0 text-[2rem]"
        >
          -
        </Button>
        <div className="font-[700]">
          {count < 10 && count != 0 ? `0${count}` : count}
        </div>
        <Button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          variant="bordered"
          className="border-[0] min-w-[35px] h-[35px] p-0 text-[1.3rem]"
        >
          +
        </Button>
      </div>
      <Button
        color="warning"
        variant="bordered"
        className="hover:bg-transparent bg-main-900 hover:text-main-900  text-lit-900"
        size="lg"
      >
        Add To Cart
      </Button>
    </div>
  );
}
