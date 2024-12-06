"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import ArrowRightSharpIcon from "@/public/icons/arrow-right-sharp-icon";
import BannerBoltIcon from "@/public/icons/banner-bolt-icon";
import BannerBoltMobileIcon from "@/public/icons/banner-bolt-mobile-icon";
import BannerEllipseIcon from "@/public/icons/banner-ellipse-icon";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@/context";

const Banner = () => {
  const { theme } = useThemeContext();
  const pathname = usePathname();

  return (
    <div className={`${theme === "dark" ? "bg-[#020F0F]" : ""} py-6`}>
      <div className="mt-[7.5rem] px-4 md:px-8 lg:px-20 mx-auto max-w-[1440px]">
        <div className="bg-[#5AE0E6] shadow-[0px_16px_32px_0px_rgba(90,224,230,0.2)] rounded-[2rem]  md:rounded-[3rem] px-6 pb-6 pt-[15.125rem] md:p-10 xl:p-20 relative">
          <div className="flex flex-col gap-4 lg:max-w-[540px] md:max-w-[420px] max-w-[540px]">
            <p className="text-[#051D1C] text-[1.75rem] lg:leading-[3.6rem] md:text-3xl lg:text-5xl font-extrabold">
              {pathname.toLowerCase().includes("case-studies") ||
              pathname.toLowerCase().includes("get-in-touch")
                ? "Be on our next list of successful projects"
                : "Let's Talk Strategy"}
            </p>
            <p className="md:text-lg text-base text-[#051E1D]">
              Ready to take your brand to new heights? Don&apos;t hesitate to
              reach out.
            </p>
            {!pathname.toLowerCase().includes("get-in-touch") && (
              <Button asChild>
                <Link
                  href="/get-in-touch"
                  className="!bg-[#fff] flex gap-1 items-center shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)] hover:!bg-[#F8F8F8] rounded-xl h-14 w-[9.75rem]"
                >
                  <span className="block text-[#082828] font-semibold">
                    Get in touch
                  </span>
                  <ArrowRightSharpIcon />
                </Link>
              </Button>
            )}
            <div className="absolute right-20 -top-28 md:right-20 lg:right-32">
              <div className="w-max xl:hidden animate-bounce">
                <BannerBoltMobileIcon />
              </div>
              <div className="relative">
                <div className="animate-bounce xl:block hidden">
                  <BannerBoltIcon />
                </div>
                <div className="absolute animate-scale delay-[1500ms] -bottom-20 -left-10 w-max">
                  <BannerEllipseIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
