import React from "react";

import Card from "./Card";
import { elements } from "./data";

export default function Futures() {
  return (
    <div>
      <div className="grid mt-[40px]  grid-cols-1   md:grid-cols-2 lg:grid-cols-4   md:justify-between  gap-[50px]">
        {elements.map((data, index) => (
          <Card key={index} title={data.title} subTitle={data.subTitle}>
            <div dangerouslySetInnerHTML={{ __html: data.icon }}></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
