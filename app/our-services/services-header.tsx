"use client";

import { useThemeContext } from "@/context";
import { ReactNode } from "react";

const ServicesHeader = ({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`px-4 md:px-8 lg:px-20 flex-wrap xl:flex-nowrap flex gap-8 pt-10 ${
        theme === "dark" ? "bg-[#020F0F]" : ""
      }`}
    >
      <div className="flex flex-col gap-6 w-max mx-auto">
        <div className="flex gap-6 items-center w-max mx-auto">
          {children}
          <p
            className={`text-3xl md:text-5xl font-extrabold ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            {title}
          </p>
        </div>
        <p
          className={`md:text-2xl text-lg max-w-[47.5rem] text-center leading-[2.4rem] ${
            theme === "dark" ? "text-[#BAD0D0]" : "text-[#082828]"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicesHeader;
