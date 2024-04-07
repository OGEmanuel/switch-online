import { Button } from "@/components/ui/button";
import BoltHeroIcon from "@/public/icons/bolt-hero-icon";
import Link from "next/link";

const Hero = () => {
  const gradientStyle = {
    background:
      "linear-gradient(0deg, #5AE0E6, #5AE0E6), linear-gradient(93.17deg, rgba(0, 0, 0, 0) 36.02%, rgba(0, 0, 0, 0.2) 67.48%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section className="mt-[3.5rem] mb-[19.625rem] px-4 md:px-20">
      <div className="h-max">
        <div className="max-w-[48.5625rem] items-center mx-auto text-center flex flex-col gap-5">
          <h1 className="font-extrabold text-[2.5rem] md:text-[3.5rem] leading-[4.2rem]">
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
    </section>
  );
};

export default Hero;
