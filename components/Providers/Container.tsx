import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="w-[60%] mx-[auto] mt-[30px]">{children}</div>;
}
