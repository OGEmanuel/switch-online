"use client";

import CtaRightArrow from "@/components/ui/cta-right-arrow";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@/context";

const InsightBox = ({
  className,
  children,
  title,
  src,
  href,
  insights,
}: {
  className?: string;
  children: ReactNode;
  title: string;
  src: StaticImageData;
  href?: string;
  insights?: ReactNode;
}) => {
  const pathname = usePathname();
  const { theme } = useThemeContext();

  return (
    <div
      className={`flex flex-wrap lg:flex-nowrap gap-4 md:gap-16 items-center justify-between pt-10 md:pt-16 lg:pt-[7.5rem] ${className}`}
    >
      <div className="">
        <p
          className={`md:text-[2.5rem] text-[1.75rem] font-extrabold leading-[3rem] mb-6 ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          {title}
        </p>
        <p
          className={`text-lg mb-8 
        ${theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"}
        `}
        >
          {children}
        </p>
        {pathname !== "/case-studies/truecaller" &&
          pathname !== "/case-studies/betking" &&
          pathname !== "/case-studies/oppo" && (
            <>
              <div className="flex gap-4 flex-wrap mb-8">{insights}</div>
              <CtaRightArrow href={href} width="" cta="View case study" />
            </>
          )}
      </div>

      <div className="xl:w-max lg:flex-shrink-0">
        <Image
          src={src}
          alt="display img"
          width={560}
          height={560}
          placeholder="blur"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default InsightBox;
