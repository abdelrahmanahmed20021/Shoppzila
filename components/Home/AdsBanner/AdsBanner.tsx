import React from "react";

import Title from "@/components/Global/Title";

import Card from "./Card";

export default function AdsBanner() {
  return (
    <div className="w-full">
      <Title content="" />
      <div className="flex w-full gap-[30px] lg:p-5 flex-col lg:flex-row">
        <Card
          title="Elegance in Knits"
          subTitle="The Winter Wonderland Sweater"
        />
        <Card
          title="Elegance in Carryalls"
          subTitle="A Symphony of Women's Bags"
          src="https://miniture.novaworks.net/wp-content/uploads/2023/10/m8_collection_02.jpeg"
        />
      </div>
    </div>
  );
}
