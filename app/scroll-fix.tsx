"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div className="bg-white px-4 gallery pt-12 lg:pt-[6.25rem] relative md:px-8 lg:px-20 flex lg:flex-row flex-col md:gap-6 lg:gap-16 justify-between pb-16 overflow-hidden mx-auto max-w-[1440px]">
      <div className={`${className} leftblock mb-12`}>{left}</div>
      <div className={classNameRight}>{right}</div>
    </div>
  );
};

export default ScrollFix;
