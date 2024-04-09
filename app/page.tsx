import FeatureBox from "@/components/feature-box";
import Hero from "./hero";
import Marquee from "./marquee";
import ScrollFix from "./scroll-fix";
import Services from "@/components/services";
import { Metadata } from "next";
import FeatureBoxSec from "./feature-box-sec";
import WhatDrivesUs from "./(values-box)/what-drives-us";

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
      <ScrollFix />
    </main>
  );
}
