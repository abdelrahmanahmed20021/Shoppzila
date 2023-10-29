"use client";
//@ts-ignore
import { Fade } from "react-reveal";

import Card from "./Card";
import { elements } from "./data";

export default function Futures() {
  return (
    <div>
      <div className="grid mt-[40px]  grid-cols-1   md:grid-cols-2 lg:grid-cols-4   md:justify-between  gap-[50px]">
        {elements.map((data, index) => (
          <Fade key={index} left delay={200 * index}>
            <Card title={data.title} subTitle={data.subTitle}>
              <div dangerouslySetInnerHTML={{ __html: data.icon }}></div>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  );
}
