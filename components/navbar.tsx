"use client";

import { Button } from "./ui/button";
import BoltBtnIcon from "@/public/icons/bolt-btn-icon";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import MenuIcon from "@/public/icons/menu-icon";
import { SheetSide } from "./ui/mobile-sidebar";

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="lg:px-20 p-4 lg:py-9 flex justify-between items-center">
      <Logo />
      <div className="md:flex gap-6 items-center hidden md:text-sm lg:text-base">
        {children}
      </div>
      <div className="md:hidden">
        <SheetSide />
      </div>
      <Button asChild>
        <Link
          href="/"
          className="!bg-[#1E9B97] md:flex hidden gap-1 items-center shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)] hover:bg-[#1E9B97] rounded-xl lg:h-12 md:h-10 h-12 w-[9.875rem]"
        >
          <BoltBtnIcon />
          <span className="font-semibold">Get in Touch</span>
        </Link>
      </Button>
    </nav>
  );
};

export default Navbar;

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, "className">
) => {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "py-[10px] lg:px-4",
        pathname.includes(`${props.href}`)
          ? "text-[#1E9B97] font-semibold"
          : "text-[#506363] font-medium"
      )}
    />
  );
};
