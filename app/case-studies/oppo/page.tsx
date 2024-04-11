import Image from "next/image";
import InsightBox from "../insight-box";
import displaySub from "@/public/display-img-oppo-sub.jpg";
import displayMain from "@/public/display-img-oppo-main.jpg";
import oppo from "@/public/oppo-logo.svg";
import CaseStudyHeader from "../case-study-header";
import ClientDetails from "../client-details";
import CaseStudyInsight from "../case-study-insight";

const goals = [
  { id: "1", goal: "Foster 5,000 pre-orders of the OPPO Reno 8." },
  {
    id: "2",
    goal: "Generate brand awareness to reach 3M people.",
  },
  {
    id: "3",
    goal: "Create compelling stories around the brand's key message 'Level Up'.",
  },
  {
    id: "4",
    goal: "Ensure the campaign's hashtag 'Level Up' trends 10 times.",
  },
];

const Oppo = () => {
  return (
    <section className="">
      <CaseStudyHeader
        logo={oppo}
        title="Delivered 5K preorders & 106M Impressions for smartphone brand"
        tag2="Influencer Marketing"
      />
      <ClientDetails
        name="OPPO (Duo Libra)"
        year={"2023"}
        industry="Electronics"
        summary="OPPO is a consumer electronics and mobile communications company
        known for manufacturing smartphones, Blu-ray players, and other
        electronic devices. It was founded in 2001 and has since become one
        of the largest smartphone manufacturers in the world. OPPO is
        recognized for its innovative technology, sleek design, and focus on
        camera quality in its smartphones."
        goals={goals}
      />
      <div className="mb-10">
        <Image src={displayMain} alt="main display" placeholder="blur" />
      </div>
      <InsightBox
        className="lg:flex-row-reverse flex-col-reverse mb-4 md:justify-center"
        title="What we did"
        src={displaySub}
      >
        <>
          We recruited 2 Micro Influencers and fostered UGC content with tweets
          asking our audience to share the most interesting grass to grace story
          they ever heard of using the hashtag #LevelUp2023. Additionally, we
          engaged 150 nano influencers who had over 3,000 followers to amplify
          and share their own stories. Furthermore, we created content themes
          for the nano influencers to promote the features of the phone,
          incorporating a call-to-action to pre-order.
        </>
      </InsightBox>
      <CaseStudyInsight
        social={{ insight: "Pre-orders", metric: "5K" }}
        promotion={{ insight: "Total Impressions", metric: "130M" }}
        percent={{ insight: "Mentions", metric: "32K" }}
      />
    </section>
  );
};

export default Oppo;
