"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useThemeContext } from "@/context";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ThankYou = ({
  onSetPage,
}: {
  onSetPage: Dispatch<SetStateAction<number>>;
}) => {
  const revealRef = useRef<HTMLTableSectionElement | null>(null);
  const { theme } = useThemeContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      onSetPage(0);
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

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
      className="text-center max-w-[38rem] mx-auto pt-[2.5rem] flex flex-col gap-6 h-screen"
    >
      <h1
        className={`xl:text-[4.25rem] text-3xl font-extrabold xl:leading-[5rem] reveal ${
          theme === "dark" ? "text-white" : ""
        }`}
      >
        Thank you for reaching out!
      </h1>
      <p
        className={`text-lg reveal 
      ${theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"}
      `}
      >
        We&apos;ll get back to you shortly.
      </p>
    </section>
  );
};

export default ThankYou;
