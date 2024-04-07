import Image from "next/image";
import CtaRightArrow from "./ui/cta-right-arrow";
import { ReactNode } from "react";
import BoltImgIcon from "@/public/icons/bolt-img-icon";
import display from "../public/display-img-med.jpg";
import BoltImgIconSmall from "@/public/icons/bolt-img-icon-small";

const FeatureBox = ({
  title,
  children,
  cta,
  classes,
  href,
}: {
  title: string;
  children: ReactNode;
  cta: string;
  classes?: string;
  href?: string;
}) => {
  return (
    <div
      className={`lg:mt-[7.5rem] mt-12 flex lg:flex-row flex-col items-center justify-between gap-4 lg:gap-16 ${classes}`}
    >
      <div className="w-max relative">
        <div className="md:w-[560px] xl:w-[560px] xl:h-[560px] lg:w-[358px] lg:h-[358px] w-[358px] h-[358px] md:h-[560px]">
          <Image src={display} alt="display-img" fill placeholder="blur" />
        </div>
        <div className="absolute md:hidden -top-8 -right-4">
          <BoltImgIconSmall />
        </div>
        <div className="absolute md:block hidden -top-8 -right-4">
          <BoltImgIcon />
        </div>
      </div>
      <div className="lg:max-w-[41rem] md:max-w-[35rem] max-w-[30rem] mx-auto">
        <p className="md:text-[2rem] lg:text-[1.75rem] text-[1.75rem] xl:text-[2.5rem] font-extrabold 2xl:leading-[3rem] mb-3 2xl:mb-6">
          {title}
        </p>
        <p className="text-base 2xl:text-lg text-[#506363] 2xl:leading-[1.8rem] mb-4 2xl:mb-8">
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
