"use client";

import CtaRightArrow from "@/components/ui/cta-right-arrow";
import Insight from "./insight";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const InsightBox = ({
  className,
  children,
  title,
  src,
  href,
}: {
  className?: string;
  children: ReactNode;
  title: string;
  src: StaticImageData;
  href?: string;
}) => {
  const pathname = usePathname();

  return (
    <div
      className={`flex flex-wrap lg:flex-nowrap gap-4 md:gap-16 items-center justify-between pt-4 md:pt-16 lg:pt-[7.5rem] ${className}`}
    >
      <div className="max-w-[41rem] md:max-w-[560px] xl:max-w-[41rem]">
        <p className="md:text-[2.5rem] text-[1.75rem] font-extrabold leading-[3rem] mb-6">
          {title}
        </p>
        <p className="text-lg text-[#506363] mb-8">{children}</p>
        {pathname !== "/case-studies/study-one" && (
          <>
            <div className="flex gap-4 flex-wrap mb-8">
              <Insight>4 million views</Insight>
              <Insight>2 million engagements</Insight>
              <Insight>Average IG ER 10.75%</Insight>
            </div>
            <CtaRightArrow href={href} width="" cta="View case study" />
          </>
        )}
      </div>

      <div>
        <Image
          src={src}
          alt="display img"
          placeholder="blur"
          width={560}
          height={560}
        />
      </div>
    </div>
  );
};

export default InsightBox;
