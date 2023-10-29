import React, { ReactNode } from "react";

import Providers from "@/components/Providers/Provider";

export default function layout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
