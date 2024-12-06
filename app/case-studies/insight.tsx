"use client";

import { useThemeContext } from "@/context";
import { ReactNode } from "react";

const Insight = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();

  return (
    <p
      className={`lg:text-lg font-medium py-[10px] px-6 rounded-[2.125rem] w-max ${
        theme === "dark"
          ? "text-white bg-[#FFFFFF1A]"
          : "text-[#082828] bg-[#F4F4F4]"
      }`}
    >
      {children}
    </p>
  );
};

export default Insight;
