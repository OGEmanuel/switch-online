"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThemeContext } from "@/context";

gsap.registerPlugin(ScrollTrigger);

const ScrollFix = ({
  left,
  right,
  className,
  classNameRight,
}: {
  left: ReactNode;
  right: ReactNode;
  className?: string;
  classNameRight?: string;
}) => {
  const { theme } = useThemeContext();

  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;

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
    <div
      className={`px-4 gallery pt-12 lg:pt-[6.25rem] relative md:px-8 lg:px-20 pb-20 overflow-hidden ${
        theme === "dark" ? "bg-[#020F0F]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-[1440px] flex lg:flex-row flex-col md:gap-6 lg:gap-16 justify-between">
        <div className={`${className} leftblock mb-12`}>{left}</div>
        <div className={classNameRight}>{right}</div>
      </div>
    </div>
  );
};

export default ScrollFix;
