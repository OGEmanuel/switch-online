"use client";

import FeatureBox from "@/components/feature-box";
import Hero from "./hero";
import Marquee from "./marquee";
import FeatureBoxSec from "./feature-box-sec";
import WhatDrivesUs from "./(values-box)/what-drives-us";
import Services from "@/components/services";
import ScrollFix from "./scroll-fix";
import HomeBarIcon from "@/public/icons/home-bar-icon";
import CtaRightArrow from "@/components/ui/cta-right-arrow";
import HomeCaseStudies from "./home-case-studies";
import Insight from "./case-studies/insight";
import firstTruecaller from "@/public/display-img-truecaller-main.png";
import betKing from "@/public/display-img-betking-main.jpg";
import oppo from "@/public/display-img-oppo-main.jpg";
import firstDisplay from "@/public/display-img-home-1.jpg";
import { useThemeContext } from "@/context";

const HomePage = () => {
  const { theme } = useThemeContext();

  return (
    <main
      className={`min-h-[calc(100vh-119.97px)] overflow-x-hidden bg-fixed bg-no-repeat bg-center pt-8 ${
        theme === "dark"
          ? "bg-[#020F0F] md:bg-[url('/icons/hero-bg-icon-dark.svg')] bg-[url('/hero-bg-icon-small-dark.svg')]"
          : "md:bg-[url('/icons/hero-bg-icon.svg')] bg-[url('/hero-bg-icon-small.svg')]"
      }`}
    >
      <Hero />
      <div className={`relative`}>
        <Marquee />
        <FeatureBox
          display={firstDisplay}
          href="/about-us"
          classes={`lg:flex-row ${
            theme === "dark" ? "bg-[#020F0F]" : "bg-white"
          }`}
          title="We grow ambitious brands with Social, Paid, Creative and Influencer"
          cta="Meet the team"
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
        <FeatureBoxSec />
      </div>
      <WhatDrivesUs />
      <Services
        title="Our Services"
        description="Discover our comprehensive range of services designed to elevate your brand and drive results."
      />
      <ScrollFix
        className="flex-grow"
        classNameRight="xl:w-[35rem]"
        left={
          <>
            <div className="flex flex-col gap-6 mb-8">
              <div className="md:block hidden">
                <HomeBarIcon
                  fill={`${theme === "dark" ? "#5AE0E6" : "#115E5B"}`}
                />
              </div>
              <p
                className={`lg:text-[2.5rem] text-[1.75rem] font-extrabold leading-[3rem] ${
                  theme === "dark" ? "text-white" : ""
                }`}
              >
                Our recent Case studies
              </p>
              <p
                className={`lg:text-lg ${
                  theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
                }`}
              >
                Discover our comprehensive range of services designed to elevate
                your brand and drive results.
              </p>
            </div>
            <CtaRightArrow
              href="/case-studies"
              width="w-[12.8rem]"
              cta="All Case studies"
            />
          </>
        }
        right={
          <>
            <HomeCaseStudies
              href="/case-studies/truecaller"
              name="Truecaller"
              insight={
                <>
                  <Insight>192K App Installs</Insight>
                  <Insight>275 million Impressions</Insight>
                  <Insight>4M Video views</Insight>
                </>
              }
              display={firstTruecaller}
              description="Our Influencer Marketing team was responsible for sourcing, outreach, briefing, influencer management, content review, post-production, monitoring content, and reporting to ensure we delivered an end-to-end campaign."
            />
            <HomeCaseStudies
              href="/case-studies/betking"
              name="Betking"
              display={betKing}
              insight={
                <>
                  <Insight>7,225 Backlinks</Insight>
                  <Insight>Domain authority score of 50</Insight>
                </>
              }
              description="We prioritized a content marketing approach and created high-quality content for our brand, focusing on match previews and game predictions. We engaged key opinion leaders who are also sport journalists to blog across high-traffic platforms with Domain Authority above 40."
            />
            <HomeCaseStudies
              href="/case-studies/oppo"
              name="Oppo"
              insight={
                <>
                  <Insight>5K Pre-order</Insight>
                  <Insight>130M Total Impressions</Insight>
                  <Insight>32K Mentions</Insight>
                </>
              }
              display={oppo}
              description="We recruited 2 Micro Influencers and fostered UGC content with tweets asking our audience to share the most interesting grass to grace story they ever heard of using the hashtag #LevelUp2023."
            />
          </>
        }
      ></ScrollFix>
    </main>
  );
};

export default HomePage;
