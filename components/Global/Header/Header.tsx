"use client";

import React, { useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/libs/cn";
import {
  Button,
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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar
      isMenuOpen={isOpen}
      className="shadow-sm "
      classNames={{
        wrapper: "lg:max-w-[75%] md:max-w-[100%]",
      }}
      isBlurred
      maxWidth="full"
    >
      <NavbarContent
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden"
        justify="center"
      >
        <NavbarMenuToggle onClick={() => setIsOpen(!isOpen)} />
      </NavbarContent>

      <NavbarContent className="w-full md:flex-1" justify="center">
        <NavbarBrand className="w-full justify-center md:justify-start flex">
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden  lg:flex  lg:w-[80%] gap-[50px]"
        justify="center"
      >
        {routes.map((link) => (
          <NavbarItem isActive={link.path == path} key={link.id}>
            <Button
              onClick={() => router.push(link.path)}
              variant="bordered"
              className={cn(
                "text-[16px] border-[0] font-[600]",
                link.path == path && "text-main-900"
              )}
            >
              {link.name}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Cart />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-[30px]">
        {routes.map((link, index) => (
          <NavbarMenuItem key={`${link}-${index}`}>
            <Button
              onClick={() => {
                router.push(link.path);
                setIsOpen(!isOpen);
              }}
              variant="bordered"
              size="lg"
              className={cn(
                "text-[16px] border-[0] font-[600] w-full justify-start",
                link.path == path && "text-lit-900 bg-main-900"
              )}
            >
              {link.name}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
