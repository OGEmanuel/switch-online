"use client";

import React, { useEffect, useRef, useState } from "react";
import CtaRightArrow from "@/components/ui/cta-right-arrow";
import HomeBarIcon from "@/public/icons/home-bar-icon";
import HomeCaseStudies from "./home-case-studies";

const ScrollFix = () => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && scrollableDivRef.current) {
          // The outer div is in view, set the scrollable div to be controlled by JavaScript
          scrollableDivRef.current.style.overflowY = "scroll";
          scrollableDivRef.current.addEventListener("scroll", handleScroll);
        }
      });
    });

    if (outerDivRef.current) {
      observer.observe(outerDivRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScroll = (event: Event) => {
    const target = event.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    if (scrollTop + clientHeight >= scrollHeight && scrollableDivRef.current) {
      // The scrollable div has been scrolled to the end, revert the scroll behavior back to natural
      scrollableDivRef.current.style.overflowY = "auto";
      scrollableDivRef.current.removeEventListener("scroll", handleScroll);
    }
  };

  return (
    <div
      ref={outerDivRef}
      className="bg-white pt-[6.25rem] px-4 md:px-20 flex justify-between items-center pb-16"
    >
      <div className="max-w-[41rem]">
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
      <div
        ref={scrollableDivRef}
        className="max-h-[34rem] overflow-auto scrollbar"
      >
        <HomeCaseStudies />
        <HomeCaseStudies />
        <HomeCaseStudies />
        <HomeCaseStudies />
      </div>
    </div>
  );
};

export default ScrollFix;
