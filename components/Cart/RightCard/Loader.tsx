import React from "react";

import { Skeleton } from "@nextui-org/react";

export default function Loader() {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <Skeleton className="h-3 w-3/5 rounded-lg" />
      <Skeleton className="h-3 w-4/5 rounded-lg" />
      <Skeleton className="h-3 w-4/5 rounded-lg" />
      <Skeleton className="h-[50px] w-5/5 rounded-lg" />
    </div>
  );
}
