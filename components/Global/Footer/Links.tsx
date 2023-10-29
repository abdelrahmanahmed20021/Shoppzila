import React from "react";

import { Button } from "@nextui-org/react";

export default function Links({
  list,
  title,
}: {
  list: string[];
  title: string;
}) {
  return (
    <div className="text-lit-800 flex flex-col   gap-4">
      <h5 className="text-[1.5rem] font-[600]">{title}</h5>
      <div className="flex flex-col gap-3 ">
        {list.map((link, index) => (
          <Button
            key={index}
            variant="light"
            className="max-w-[max-content] text-lit-800 justify-start h-max p-0 pl-1"
          >
            {link}
          </Button>
        ))}
      </div>
    </div>
  );
}
