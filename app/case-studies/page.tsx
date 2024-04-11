import InsightBox from "./insight-box";
import displayTruecaller from "@/public/display-img-truecaller.jpg";
import displayBetking from "@/public/display-img-betking.jpg";
import displayOppo from "@/public/display-img-oppo.jpg";

import { Metadata } from "next";
import Insight from "./insight";

export const metadata: Metadata = {
  title: "Switch Online - Case Studies",
};

const CaseStudies = () => {
  return (
    <>
      <div className="lg:mt-[6.25rem] mt-10 mb-6 max-w-[50rem] flex flex-col gap-6">
        <p className="text-[#082828] md:text-base text-sm font-semibold">
          CASE STUDIES
        </p>
        <h1 className="md:text-5xl text-[2.5rem] font-extrabold">
          We work with brands across multiple industries and verticals
        </h1>
        <p className="md:text-2xl text-[#506363]">
          We specialize in Social, Paid, Creative, Influencer and Strategy and
          work with fast-growth brands.
        </p>
      </div>
      <InsightBox
        className="flex-col-reverse lg:flex-row"
        href="/case-studies/truecaller"
        title="TrueCaller"
        src={displayTruecaller}
        insights={
          <>
            <Insight>192K App Installs</Insight>
            <Insight>275 million Impressions</Insight>
            <Insight>4M Video views</Insight>
          </>
        }
      >
        <>
          Our Influencer Marketing team was responsible for sourcing, outreach,
          briefing, influencer management, content review, post-production,
          monitoring content, and reporting to ensure we delivered an end-to-end
          campaign.
        </>
      </InsightBox>
      <InsightBox
        className="lg:flex-row-reverse flex-col-reverse"
        href="/case-studies/betking"
        title="BetKing"
        src={displayBetking}
        insights={
          <>
            <Insight>7,225 Backlinks</Insight>
            <Insight>Domain authority score of 50</Insight>
          </>
        }
      >
        <>
          We prioritized a content marketing approach and created high-quality
          content for our brand, focusing on match previews and game
          predictions. We engaged key opinion leaders who are also sport
          journalists to blog across high-traffic platforms with Domain
          Authority above 40.
        </>
      </InsightBox>
      <InsightBox
        className="pb-[7.5rem] flex-col-reverse lg:flex-row"
        href="/case-studies/oppo"
        title="Duo Libra - OPPO"
        src={displayOppo}
        insights={
          <>
            <Insight>5K Pre-order</Insight>
            <Insight>130M Total Impressions</Insight>
            <Insight>32K Mentions</Insight>
          </>
        }
      >
        <>
          We recruited 2 Micro Influencers and fostered UGC content with tweets
          asking our audience to share the most interesting grass to grace story
          they ever heard of using the hashtag #LevelUp2023.
        </>
      </InsightBox>
    </>
  );
};

export default CaseStudies;
