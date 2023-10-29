import React from "react";

import Appender from "./Appender";
import Details from "./Details";
import Head from "./Head";

export default function RightCard() {
  return (
    <div className="flex-1 mt-[60px] flex flex-col gap-[30px] p-5 ">
      <Head />
      <Details />
      <Appender />
    </div>
  );
}
