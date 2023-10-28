import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-[91%] md:w-[85%] lg:w-[70%] mx-[auto] mt-[30px]">
      {children}
    </div>
  );
}
