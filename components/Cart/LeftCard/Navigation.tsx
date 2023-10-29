import { IoIosArrowForward } from "react-icons/io";

import { Button } from "@nextui-org/react";

export default function Navigation() {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="bordered"
        className="min-w-[max-content]   text-drk-800 border-[0] h-max p-0 pl-1"
      >
        Home
      </Button>
      <div>
        <IoIosArrowForward size="11px" />
      </div>
      <Button
        variant="bordered"
        className="min-w-[max-content]   text-drk-800 border-[0] h-max p-0 pl-1"
      >
        Shop
      </Button>
      <div>
        <IoIosArrowForward size="11px" />
      </div>
      <Button
        variant="bordered"
        className="min-w-[max-content]   text-main-900 border-[0] h-max p-0 pl-1"
      >
        Product Name
      </Button>
    </div>
  );
}
