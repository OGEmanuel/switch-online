"use client";

import React, { useEffect, useRef, useState } from "react";
import CtaRightArrow from "@/components/ui/cta-right-arrow";
import HomeBarIcon from "@/public/icons/home-bar-icon";
import HomeCaseStudies from "./home-case-studies";

const ScrollFix = () => {
  return (
    <div className="bg-white pt-[6.25rem] px-4 md:px-20 flex justify-between items-center pb-16">
      <div className="max-w-[35rem] 2xl:max-w-[41rem]">
        <div className="flex flex-col gap-6 mb-8">
          <HomeBarIcon />
          <p className="text-[2.5rem] font-extrabold leading-[3rem]">
            Our recent Case studies
          </p>
          <p className="text-[#506363] text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
        <CtaRightArrow
          href="/case-studies"
          width="w-[12.8rem]"
          cta="All Case studies"
        />
      </div>
      <div className="max-h-[34rem] overflow-auto scrollbar">
        <HomeCaseStudies />
        <HomeCaseStudies />
        <HomeCaseStudies />
        <HomeCaseStudies />
      </div>
    </div>
  );
};

export default ScrollFix;
