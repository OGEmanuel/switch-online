import ScribbleText from "@/components/scribble-text";
import Image from "next/image";
import FeatureBox from "@/components/feature-box";
import display from "@/public/display-img-about-1.jpg";
import displaySec from "@/public/display-img-about-2.jpg";
import { Metadata } from "next";
import Header from "./header";

export const metadata: Metadata = {
  title: "Switch Online - About Us",
};

const AboutUs = () => {
  return (
    <section className="pt-4 lg:pt-[4.5rem]">
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-7 w-full mb-8 md:mb-16 px-4 md:px-8 lg:px-20 mx-auto max-w-[1440px]">
        <Header />
        <div className="md:text-lg flex-grow">
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
      <div className="px-4 md:px-8 lg:px-20 mb-[5.5rem] md:mb-[7.5rem] z-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex justify-center">
            <Image src={display} alt="display" placeholder="blur" />
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
      <div className="bg-[#FAFAFA] mt-[7.5rem]">
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
    </section>
  );
};

export default AboutUs;
