"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import BoltBtnIcon from "@/public/icons/bolt-btn-icon";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="px-20 py-9  flex justify-between items-center">
      <Logo />
      <div className="flex gap-6 items-center">{children}</div>
      <Button asChild>
        <Link
          href="/"
          className="bg-[#1E9B97] flex gap-1 items-center shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)] hover:bg-[#1E9B97] rounded-xl h-12 w-[158px]"
        >
          <BoltBtnIcon />
          <span className="block font-semibold">Get in Touch</span>
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
        "py-[10px] px-4",
        pathname === props.href
          ? "text-[#1E9B97] font-semibold"
          : "text-[#506363] font-medium"
      )}
    />
  );
};
