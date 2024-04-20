"use client";

import { Button } from "@/components/ui/button";
import BoltHeroIcon from "@/public/icons/bolt-hero-icon";
import Image from "next/image";
import Link from "next/link";
import yt from "@/public/yt.webp";
import tao from "@/public/tao.webp";
import facebook from "@/public/facebook.webp";
import isbaeu from "@/public/isbaeu.webp";
import enioluwa from "@/public/enioluwa.webp";
import bigibet from "@/public/bigibet.webp";
import HeroFacebookIcon from "@/public/icons/hero-facebook-icon";
import HeroInstagramIcon from "@/public/icons/hero-instagram-icon.svg";
import HeroMetaIcon from "@/public/icons/hero-meta-icon";
import HeroTiktokIcon from "@/public/icons/hero-tiktok-icon";
import HeroXIcon from "@/public/icons/hero-x-icon.svg";
import HeroYtIcon from "@/public/icons/hero-yt-icon.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
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

  const blurDataURL =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkMAYAADkANVKH3ScAAAAASUVORK5CYII=";

  return (
    <section
      ref={revealRef}
      className="mt-[5rem] mb-[19.625rem] px-4 md:px-20 relative max-w-[1440px] mx-auto"
    >
      <div className="h-max">
        <div className="max-w-[48.5625rem] items-center mx-auto text-center flex flex-col gap-5">
          <h1 className="font-extrabold text-[2.5rem] md:text-[3rem] w-auto md:w-[35rem] md:leading-[3.6rem] 2xl:w-auto 2xl:text-[3.5rem] 2xl:leading-[4.2rem] reveal">
            <span className="">Unlock Your Brand&apos;s </span>
            <span className="">
              Potential with <span className="text-[#48B3B8]">Switch.</span>
            </span>
          </h1>
          <p className="md:text-lg text-[#485B5B] max-w-[33.8rem] reveal">
            Elevate Your Brand, Captivate Your Audience, and Drive Unforgettable
            Results.
          </p>
          <Button asChild>
            <Link
              href={"/get-in-touch"}
              className={`!bg-[#fff] flex gap-1 items-center shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)] hover:!bg-[#F8F8F8] rounded-xl h-14 w-[9.875rem] border border-[#BAD0D0] reveal`}
            >
              <BoltHeroIcon />
              <span className="block text-[#082828] font-semibold">
                Get in Touch
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div
        className="absolute -top-[6.5rem] xl:left-[12rem] 2xl:left-[15rem] xl:block hidden will-change-transform animate-fadeIn origin-bottom"
      >
        <div className="relative">
          <Image
            src={facebook}
            alt="first"
            width={200}
            height={120}
            className="rounded-2xl border border-[rgba(0,0,0,0.1)]"
            unoptimized
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-30%]">
            <HeroFacebookIcon />
          </div>
        </div>
      </div>
      <div
        className="absolute top-[10rem] left-[2rem] xl:block hidden will-change-transform animate-fadeIn origin-bottom"
      >
        <div className="relative">
          <Image
            src={bigibet}
            alt="third"
            width={155}
            height={155}
            className="rounded-2xl border border-[rgba(0,0,0,0.1)]"
            unoptimized
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-30%]">
            <HeroMetaIcon />
          </div>
        </div>
      </div>
      <div
        className="absolute top-[15rem] left-[20rem] xl:block hidden will-change-transform animate-fadeIn origin-bottom"
      >
        <div className="relative">
          <Image
            src={enioluwa}
            alt="first"
            width={142}
            height={236}
            className="rounded-2xl border border-[rgba(0,0,0,0.1)]"
            unoptimized
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-10%]">
            <HeroTiktokIcon />
          </div>
        </div>
      </div>
      <div
        className="absolute -top-[7rem] right-[15rem] xl:block hidden will-change-transform animate-fadeIn origin-bottom"
      >
        <div className="relative">
          <Image
            src={isbaeu}
            alt="second"
            width={120}
            height={200}
            className="rounded-2xl border border-[rgba(0,0,0,0.1)]"
            unoptimized
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-20%]">
            <Image
              src={HeroInstagramIcon}
              alt="Instagram"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute top-[16rem] right-[18rem] xl:block hidden will-change-transform animate-fadeIn origin-bottom"
      >
        <div className="relative">
          <Image
            src={tao}
            alt="first"
            width={200}
            height={200}
            className="rounded-2xl border border-[rgba(0,0,0,0.1)]"
            unoptimized
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-20%]">
            <Image
              src={HeroXIcon}
              alt="X"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute top-[10rem] right-[2rem] xl:block hidden will-change-transform animate-fadeIn origin-bottom"
      >
        <div className="relative">
          <Image
            src={yt}
            alt="first"
            width={190}
            height={113}
            className="rounded-2xl border border-[rgba(0,0,0,0.1)]"
            unoptimized
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-30%]">
            <Image
              src={HeroYtIcon}
              alt="yt"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
