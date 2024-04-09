"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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
    <div className="flex flex-col gap-8 mx-auto text-center mt-[8.75rem]">
      <div className="relative">
        <div className="bg-gradient-to-t from-transparent to-white w-full h-full absolute top-0 left-0 -z-10"></div>
        <p className="text-[#485B5B] text-lg font-medium z-30">
          Brand that trust us
        </p>
      </div>
      <div ref={scrollersRef} className="scroller max-w-[1144px]">
        <div
          ref={scrollerInnerRef}
          className={`flex flex-wrap gap-20 mx-auto py-4 scroller__inner`}
        >
          <Image
            src={"/easyjet-holidays.png"}
            alt="logo"
            width={112}
            height={64}
          />
          <Image src={"/premier-inn.png"} alt="logo" width={112} height={64} />
          <Image
            src={"/passenger-logo.png"}
            alt="logo"
            width={112}
            height={64}
          />
          <Image
            src={"/carpetright-logo.png"}
            alt="logo"
            width={112}
            height={64}
          />
          <Image src={"/blog-mecca.png"} alt="logo" width={112} height={64} />
          <Image src={"/uniql-logo.png"} alt="logo" width={112} height={64} />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
