"use client";

import { useThemeContext } from "@/context";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const ServiceListItem = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();
  const pathname = usePathname();

  return (
    <div
      className={`flex gap-3 text-left items-start md:text-lg
    ${
      theme === "dark" && pathname === "/our-services"
        ? "text-[#BAD0D0]"
        : "text-[#506363]"
    }
    `}
    >
      {children}
    </div>
  );
};

export default ServiceListItem;
