import { BiSolidCart } from "react-icons/bi";

import { Badge, Button } from "@nextui-org/react";

export default function Cart() {
  return (
    <Badge
      content="2"
      shape="circle"
      color="warning"
      classNames={{
        badge: "text-lit-900",
      }}
    >
      <Button
        radius="full"
        isIconOnly
        aria-label="more than 99 notifications"
        variant="light"
        className="text-prim-900"
      >
        <BiSolidCart size={24} />
      </Button>
    </Badge>
  );
}
