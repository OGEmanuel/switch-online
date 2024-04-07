"use client";

import React, { useEffect, useRef, useState } from "react";
import CtaRightArrow from "@/components/ui/cta-right-arrow";
import HomeBarIcon from "@/public/icons/home-bar-icon";
import HomeCaseStudies from "./home-case-studies";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFix = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 840; // Adjust the threshold as needed

    if (!isMobile) {
      const galleryElement = document.querySelector(".gallery") as HTMLElement;
      if (galleryElement) {
        ScrollTrigger.create({
          trigger: ".gallery",
          start: "top top",
          end: "bottom bottom",
          pin: ".leftblock",
          pinSpacing: false,
          onUpdate: (self) => {
            if (self.isActive) {
              gsap.set(".leftblock", { translateY: 0 });
            }
          },
        });
      }
    }
  }, []);

  return (
    <div className="bg-white px-4 gallery pt-12 lg:pt-[6.25rem] relative md:px-8 lg:px-20 flex md:flex-row flex-col justify-between pb-16 overflow-hidden">
      <div className="max-w-[35rem] md:max-w-[23rem] mx-auto 2xl:max-w-[41rem] leftblock mb-12 md:mb-0">
        <div className="flex flex-col gap-6 mb-8">
          <div className="md:block hidden">
            <HomeBarIcon />
          </div>
          <p className="lg:text-[2.5rem] text-[1.75rem] font-extrabold leading-[3rem]">
            Our recent Case studies
          </p>
          <p className="text-[#506363] lg:text-lg">
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
      <div className="w-max mx-auto">
        <HomeCaseStudies />
        <HomeCaseStudies />
        <HomeCaseStudies />
      </div>
    </div>
  );
};

export default ScrollFix;
