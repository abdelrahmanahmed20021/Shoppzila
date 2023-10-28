import React, { ReactNode } from "react";

import { Button } from "@nextui-org/react";

export default function Card({
  children,
  title,
  subTitle,
}: {
  children: ReactNode;
  title: string;
  subTitle: string;
}) {
  return (
    <div className="flex gap-[30px] group items-center  cursor-pointer">
      <Button
        style={{ transition: "all ease .5s" }}
        variant="bordered"
        className="min-w-[60px] group-hover:scale-[1.5]  border-[1px] h-[60px] p-0 rounded-[60px]"
      >
        {children}
      </Button>
      <div className="flex flex-col">
        <div className="font-[600] text-[21px]">{title}</div>
        <div>{subTitle}</div>
      </div>
    </div>
  );
}
