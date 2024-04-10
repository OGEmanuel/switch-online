import ArrowRightSharpIcon from "@/public/icons/arrow-right-sharp-icon";
import Image, { StaticImageData } from "next/image";
import Insight from "./case-studies/insight";
import { ReactNode } from "react";
import Link from "next/link";

const HomeCaseStudies = ({
  display,
  description,
  name,
  insight,
  href,
}: {
  display: StaticImageData;
  description: string;
  name: string;
  insight: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <div className="max-w-[20rem] md:max-w-[28rem] 2xl:max-w-[35rem] rounded-3xl overflow-hidden">
        <div className="flex flex-col gap-6">
          <Image
            src={display}
            alt="display img"
            width={560}
            height={260}
            placeholder="blur"
          />
          <div className="flex justify-between items-center">
            <p className="lg:text-[2rem] text-[1.75rem] leading-[2.4rem] font-extrabold">
              {name}
            </p>
            <ArrowRightSharpIcon />
          </div>
          <p className="lg:text-lg text-[#506363] whitespace-nowrap overflow-hidden text-ellipsis">
            {description}
          </p>
          <div className="flex gap-4 flex-wrap pb-[3rem] lg:pb-[6.5rem]">
            {insight}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCaseStudies;
