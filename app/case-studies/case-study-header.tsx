"use client";

import { useThemeContext } from "@/context";
import Image, { StaticImageData } from "next/image";

const CaseStudyHeader = ({
  logo,
  title,
  tag1,
  tag2,
}: {
  logo: StaticImageData;
  title: string;
  tag1?: string;
  tag2?: string;
}) => {
  const { theme } = useThemeContext();

  return (
    <div className="md:pt-16 pt-10 max-w-[49.5625rem] px-4 md:px-0 mx-auto text-center flex flex-col gap-6 mb-20">
      <div className="w-max mx-auto">
        <Image src={logo} alt="logo" />
      </div>
      <h1
        className={`md:text-5xl text-[2rem] md:leading-[3.6rem] font-extrabold 
      ${theme === "dark" ? "text-white" : ""}
      `}
      >
        {title}
      </h1>
      <div className="md:text-lg text-base font-medium flex-wrap flex gap-4 justify-center">
        {tag1 && (
          <p className="text-[#9747FF] bg-[#F5EDFF] py-[10px] px-6 rounded-[2.125rem]">
            {tag1}
          </p>
        )}
        {tag2 && (
          <p className="text-[#C026D3] bg-[#F9EAFB] py-[10px] px-6 rounded-[2.125rem]">
            {tag2}
          </p>
        )}
      </div>
    </div>
  );
};

export default CaseStudyHeader;
