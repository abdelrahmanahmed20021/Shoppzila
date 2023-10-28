import React from "react";

import RightCard from "./RightCard";
import Slider from "./Slider";

export default function Banner() {
  return (
    <div className="flex gap-[30px]">
      <Slider />
      <RightCard />
    </div>
  );
}
