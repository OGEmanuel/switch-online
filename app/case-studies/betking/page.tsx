import Image from "next/image";
import InsightBox from "../insight-box";
import displaySub from "@/public/display-img-betking-sub.jpg";
import displayMain from "@/public/display-img-betking-main.jpg";
import betking from "@/public/betking-logo.svg";
import CaseStudyHeader from "../case-study-header";
import ClientDetails from "../client-details";
import CaseStudyInsight from "../case-study-insight";
import displayBetking from "@/public/display-img-betking.jpg";

const goals = [
  { id: "1", goal: "Get 3,000 backlinks" },
  {
    id: "2",
    goal: "Grow Domain Authority to 40",
  },
];

const Betking = () => {
  return (
    <section className="">
      <CaseStudyHeader
        logo={betking}
        title="Boosted Backlinks by 250% and Raised Domain Authority to 50 for Real
        Money Gaming Brand"
        tag1="Blog Posting"
        tag2="Influencer Marketing"
      />
      <ClientDetails
        name="Kingmakers (BetKing)"
        year={"2023"}
        industry="Gambling"
        summary="Kingmakers is one of the leading Sports and Digital Entertainment
        platforms in Africa. Using innovative technology, delivered through
        online and agency platforms, Kingmakers brings fans and communities
        closer to the sports and games they love."
        goals={goals}
      />
      <div className="mb-10 md:block hidden">
        <Image src={displayMain} alt="main display" placeholder="blur" />
      </div>
      <div className="mb-10 md:hidden">
        <Image src={displayBetking} alt="main display" placeholder="blur" />
      </div>
      <InsightBox
        className="lg:flex-row-reverse flex-col-reverse mb-4 md:justify-center"
        title="What we did"
        src={displaySub}
      >
        <>
          We prioritized a content marketing approach and created high-quality
          content for our brand, focusing on match previews and game
          predictions. We engaged key opinion leaders who are also sport
          journalists to blog across high-traffic platforms with Domain
          Authority above 40. Additionally, we employed micro influencers to
          promote all published content on social media.  This approach allowed
          us to leverage their authority and reach, increasing the visibility
          and credibility of our content while driving targeted traffic and
          fostering engagement among our audience.
        </>
      </InsightBox>
      <CaseStudyInsight
        promotion={{ insight: "Backlinks", metric: "7,225" }}
        percent={{ insight: "Domain authority score of 50", metric: "50" }}
      />
    </section>
  );
};

export default Betking;
