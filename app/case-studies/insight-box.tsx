import CtaRightArrow from "@/components/ui/cta-right-arrow";
import Insight from "./insight";
import Image from "next/image";
import { ReactNode } from "react";

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
  src: string;
  href?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-between pt-[7.5rem] ${className}`}
    >
      <div className="max-w-[41rem]">
        <p className="text-[2.5rem] font-extrabold leading-[3rem] mb-6">
          {title}
        </p>
        <p className="text-lg text-[#506363] mb-8">{children}</p>
        <div className="flex gap-4 flex-wrap mb-8">
          <Insight>4 million views</Insight>
          <Insight>2 million engagements</Insight>
          <Insight>Average IG ER 10.75%</Insight>
        </div>
        <CtaRightArrow href={href} width="" cta="View case study" />
      </div>
      <div>
        <Image src={src} alt="display img" width={560} height={560} />
      </div>
    </div>
  );
};

export default InsightBox;
