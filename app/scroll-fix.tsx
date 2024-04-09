"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFix = ({
  left,
  right,
  className,
}: {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}) => {
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
    <div className="bg-white px-4 gallery pt-12 lg:pt-[6.25rem] relative md:px-8 lg:px-20 flex lg:flex-row flex-col md:gap-6 lg:gap-0 justify-between pb-16 overflow-hidden">
      <div
        className={`max-w-[35rem] ${className} mx-auto 2xl:max-w-[41rem] leftblock mb-12 md:mb-0`}
      >
        {left}
      </div>
      <div className="w-max mx-auto">{right}</div>
    </div>
  );
};

export default ScrollFix;
