import ScribbleText from "@/components/scribble-text";
import Image from "next/image";
import TeamMember from "./team-member";
import FeatureBox from "@/components/feature-box";
import display from "@/public/display-img-about-1.jpg";
import displaySec from "@/public/display-img-about-2.jpg";
import displayMed from "@/public/display-img-about-1-med.jpg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Switch Online - About Us",
};

const AboutUs = () => {
  return (
    <section className="pt-4 lg:pt-[4.5rem] pb-[6.25rem]">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-7 w-full mb-8 md:mb-16 px-4 md:px-8 lg:px-20">
        <div className="text-black font-extrabold text-[2.5rem] xl:text-[3.2rem] 2xl:text-7xl w-max md:leading-[5.5rem]">
          <p>
            Be <span className="text-[#1E9B97]">Seen.</span>
          </p>
          <p>
            Be <span className="text-[#48B3B8]">Heard.</span>
          </p>
          <p>
            Be <span className="text-[#5AE0E6]">Unforgettable.</span>
          </p>
        </div>
        <div className="max-w-[38.375rem] md:text-lg">
          <p className="text-[#082828] font-semibold mb-4">ABOUT US</p>
          <p className="text-[#506363] leading-9">
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
        <div className="md:block hidden">
          <Image
            src={display}
            alt="display"
            width={1280}
            height={560}
            placeholder="blur"
          />
        </div>
        <div className="md:hidden w-max mx-auto">
          <Image
            src={displayMed}
            alt="display"
            width={358}
            height={358}
            placeholder="blur"
          />
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
      <FeatureBox
        href="/our-services"
        display={displaySec}
        classes="bg-[#FAFAFA] px-4 lg:flex-row md:px-8 lg:px-20 py-[5.5rem] md:py-[7.5rem]"
        title="Our approach hinges on outcomes, not just outputs"
        cta="Browse Our Services"
      >
        <>
          Results are our compass, and we&apos;re not here to just tick boxes
          with you; we&apos;re committed to making a real impact on your
          business. <br />
          <br />
          Our focus is sharp, targeting measurable outcomes that matter to you.
          With us, it&apos;s not just about effort; it&apos;s about tangible
          results driving your success. <br />
          The results-driven Social first agency you&apos;ve been looking for.
        </>
      </FeatureBox>
      <div className="md:py-[6.25rem] py-16 px-4 md:px-8 lg:px-20">
        <div className="text-center max-w-[50rem] mx-auto mb-16">
          <p className="md:text-[2.5rem] text-[1.75rem] font-extrabold mb-6">
            Meet our team
          </p>
          <p className="md:text-lg text-base text-[#506363] leading-[1.8rem]">
            Say hello to agile marketing, from strategic thinking to execution,
            planning to production, we are experts in taking compelling ideas
            and turning them into a reality for your audience.
          </p>
        </div>
        <div className="flex md:flex-row scrollbar flex-col md:w-auto mx-auto items-center justify-between gap-6 md:gap-8 overflow-auto">
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
