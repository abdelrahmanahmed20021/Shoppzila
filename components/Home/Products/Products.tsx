"use client";
import React from "react";

import Title from "@/components/Global/Title";
import { useGetter } from "@/hooks/api";
import { PRODUCTS_GETTER } from "@/hooks/keys";

import Loader from "../../Global/Loader";
import Card from "./Card";
import Row from "./Row";

export default function Products() {
  const { data, isLoading } = useGetter({
    endPoint: "/api/products",
    key: PRODUCTS_GETTER,
    timer: 300,
  });

  return (
    <div className="w-full flex flex-col justify-center items-center sm:items-start ">
      <Title content="Featured Products" />
      {isLoading && (
        <Row>
          {Array(8)
            .fill(0)
            .map((ele, index) => (
              <Loader key={index} />
            ))}
        </Row>
      )}
      {!isLoading && (
        <Row>
          {data.map((element: any, index: number) => (
            <Card key={index} {...element} />
          ))}
        </Row>
      )}
    </div>
  );
}
