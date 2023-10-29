import React, { ReactNode } from "react";

export default function Row({ children }: { children: ReactNode }) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1  lg:grid-cols-4 gap-[60px]">
      {children}
    </div>
  );
}
