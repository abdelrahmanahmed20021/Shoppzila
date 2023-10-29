import React from "react";

import Image from "next/image";

import Title from "../Title";
import LeftCart from "./LeftCart";
import Links from "./Links";
import RightCard from "./RightCard";

export default function Footer() {
  const links = [
    ["My account", "Shopping Cart", " Wishlist", "Product Compare"],
    [
      "Privacy policy",
      "Refund policy",
      "Shipping & Return",
      "Term & conditions",
    ],
  ];
  const title = ["Quick links", "Information"];

  return (
    <footer
      className="bg-drk-900 w-full  flex flex-col relative mt-[50px] px-[40px]"
      style={{
        boxShadow: "1px 1px 10px 1000px var(--dark-color-900)",
        clipPath: "inset(0px -100% 0px -100%)",
      }}
    >
      <Title content="" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[50px] lg:gap-0  justify-between items-start w-full">
        <LeftCart />
        {links.map((link, index) => (
          <Links list={link} key={index} title={title[index]} />
        ))}

        <RightCard />
      </div>
      <div className=" w-full bg-drk-900  flex-wrap gap-[30px] justify-center py-10 border-t-[1px] text-lit-800 items-center mt-10 flex lg:justify-between">
        <div className="text-center lg:text-left">
          © 2023 Miniture All rights reserved. Designed by Abdelrahman Ahmed
        </div>
        <Image
          src={
            "https://miniture.novaworks.net/wp-content/uploads/2023/10/payment_icon.svg"
          }
          width={300}
          height={200}
          alt="payment"
        />
      </div>
    </footer>
  );
}
