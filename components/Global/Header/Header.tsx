"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/libs/cn";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import Cart from "./Cart";
import Logo from "./Logo";
import { routes } from "./routes";

export default function Header() {
  const path = usePathname();
  return (
    <Navbar className="shadow-sm" isBlurred maxWidth="xl">
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent
        className="hidden  sm:flex  w-[80%] gap-[50px]"
        justify="center"
      >
        {routes.map((link) => (
          <NavbarItem isActive={link.path == path} key={link.id}>
            <Link
              className={cn(
                "text-[16px] font-[600]",
                link.path == path && "text-main-900"
              )}
              href={link.path}
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Cart />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {routes.map((link, index) => (
          <NavbarMenuItem key={`${link}-${index}`}>
            <Link
              className={cn("w-full", link.path == path && "text-main-900")}
              href={link.path}
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
