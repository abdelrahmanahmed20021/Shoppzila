import React from "react";

import LeftCard from "./LeftCard/LeftCard";
import Options from "./Options/Options";
import RightCard from "./RightCard/RightCard";

export default function Cart() {
  return (
    <div className="flex flex-col gap-[140px]">
      <div className="flex lg:flex-row flex-col gap-[50px] ">
        <LeftCard />
        <RightCard />
      </div>
      <Options />
    </div>
  );
}
