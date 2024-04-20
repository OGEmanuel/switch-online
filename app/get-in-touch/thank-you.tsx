"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ThankYou = () => {
  const revealRef = useRef<HTMLTableSectionElement | null>(null);

  useGSAP(() => {
    if (revealRef.current) {
      ScrollTrigger.create({
        trigger: revealRef.current,
        start: "top center",
        onEnter: () => {
          gsap.to(".reveal", {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: "power2.out",
          });
        },
      });
    }
  });

  return (
    <section
      ref={revealRef}
      className="text-center max-w-[38rem] mx-auto mt-[2.5rem] flex flex-col gap-6"
    >
      <h1 className="xl:text-[4.25rem] text-3xl font-extrabold xl:leading-[5rem] reveal">
        Thank you for reaching out!
      </h1>
      <p className="text-lg text-[#506363] reveal">
        We&apos;ll get back to you shortly.
      </p>
    </section>
  );
};

export default ThankYou;
