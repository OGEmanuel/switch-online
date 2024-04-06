import Image from "next/image";
import CtaRightArrow from "./ui/cta-right-arrow";
import { ReactNode } from "react";
import BoltImgIcon from "@/public/icons/bolt-img-icon";

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
      className={`mt-[7.5rem] flex items-center justify-between gap-16 ${classes}`}
    >
      <div className="w-max relative">
        <Image
          src={"/display-img-med.jpg"}
          alt="display-img"
          width={560}
          height={560}
        />
        <div className="absolute -top-8 -right-4">
          <BoltImgIcon />
        </div>
      </div>
      <div className="w-[41rem]">
        <p className="text-[2rem] 2xl:text-[2.5rem] font-extrabold 2xl:leading-[3rem] mb-3 2xl:mb-6">
          {title}
        </p>
        <p className="text-base 2xl:text-lg text-[#506363] 2xl:leading-[1.8rem] mb-4 2xl:mb-8">
          {children}
        </p>
        <CtaRightArrow href={href} width="w-[15.125rem]" cta={cta} />
      </div>
    </div>
  );
};

export default FeatureBox;
