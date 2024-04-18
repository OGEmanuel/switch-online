"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  // const revealRef = useRef<HTMLDivElement | null>(null);

  // useGSAP(() => {
  //   if (revealRef.current) {
  //     ScrollTrigger.create({
  //       trigger: revealRef.current,
  //       start: "top center", // Change this according to your needs
  //       onEnter: () => {
  //         gsap.to(".reveal", {
  //           y: 0,
  //           opacity: 1,
  //           duration: 0.5,
  //           stagger: 0.5,
  //           ease: "power2.out",
  //         });
  //       },
  //       markers: true,
  //     });
  //   }
  // });

  return (
    <div
      // ref={revealRef}
      className="text-center max-w-[43.5rem] mx-auto flex flex-col gap-5 md:gap-6 mb-[3.375rem]"
    >
      <p className="text-[#082828] font-semibold text-sm md:text-base">
        Our Services
      </p>
      <h1 className="font-extrabold text-[2.5rem] md:text-5xl">
        Our Range of Expert Services
      </h1>
      <p className="md:text-lg text-[#506363]">
        We specialize in Social, Paid, Creative, Influencer and Strategy and
        work with fast-growth brands.
      </p>
    </div>
  );
};

export default Header;
