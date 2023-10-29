"use client";
import React from "react";

import Card from "@/components/Global/Card";
import Loader from "@/components/Global/Loader";
import Row from "@/components/Global/Row";
import { useGetter } from "@/hooks/api";
import { PRODUCTS_GETTER_SUB } from "@/hooks/keys";

export default function Options() {
  const { data, isLoading } = useGetter({
    endPoint: "/api/products/1/4",
    key: PRODUCTS_GETTER_SUB,
  });
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center text-[2rem] font-[500] mb-[40px]">
        Related Products
      </div>
      {isLoading && (
        <Row>
          {Array(4)
            .fill(0)
            .map((ele, index) => (
              <Loader key={index} />
            ))}
        </Row>
      )}
      {!isLoading && (
        <Row>
          {data.map((element: any, index: number) => (
            <Card key={index} {...element} index={++index} />
          ))}
        </Row>
      )}
    </div>
  );
}
