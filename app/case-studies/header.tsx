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
      className="lg:mt-[6.25rem] mt-10 mb-6 max-w-[50rem] flex flex-col gap-6"
    >
      <p className="text-[#082828] md:text-base text-sm font-semibold">
        CASE STUDIES
      </p>
      <h1 className="md:text-5xl text-[2.5rem] font-extrabold">
        We work with brands across multiple industries and verticals
      </h1>
      <p className="md:text-2xl text-[#506363]">
        We specialize in Social, Paid, Creative, Influencer and Strategy and
        work with fast-growth brands.
      </p>
    </div>
  );
};

export default Header;
