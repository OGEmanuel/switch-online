"use client";

import Image from "next/image";
import Header from "./header";
import ScribbleText from "@/components/scribble-text";
import FeatureBox from "@/components/feature-box";
import TeamMember from "./team-member";
import arti from "@/public/Arti.jpg";
import bertha from "@/public/Bertha.jpg";
import deji from "@/public/Deji.jpg";
import tomiwa from "@/public/Tomiwa.jpg";
import display from "@/public/display-img-about-1.jpg";
import displaySec from "@/public/display-img-about-2.jpg";
import { useThemeContext } from "@/context";

const AboutUsHomePage = () => {
  const { theme } = useThemeContext();

  return (
    <section
      className={`pt-4 lg:pt-[4.5rem] pb-[7.5rem] ${
        theme === "dark" ? "bg-[#020F0F]" : ""
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-7 w-full mb-8 md:mb-16 px-4 md:px-8 lg:px-20 mx-auto max-w-[1440px]">
        <Header />
        <div className="md:text-lg flex-grow">
          <p
            className={`font-semibold mb-4
          ${theme === "dark" ? "text-white" : "text-[#082828]"}
          `}
          >
            ABOUT US
          </p>
          <p
            className={`leading-9 ${
              theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
            }`}
          >
            We&apos;re more than just another marketing agency, the world is
            full of those. We&apos;re passionate about delving deep into your
            business and pushing you into digital success. With Switch, you can
            go to bed at night knowing that your brand is not just visible, but
            captivating; your voice is not just heard, but resonating; and your
            impact is not just momentary, but unforgettable.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-20 mb-[5.5rem] md:mb-[7.5rem]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex justify-center">
            <Image
              src={display}
              alt="display"
              placeholder="blur"
              className="z-20 rounded-3xl"
            />
          </div>
        </div>
      </div>
      <ScribbleText header="We blend creative and performance">
        <>
          There aren&apos;t many creative agencies that understand performance
          and performance agencies that understand creative. <br />
          This is where we&apos;re different. <br />
          Whether we&apos;re helping to grow your Social communities, deliver
          performance-driven Paid Media, produce social-first Creative or
          Influencer campaigns - we craft strategies based on your brand,
          business and goals, all backed by data and insight.
        </>
      </ScribbleText>
      <div
        className={`mt-[7.5rem] ${
          theme === "dark" ? "bg-[#05201F]" : "bg-[#FAFAFA]"
        }`}
      >
        <FeatureBox
          href="/our-services"
          display={displaySec}
          classes="px-4 lg:flex-row md:px-8 lg:px-20 py-[5.5rem] md:py-[7.5rem]"
          title="Our approach hinges on outcomes, not just outputs"
          cta="Browse Our Services"
        >
          <>
            Results are our compass, and we&apos;re not here to just tick boxes
            with you; we&apos;re committed to making a real impact on your
            business. <br />
            <br />
            Our focus is sharp, targeting measurable outcomes that matter to
            you. With us, it&apos;s not just about effort; it&apos;s about
            tangible results driving your success. <br />
            The results-driven Social first agency you&apos;ve been looking for.
          </>
        </FeatureBox>
      </div>
      <div className="px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
        <div className="text-center max-w-[50rem] mx-auto mb-16 pt-[6.25rem]">
          <p
            className={`md:text-[2.5rem] text-[1.75rem] font-extrabold mb-6 ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            Meet our team
          </p>
          <p
            className={`md:text-lg text-base leading-[1.8rem] 
          ${theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"}
          `}
          >
            Say hello to agile marketing, from strategic thinking to execution,
            planning to production, we are experts in taking compelling ideas
            and turning them into a reality for your audience.
          </p>
        </div>
        <div className="flex md:flex-row scrollbar flex-col md:w-auto mx-auto items-center justify-between gap-6 md:gap-8 overflow-auto">
          <TeamMember
            display={arti}
            name="Arti Weng Tzu-ting"
            role="Director of People"
          />
          <TeamMember
            display={bertha}
            name="Bertha-Bella Agoha"
            role="Head of Content"
          />
          <TeamMember
            display={deji}
            name="Deji Aribs"
            role="Director of Campaigns"
          />
          <TeamMember
            display={tomiwa}
            name="Tomiwa Aghedo"
            role="Director of Business"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHomePage;
