"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import truecaller from "@/public/truecaller-marquee-logo.svg";
import betking from "@/public/betking-marquee-logo.svg";
import oppo from "@/public/oppo-marquee-logo.svg";
import duo from "@/public/duo-marquee-logo.svg";
import shuttlers from "@/public/shuttlers-marquee-logo.svg";
import truecallerDark from "@/public/truecaller-marquee-logo-dark.svg";
import betkingDark from "@/public/betking-marquee-logo-dark.svg";
import oppoDark from "@/public/oppo-marquee-logo-dark.svg";
import duoDark from "@/public/duo-marquee-logo-dark.svg";
import shuttlersDark from "@/public/shuttlers-marquee-logo-dark.svg";
import { useThemeContext } from "@/context";

const Marquee = () => {
  const scrollersRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);
  const scrollersDarkRef = useRef<HTMLDivElement>(null);
  const scrollerDarkInnerRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeContext();

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

    if (scrollersDarkRef.current) {
      scrollersDarkRef.current.setAttribute("data-animated", "true");
      if (scrollerDarkInnerRef.current) {
        const scrollerContent = Array.from(
          scrollerDarkInnerRef.current.children
        );

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          (duplicatedItem as HTMLDivElement).setAttribute(
            "aria-hidden",
            "true"
          );
          scrollerDarkInnerRef.current?.appendChild(duplicatedItem);
        });
      }
    }
  };

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (scrollerDarkInnerRef.current) {
        scrollerDarkInnerRef.current.classList.add("animate-scroll");
      }
      if (scrollerInnerRef.current)
        scrollerInnerRef.current.classList.add("animate-scroll");
      addAnimation();
    }
  }, []);

  return (
    <div
      className={`flex flex-col gap-8 mx-auto text-center mt-[8.75rem] max-w-[1440px] ${
        theme === "dark" ? "darkGradient" : "gradient"
      }`}
    >
      <div className="relative">
        <p
          className={`text-lg font-medium z-30 ${
            theme === "dark" ? "text-[#BAD0D0]" : "text-[#485B5B]"
          }`}
        >
          Brands that trust us
        </p>
      </div>
      <div
        ref={scrollersDarkRef}
        className={`scroller mx-auto max-w-[1144px]
      ${theme === "dark" ? "" : "hidden"}
      `}
      >
        <div
          ref={scrollerDarkInnerRef}
          className={`flex flex-wrap gap-[7.5rem] mx-auto py-4 scroller__inner`}
        >
          <Image src={truecallerDark} alt="logo" />
          <Image src={betkingDark} alt="logo" />
          <Image src={oppoDark} alt="logo" />
          <Image src={duoDark} alt="logo" />
          <Image src={shuttlersDark} alt="logo" />
        </div>
      </div>
      <div
        ref={scrollersRef}
        className={`scroller mx-auto max-w-[1144px]
      ${theme === "dark" ? "hidden" : ""}
      `}
      >
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
