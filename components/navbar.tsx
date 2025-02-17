"use client";

import { Button } from "./ui/button";
import BoltBtnIcon from "@/public/icons/bolt-btn-icon";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { SheetSide } from "./ui/mobile-sidebar";
import { useThemeContext } from "@/context";
import DarkModeIcon from "@/public/icons/dark-mode-icon";
import BrightIcon from "@/public/icons/bright-icon";

const Navbar = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useThemeContext();

  const handleSetTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav className={`${theme === "dark" ? "bg-[#020F0F]" : ""}`}>
      <div
        className={`lg:px-20 p-4 lg:py-9 flex justify-between items-center max-w-[1440px] mx-auto`}
      >
        <Logo />
        <div
          className={`md:flex gap-6 items-center hidden md:text-sm lg:text-base`}
        >
          {children}
        </div>
        <div className="md:hidden">
          <SheetSide />
        </div>
        <div className="hidden items-center gap-4 md:flex">
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
          <Button asChild>
            <Link
              href="/get-in-touch"
              className="!bg-[#5AE0E6] md:flex hidden gap-1 items-center shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)] hover:!bg-[rgb(30,130,151)] rounded-xl lg:h-12 md:h-10 h-12 w-[9.875rem] transition-all"
            >
              <BoltBtnIcon />
              <span className="font-semibold text-[#020F0F]">Get in Touch</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, "className">
) => {
  const { theme } = useThemeContext();

  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "py-[10px] lg:px-4",
        pathname.length === 1 && props.href.toString().length === 1
          ? "text-[#1E9B97] font-semibold"
          : pathname.length > 1 &&
            props.href.toString().length > 1 &&
            pathname.includes(`${props.href}`)
          ? "text-[#1E9B97] font-semibold"
          : `${
              theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
            } font-medium`
      )}
    />
  );
};
