import Image from "next/image";
import InsightBox from "../insight-box";
import CaseStudyInsight from "./case-study-insight";
import displaySub from "@/public/display-img-truecaller-sub.jpg";
import displayMain from "@/public/display-img-truecaller-main.jpg";
import truecaller from "@/public/truecaller-logo.svg";

const Truecaller = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20">
      <div className="md:pt-16 pt-10 max-w-[49.5625rem] mx-auto text-center flex flex-col gap-6 mb-20">
        <div className="w-max mx-auto">
          <Image src={truecaller} alt="truecaller" />
        </div>
        <h1 className="md:text-5xl text-[2.5rem] leading-[3.6rem] font-extrabold">
          Influencer Campaign for Truecaller Generated 192K App Installs
        </h1>
        <div className="md:text-lg text-base font-medium flex gap-4 w-max mx-auto">
          <p className="text-[#9747FF] bg-[#F5EDFF] py-[10px] px-6 rounded-[2.125rem]">
            Influencer Marketing
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-16 flex-wrap gap-4">
        <div>
          <p className="text-[2.5rem] font-semibold">
            Client: <span className="font-extrabold">Truecaller</span>
          </p>
          <p className="text-[2.5rem] font-semibold">
            Year: <span className="font-extrabold">2023-2024</span>
          </p>
          <p className="text-[2.5rem] font-semibold">
            Industry: <span className="font-extrabold">Software</span>
          </p>
        </div>
        <div className="text-lg max-w-[38rem]">
          <p className="text-[#506363]">
            Trusted and used by over 374 million people worldwide, Truecaller is
            a free smartphone application that identifies calls and SMS, enables
            real-time spam reporting and blocking, offers accurate and swift
            protection from scams, telemarketers, and fraud, and provides users
            with more efficient messaging capabilities and more!
          </p>
          <div className="mt-6">
            <p className="font-medium">Client Goals:</p>
            <p>100k installs</p>
            <p>
              Generate brand awareness and drive consideration for Truecaller
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <Image src={displayMain} alt="main display" placeholder="blur" />
      </div>
      <InsightBox
        className="lg:flex-row-reverse flex-col-reverse mb-4 md:justify-center"
        title="What we did"
        src={displaySub}
      >
        <>
          Our Influencer Marketing team was responsible for sourcing, outreach,
          briefing, influencer management, content review, post-production,
          monitoring content, and reporting to ensure we delivered an end-to-end
          campaign. Prior to sourcing, we segmented our search into two core
          influencer tiers: Nano influencers to drive talkability, incorporate
          the brand&apos;s value propositions, and amplify content created by
          Macro influencers; and Macro influencers (skit makers) to create
          relatable content showcasing the product in use and establishing the
          brand&apos;s key message. Additionally, we launched a seasonality
          campaign (Truecaller Santa) aimed at rewarding new sign-ups with
          mobile data, fostering engagement, advocacy, and conversion.
          Throughout the campaign, we strategically engaged micro influencers to
          ensure they were actively connecting with the brand and its core
          values, thereby adding significant value for the brand.
        </>
      </InsightBox>
      <CaseStudyInsight />
    </section>
  );
};

export default Truecaller;
