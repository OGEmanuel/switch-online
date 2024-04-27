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
import { useThemeContext } from "@/context";
import LightModeIcon from "@/public/icons/light-mode-icon";
import DarkModeIcon from "@/public/icons/dark-mode-icon";
import BrightIcon from "@/public/icons/bright-icon";

export function SheetSide() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useThemeContext();

  const handleSetTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button>
          <MenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent side={"top"} className="w-full p-4 h-full bg-[#FFFFFFE5]">
        <SheetHeader className="flex-row justify-between items-center">
          <button onClick={() => setOpen(!open)}>
            <Logo />
          </button>
          <div className="flex items-center gap-4">
            {theme === "dark" ? (
              <button onClick={handleSetTheme}>
                <div className="bg-[#FFFFFF1A] flex items-center brightShadow justify-center rounded-xl w-12 h-12">
                  <BrightIcon />
                </div>
              </button>
            ) : (
              <button onClick={handleSetTheme}>
                <DarkModeIcon />
              </button>
            )}
            <button onClick={() => setOpen(!open)}>
              <CancelIcon />
            </button>
          </div>
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
