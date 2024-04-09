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
import HeroInstagramIcon from "@/public/icons/hero-instagram-icon";
import HeroMetaIcon from "@/public/icons/hero-meta-icon";
import HeroTiktokIcon from "@/public/icons/hero-tiktok-icon";
import HeroXIcon from "@/public/icons/hero-x-icon";
import HeroYtIcon from "@/public/icons/hero-yt-icon";

const Hero = () => {
  const gradientStyle = {
    background:
      "linear-gradient(0deg, #5AE0E6, #5AE0E6), linear-gradient(93.17deg, rgba(0, 0, 0, 0) 36.02%, rgba(0, 0, 0, 0.2) 67.48%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section className="mt-[3.5rem] mb-[19.625rem] px-4 md:px-20 relative">
      <div className="h-max">
        <div className="max-w-[48.5625rem] items-center mx-auto text-center flex flex-col gap-5">
          <h1 className="font-extrabold text-[2.5rem] md:text-[3.5rem] md:leading-[4.2rem]">
            Unlock Your Brand&apos;s Potential with{" "}
            <span style={gradientStyle}>Switch.</span>
          </h1>
          <p className="md:text-lg text-[#485B5B] max-w-[33.8rem]">
            Elevate Your Brand, Captivate Your Audience, and Drive Unforgettable
            Results.
          </p>
          <Button asChild>
            <Link
              href={"/"}
              className={`!bg-[#fff] flex gap-1 items-center shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)] hover:bg-[#fff] rounded-xl h-14 w-[9.875rem] border border-[#BAD0D0]`}
            >
              <BoltHeroIcon />
              <span className="block text-[#082828] font-semibold">
                Get in Touch
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute -top-[5.5rem] left-[9rem] xl:block hidden">
        <div className="relative">
          <Image
            src={facebook}
            alt="first"
            width={200}
            height={120}
            className="rounded-2xl"
            unoptimized
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-30%]">
            <HeroFacebookIcon />
          </div>
        </div>
      </div>
      <div className="absolute -top-[5.5rem] right-[12rem] xl:block hidden">
        <div className="relative">
          <Image
            src={isbaeu}
            alt="second"
            width={120}
            height={200}
            className="rounded-2xl"
            unoptimized
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-20%]">
            <HeroInstagramIcon />
          </div>
        </div>
      </div>
      <div className="absolute top-[10rem] left-[2rem] xl:block hidden">
        <div className="relative">
          <Image
            src={bigibet}
            alt="third"
            width={155}
            height={155}
            className="rounded-2xl"
            unoptimized
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-30%]">
            <HeroMetaIcon />
          </div>
        </div>
      </div>
      <div className="absolute top-[15rem] left-[20rem] xl:block hidden">
        <div className="relative">
          <Image
            src={enioluwa}
            alt="first"
            width={142}
            height={236}
            className="rounded-2xl"
            unoptimized
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-10%]">
            <HeroTiktokIcon />
          </div>
        </div>
      </div>
      <div className="absolute top-[16rem] right-[18rem] xl:block hidden">
        <div className="relative">
          <Image
            src={tao}
            alt="first"
            width={200}
            height={200}
            className="rounded-2xl"
            unoptimized
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-20%]">
            <HeroXIcon />
          </div>
        </div>
      </div>
      <div className="absolute top-[10rem] right-[2rem] xl:block hidden">
        <div className="relative">
          <Image
            src={yt}
            alt="first"
            width={190}
            height={113}
            className="rounded-2xl"
            unoptimized
          />
          <div className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-30%]">
            <HeroYtIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
