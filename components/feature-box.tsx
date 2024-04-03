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
    <div className={`mt-[7.5rem] px-4 md:px-20 flex items-center ${classes}`}>
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
      <div className="max-w-[41rem] mx-auto">
        <p className="text-[2.5rem] font-extrabold leading-[3rem] mb-6">
          {title}
        </p>
        <p className="text-lg text-[#506363] leading-[1.8rem] mb-8">
          {children}
        </p>
        <CtaRightArrow href={href} width="w-[15.125rem]" cta={cta} />
      </div>
    </div>
  );
};

export default FeatureBox;
