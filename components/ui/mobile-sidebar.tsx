"use client";

import MenuIcon from "@/public/icons/menu-icon";
import { Button } from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import Logo from "../logo";
import CancelIcon from "@/public/icons/cancel-icon";
import { NavLink } from "../navbar";
import Link from "next/link";
import BoltBtnIcon from "@/public/icons/bolt-btn-icon";
import { useState } from "react";

export function SheetSide() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden border border-[#BAD0D0] bg-white hover:bg-white p-[10px]">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-full p-4 bg-[#FFFFFFE5]">
        <SheetHeader className="flex-row justify-between items-center">
          <button onClick={() => setOpen(!open)}>
            <Logo />
          </button>
          <button onClick={() => setOpen(!open)}>
            <CancelIcon />
          </button>
        </SheetHeader>

        <div className="pt-12 w-max mx-auto font-medium text-2xl text-[#506363] flex flex-col gap-[2.125rem] text-center">
          <NavLink onClick={() => setOpen(!open)} href={"/our-services"}>
            Our services
          </NavLink>
          <NavLink onClick={() => setOpen(!open)} href={"/case-studies"}>
            Case studies
          </NavLink>
          <NavLink onClick={() => setOpen(!open)} href={"/about-us"}>
            About us
          </NavLink>
        </div>
        <div className="w-max mx-auto mt-20">
          <Button asChild>
            <Link
              onClick={() => setOpen(!open)}
              href="/"
              className="!bg-[#1E9B97] flex gap-1 items-center shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)] hover:bg-[#1E9B97] rounded-xl lg:h-12 md:h-10 h-12 w-[9.875rem]"
            >
              <BoltBtnIcon />
              <span className="font-semibold">Get in Touch</span>
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
