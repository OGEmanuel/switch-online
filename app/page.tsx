import FeatureBox from "@/components/feature-box";
import Hero from "./hero";
import Marquee from "./marquee";
import Image from "next/image";
import HomeStrategyIcon from "@/public/icons/home-strategy-icon";
import HomeSocialIcon from "@/public/icons/home-social-icon";
import HomeMarketingIcon from "@/public/icons/home-marketing-icon";
import HomeInfluencerIcon from "@/public/icons/home-influencer-icon";
import HomeCreativeIcon from "@/public/icons/home-creative-icon";
import HomePerformanceIcon from "@/public/icons/home-performance-icon";
import HomeContentIcon from "@/public/icons/home-content-icon";
import HomeMediaIcon from "@/public/icons/home-media-icon";
import Values from "./values";
import BarIcon from "@/public/icons/bar-icon";
import OtherServices from "./our-services/other-services";
import ScrollFix from "./scroll-fix";
import BoltImgIcon from "@/public/icons/bolt-img-icon";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-119.97px)] bg-fixed bg-[url('/icons/hero-bg-icon.svg')] bg-no-repeat bg-center pt-8">
      <Hero />
      <div className="bg-white relative px-4 md:px-20 before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:shadow-[0px_-10px_30px_rgba(0,0,0)]">
        <Marquee />
        <FeatureBox
          href="/our-services"
          classes="bg-white"
          title="We grow ambitious brands with Social, Paid, Creative and Influencer"
          cta="Browse Our Services"
        >
          <>
            Results are our compass, and we&apos;re not here to just tick boxes
            with you; we&apos;re committed to making a real impact on your
            business. <br /> <br />
            Our focus is sharp, targeting measurable outcomes that matter to
            you. With us, it&apos;s not just about effort; it&apos;s about
            tangible results driving your success. <br />
            The results-driven Social first agency you&apos;ve been looking for.
          </>
        </FeatureBox>
        <div className="flex justify-between mt-[10.25rem] items-center pb-[7.5rem]">
          <div className="w-[30rem] 2xl:w-[41rem] flex flex-col gap-10 2xl:gap-20">
            <div className="flex flex-col gap-3 2xl:gap-6">
              <p className="font-extrabold text-[2rem] 2xl:text-[2.5rem] 2xl:leading-[3rem]">
                Result-Focused Strategies
              </p>
              <p className="text-base 2xl:text-lg text-[#506363]">
                Our approach hinges on outcomes, not just outputs. We&apos;re
                not here to merely tick boxes, we&apos;re here to make a real
                impact on your business. With a sharp focus on measurable
                outcomes, we ensure tangible results that drive your success.
                It&apos;s not just about effort; it&apos;s about delivering
                results that matter to you.
              </p>
            </div>
            <div className="flex flex-col gap-5 2xl:gap-10">
              <p className="text-[#082828] font-semibold text-xl">
                Our Comprehensive Offerings
              </p>
              <div className="flex gap-5 2xl:gap-10 flex-wrap text-[#082828] text-base 2xl:text-xl">
                <div className="flex items-center gap-2">
                  <HomeStrategyIcon />
                  <p>Strategy</p>
                </div>
                <div className="flex items-center gap-2">
                  <HomeSocialIcon />
                  <p>Social</p>
                </div>
                <div className="flex items-center gap-2">
                  <HomeMarketingIcon />
                  <p>Marketing</p>
                </div>
                <div className="flex items-center gap-2">
                  <HomeInfluencerIcon />
                  <p>Influencer</p>
                </div>
                <div className="flex items-center gap-2">
                  <HomeCreativeIcon />
                  <p>Creative</p>
                </div>
                <div className="flex items-center gap-2">
                  <HomePerformanceIcon />
                  <p>Performance</p>
                </div>
                <div className="flex items-center gap-2">
                  <HomeContentIcon />
                  <p>Content</p>
                </div>
                <div className="flex items-center gap-2">
                  <HomeMediaIcon />
                  <p>Media</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-max relative">
            <Image
              src={"/display-img-med.jpg"}
              alt="display-img"
              width={560}
              height={560}
            />
            <div className="absolute -top-8 -right-4">
              <BoltImgIcon />
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-[37.625rem] mx-auto text-center flex flex-col gap-4 mb-10">
            <p className="text-[#082828] text-[2.5rem] font-extrabold leading-[3rem]">
              What drives us
            </p>
            <p className="text-[#506363] text-lg">
              We believe in open and transparent communication, ensuring you
              know where your money goes.{" "}
            </p>
          </div>
          <div className="flex flex-wrap justify-center pb-[7.5rem]">
            <Values
              className="border-r border-b border-[#D7DBDB]"
              title="Client-centric"
              description="We believe in putting our clients at the heart of everything we do. Their success is our success, and we're dedicated to exceeding their expectations by delivering measurable results."
            />
            <Values
              className="border-l border-b border-[#D7DBDB]"
              title="Transparency"
              description="We believe in open and transparent communication, ensuring you
              know where your money goes. If you don't get the metrics,
              don't fret - we'll simplify and guide you through
              it."
            />
            <Values
              className="border-r border-t border-[#D7DBDB]"
              title="Our Team"
              description="Our team is the backbone of our success. We value
              collaboration, diversity, and mutual respect, harnessing the
              collective expertise and passion of our team members to
              deliver outstanding results for our clients."
            />
            <Values
              className="border-l border-t border-[#D7DBDB]"
              title="Passion"
              description="We're deeply committed to making a positive impact. Our
              enthusiasm drives us to go above and beyond for our clients,
              delivering exceptional results with dedication and commitment."
            />
          </div>
        </div>
      </div>
      <div className="bg-[#05201F] py-[7.5rem]">
        <div className="flex items-center justify-between px-4 md:px-20">
          <div className="flex flex-col gap-6">
            <p className="text-white font-extrabold text-[2.5rem]">
              Our Services
            </p>
            <p className="w-[33.75rem] text-[#BAD0D0]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna
            </p>
          </div>
          <BarIcon />
        </div>
        <div className="pl-4 md:pl-20 overflow-auto scrollbar pt-16">
          <div className="flex gap-12 w-max pr-20">
            <OtherServices />
          </div>
        </div>
      </div>
      <ScrollFix />
    </main>
  );
}
