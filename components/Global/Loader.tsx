import React from "react";

import { Card, Skeleton } from "@nextui-org/react";

export default function Loader() {
  return (
    <div className="flex sm:flex-1 w-[250px]   flex-col gap-3">
      <Card className=" space-y-5 shadow-small h-[250px] p-4" radius="lg">
        <Skeleton isLoaded={false} className="rounded-lg">
          <div className="h-24 rounded-lg bg-lit-800"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton isLoaded={false} className="w-3/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-lit-800"></div>
          </Skeleton>
          <Skeleton isLoaded={false} className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-lit-800"></div>
          </Skeleton>
          <Skeleton isLoaded={false} className="w-2/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-lit-800"></div>
          </Skeleton>
        </div>
      </Card>
    </div>
  );
}
