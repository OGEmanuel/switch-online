import Image from "next/image";
import InsightBox from "../insight-box";
import displaySub from "@/public/display-img-truecaller-sub.jpg";
import displayMain from "@/public/display-img-truecaller-main.jpg";
import truecaller from "@/public/truecaller-logo.svg";
import CaseStudyHeader from "../case-study-header";
import ClientDetails from "../client-details";
import CaseStudyInsight from "../case-study-insight";
import displayTruecaller from "@/public/display-img-truecaller.jpg";

const goals = [
  { id: "1", goal: "100k installs" },
  {
    id: "2",
    goal: "Generate brand awareness and drive consideration for Truecaller",
  },
];

const Truecaller = () => {
  return (
    <section className="">
      <CaseStudyHeader
        logo={truecaller}
        title="Influencer Campaign for Truecaller Generated 192K App Installs"
        tag1="Influencer Marketing"
      />
      <ClientDetails
        name="Truecaller"
        year={"2023-2024"}
        industry="Software"
        summary="Trusted and used by over 374 million people worldwide, Truecaller is
            a free smartphone application that identifies calls and SMS, enables
            real-time spam reporting and blocking, offers accurate and swift
            protection from scams, telemarketers, and fraud, and provides users
            with more efficient messaging capabilities and more!"
        goals={goals}
      />
      <div className="mb-10 md:block hidden">
        <Image
          src={displayMain}
          alt="main display"
          placeholder="blur"
          className="rounded-3xl"
        />
      </div>
      <div className="mb-10 md:hidden">
        <Image
          src={displayTruecaller}
          alt="main display"
          placeholder="blur"
          className="rounded-3xl"
        />
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
          campaign. <br /> <br /> Prior to sourcing, we segmented our search
          into two core influencer tiers: Nano influencers to drive talkability,
          incorporate the brand&apos;s value propositions, and amplify content
          created by Macro influencers; and Macro influencers (skit makers) to
          create relatable content showcasing the product in use and
          establishing the brand&apos;s key message. Additionally, we launched a
          seasonality campaign (Truecaller Santa) aimed at rewarding new
          sign-ups with mobile data, fostering engagement, advocacy, and
          conversion. <br /> <br /> Throughout the campaign, we strategically
          engaged micro influencers to ensure they were actively connecting with
          the brand and its core values, thereby adding significant value for
          the brand.
        </>
      </InsightBox>
      <CaseStudyInsight
        social={{ insight: "App Installs", metric: "192K" }}
        promotion={{ insight: "Total Impressions", metric: "275M" }}
        percent={{ insight: "Video Views", metric: "4K" }}
      />
    </section>
  );
};

export default Truecaller;
