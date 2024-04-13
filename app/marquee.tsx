"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import truecaller from "@/public/truecaller-marquee-logo.svg";
import betking from "@/public/betking-marquee-logo.svg";
import oppo from "@/public/oppo-marquee-logo.svg";
import duo from "@/public/duo-marquee-logo.svg";
import shuttlers from "@/public/shuttlers-marquee-logo.svg";

const Marquee = () => {
  const scrollersRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  const addAnimation = () => {
    if (scrollersRef.current) {
      scrollersRef.current.setAttribute("data-animated", "true");
      if (scrollerInnerRef.current) {
        const scrollerContent = Array.from(scrollerInnerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          (duplicatedItem as HTMLDivElement).setAttribute(
            "aria-hidden",
            "true"
          );
          scrollerInnerRef.current?.appendChild(duplicatedItem);
        });
      }
    }
  };

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (scrollerInnerRef.current)
        scrollerInnerRef.current.classList.add("animate-scroll");
      addAnimation();
    }
  }, []);

  return (
    <div className="flex gradient flex-col gap-8 mx-auto text-center mt-[8.75rem] max-w-[1440px]">
      <div className="relative">
        <p className="text-[#485B5B] text-lg font-medium z-30">
          Brands that trust us
        </p>
      </div>
      <div ref={scrollersRef} className="scroller mx-auto max-w-[1144px]">
        <div
          ref={scrollerInnerRef}
          className={`flex flex-wrap gap-[7.5rem] mx-auto py-4 scroller__inner`}
        >
          <Image src={truecaller} alt="logo" />
          <Image src={betking} alt="logo" />
          <Image src={oppo} alt="logo" />
          <Image src={duo} alt="logo" />
          <Image src={shuttlers} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
