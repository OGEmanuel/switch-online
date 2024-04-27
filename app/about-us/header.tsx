"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useThemeContext } from "@/context";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const revealRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useThemeContext();

  useGSAP(() => {
    if (revealRef.current) {
      ScrollTrigger.create({
        trigger: revealRef.current,
        start: "top center", // Change this according to your needs
        onEnter: () => {
          gsap.to(".reveal", {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.3,
            ease: "power2.out",
          });
        },
      });
    }
  });

  return (
    <div
      ref={revealRef}
      className={`font-extrabold z-10 text-[2.5rem] leading-[3rem] md:text-7xl xl:w-[39rem] md:leading-[5.5rem] ${
        theme === "dark" ? "text-white" : ""
      }`}
    >
      <p className="reveal">
        Be <span className="text-[#1E9B97]">Seen.</span>
      </p>
      <p className="reveal">
        Be <span className="text-[#48B3B8]">Heard.</span>
      </p>
      <p className="whitespace-nowrap reveal">
        Be <span className="text-[#5AE0E6]">Unforgettable.</span>
      </p>
    </div>
  );
};

export default Header;
