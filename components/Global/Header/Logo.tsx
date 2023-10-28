import React from "react";

import Image from "next/image";

import logoIcon from "@/public/LOGO.png";
import { Button } from "@nextui-org/react";

export default function Logo() {
  return (
    <Button variant="light">
      <Image src={logoIcon} alt="LOGO" width={60} height={60} />
    </Button>
  );
}
