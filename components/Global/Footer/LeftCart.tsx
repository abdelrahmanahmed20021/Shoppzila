import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

import { Button } from "@nextui-org/react";

export default function LeftCart() {
  const icons = [
    <BiLogoFacebook size="20px" />,
    <FaXTwitter size="20px" />,
    <AiFillInstagram size="20px" />,
    <PiTelegramLogo size="20px" />,
  ];
  return (
    <div className="flex flex-col gap-[15px] text-lit-800">
      <h3 className="text-[1.5rem] font-[600]">Our Store</h3>
      <p className="w-[300px]">
        Miniture is one of the biggest international fashion companies, one of
        the world’s largest distribution groups.
      </p>
      <div className="flex gap-3">
        {icons.map((icon, index) => (
          <Button
            key={index}
            className="min-w-[40px] hover:text-main-900 border-main-900 hover:bg-transparent bg-main-900 text-lit-900 hover:scale-[1.3] h-[40px] rounded-[40px] border-[1px] p-0"
            variant="bordered"
          >
            {icon}
          </Button>
        ))}
      </div>
    </div>
  );
}
