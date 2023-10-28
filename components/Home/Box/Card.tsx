import { BsArrowRight } from "react-icons/bs";

import BG from "@/components/Global/BG";
import { Button } from "@nextui-org/react";

export default function Card({
  src,
  title,
  slug,
}: {
  src: string;
  title: string;
  slug: string;
}) {
  return (
    <div className="relative w-full shadow-small rounded-xl">
      <BG src={src} sty="w-full min-h-[400px] lg:max-h-[400px]" />
      <div className="absolute top-10 left-5 flex flex-col gap-3">
        <div className="font-[600] text-[1.8rem] leading-[31px]">{title}</div>
        <div>{slug}</div>
      </div>
      <div className="absolute bottom-[-20px]  right-[-10px] bg-lit-900  rounded-tl-[30px] p-3">
        <span
          style={{ boxShadow: "5px 3px 0 .5px var(--light-color-900)" }}
          className="absolute left-[-13px] bottom-[21px] w-[13px] h-[13px] rounded-full"
        ></span>
        <span
          style={{ boxShadow: "4px 4px 0 1px var(--light-color-900)" }}
          className="absolute right-[10px] top-[-11px] w-[10px] h-[10px] rounded-full"
        ></span>
        <Button
          size="lg"
          className="hover:bg-main-900 py-0 h-[40px] hover:scale-[1.1] bg-prim-900 text-lit-900"
          radius="full"
          endContent={<BsArrowRight />}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
