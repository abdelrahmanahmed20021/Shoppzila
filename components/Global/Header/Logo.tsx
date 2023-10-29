import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import logoIcon from "@/public/LOGO.png";
import { Button } from "@nextui-org/react";

export default function Logo() {
  const router = useRouter();
  return (
    <Button variant="light" onClick={() => router.push("/")}>
      <Image src={logoIcon} alt="LOGO" width={60} height={60} />
    </Button>
  );
}
