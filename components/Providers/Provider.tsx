"use client";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import { NextUIProvider } from "@nextui-org/react";

import { ReduxProvider } from "./ReduxProvider";

// Create a client
const queryClient = new QueryClient();
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <ReduxProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ReduxProvider>
    </NextUIProvider>
  );
}
