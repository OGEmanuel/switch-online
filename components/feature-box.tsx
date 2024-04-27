"use client";

import { StaticImageData } from "next/image";
import CtaRightArrow from "./ui/cta-right-arrow";
import { ReactNode } from "react";
import DisplayWithBolt from "./display-with-bolt";
import { useThemeContext } from "@/context";

const FeatureBox = ({
  title,
  children,
  cta,
  classes,
  href,
  display,
}: {
  display: StaticImageData;
  title: string;
  children: ReactNode;
  cta: string;
  classes?: string;
  href?: string;
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`lg:pt-[7.5rem] pt-12 flex flex-col items-center justify-between gap-4 lg:gap-16 ${classes} mx-auto max-w-[1440px] overflow-hidden`}
    >
      <div className="lg:flex-shrink-0">
        <DisplayWithBolt display={display} />
      </div>
      <div className="flex-grow">
        <h2
          className={`md:text-[2rem] lg:text-[1.75rem] text-[1.75rem] xl:text-[2.5rem] font-extrabold xl:leading-[3rem] mb-3 2xl:mb-6 ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-base 2xl:text-lg 2xl:leading-[1.8rem] mb-4 2xl:mb-8 ${
            theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
          }`}
        >
          {children}
        </p>
        <CtaRightArrow
          href={href}
          width="w-[12rem] md:w-[15.125rem]"
          cta={cta}
        />
      </div>
    </div>
  );
};

export default FeatureBox;
