import Image from "next/image";
import InsightBox from "../insight-box";
import CaseStudyInsight from "./case-study-insight";
import displaySub from "@/public/display-img-betking-sub.jpg";
import displayMain from "@/public/display-img-betking-main.jpg";
import betking from "@/public/betking-logo.svg";

const Betking = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20">
      <div className="md:pt-16 pt-10 max-w-[49.5625rem] mx-auto text-center flex flex-col gap-6 mb-20">
        <div className="w-max mx-auto">
          <Image src={betking} alt="betking" />
        </div>
        <h1 className="md:text-5xl text-[2rem] leading-[3.6rem] font-extrabold">
          Boosted Backlinks by 250% and Raised Domain Authority to 50 for Real
          Money Gaming Brand
        </h1>
        <div className="md:text-lg text-base font-medium flex gap-4 w-max mx-auto">
          <p className="text-[#9747FF] bg-[#F5EDFF] py-[10px] px-6 rounded-[2.125rem]">
            Blog Posting
          </p>
          <p className="text-[#C026D3] bg-[#F9EAFB] py-[10px] px-6 rounded-[2.125rem]">
            Influencer Marketing
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap xl:flex-nowrap mb-16 gap-4">
        <div className="md:text-[2.5rem] text-[1.75rem]">
          <p className="font-semibold">
            Client:{" "}
            <span className="font-extrabold md:whitespace-nowrap">
              Kingmakers (BetKing)
            </span>
          </p>
          <p className="font-semibold">
            Year: <span className="font-extrabold">2023</span>
          </p>
          <p className="font-semibold">
            Industry: <span className="font-extrabold">Gambling</span>
          </p>
        </div>
        <div className="md:text-lg text-base max-w-[38rem]">
          <p className="text-[#506363]">
            Kingmakers is one of the leading Sports and Digital Entertainment
            platforms in Africa. Using innovative technology, delivered through
            online and agency platforms, Kingmakers brings fans and communities
            closer to the sports and games they love.
          </p>
          <div className="mt-6">
            <p className="font-medium">Client Goals:</p>
            <p>Get 3,000 backlinks</p>
            <p>Grow Domain Authority to 40</p>
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
      <CaseStudyInsight />
    </section>
  );
};

export default Betking;
