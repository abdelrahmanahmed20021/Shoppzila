import "./globals.css";

import type { Metadata } from "next";
import { Tajawal } from "next/font/google";

export const metadata: Metadata = {
  title: "Shoppzila",
  description: "Generated by create next app",
};

const TJ = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={TJ.className}>{children}</body>
    </html>
  );
}
