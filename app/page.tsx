import FeatureBox from "@/components/feature-box";
import Hero from "./hero";
import Marquee from "./marquee";
import ScrollFix from "./scroll-fix";
import Services from "@/components/services";
import { Metadata } from "next";
import FeatureBoxSec from "./feature-box-sec";
import WhatDrivesUs from "./(values-box)/what-drives-us";
import firstDisplay from "@/public/display-img-home-1.jpg";
import HomeBarIcon from "@/public/icons/home-bar-icon";
import CtaRightArrow from "@/components/ui/cta-right-arrow";
import HomeCaseStudies from "./home-case-studies";
import firstTruecaller from "@/public/truecaller-img-1.jpg";
import betKing from "@/public/display-img-betking-main.jpg";
import oppo from "@/public/display-img-oppo-main.jpg";
import Insight from "./case-studies/insight";

export const metadata: Metadata = {
  title: "Switch Online - Home",
};

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-119.97px)] overflow-x-hidden bg-fixed md:bg-[url('/icons/hero-bg-icon.svg')] bg-[url('/hero-bg-icon-small.svg')] bg-no-repeat bg-center pt-8">
      <Hero />
      <div className="relative px-4 md:px-10 lg:px-20 before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:shadow-[0px_-10px_30px_rgba(0,0,0)]">
        <Marquee />
        <FeatureBox
          display={firstDisplay}
          href="/our-services"
          classes="bg-white lg:flex-row"
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
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massami. Aliquam in hendrerit urna"
      />
      <ScrollFix
        className="md:max-w-[23rem]"
        left={
          <>
            <div className="flex flex-col gap-6 mb-8">
              <div className="md:block hidden">
                <HomeBarIcon />
              </div>
              <p className="lg:text-[2.5rem] text-[1.75rem] font-extrabold leading-[3rem]">
                Our recent Case studies
              </p>
              <p className="text-[#506363] lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
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
              description="Our Influencer Marketing team was responsible for sourcing, outreach, briefing, influencer management, content review, post-production, monitoring content, and reporting to ensure we delivered an end-to-end campaign."
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
              description="Our Influencer Marketing team was responsible for sourcing, outreach, briefing, influencer management, content review, post-production, monitoring content, and reporting to ensure we delivered an end-to-end campaign."
            />
          </>
        }
      ></ScrollFix>
    </main>
  );
}
