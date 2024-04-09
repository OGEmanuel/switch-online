import Image from "next/image";
import InsightBox from "../insight-box";
import CaseStudyInsight from "./case-study-insight";
import displaySub from "@/public/display-img-oppo-sub.jpg";
import displayMain from "@/public/display-img-oppo-main.jpg";
import oppo from "@/public/oppo-logo.svg";

const Oppo = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20">
      <div className="md:pt-16 pt-10 max-w-[49.5625rem] mx-auto text-center flex flex-col gap-6 mb-20">
        <div className="w-max mx-auto">
          <Image src={oppo} alt="oppo" />
        </div>
        <h1 className="md:text-5xl text-[2.5rem] leading-[3.6rem] font-extrabold">
          Delivered 5K preorders & 106M Impressions for smartphone brand
        </h1>
        <div className="md:text-lg text-base font-medium flex gap-4 w-max mx-auto">
          <p className="text-[#C026D3] bg-[#F9EAFB] py-[10px] px-6 rounded-[2.125rem]">
            Influencer Marketing
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mb-16 gap-4">
        <div>
          <p className="text-[2.5rem] font-semibold">
            Client:{" "}
            <span className="font-extrabold block 2xl:inline">
              OPPO (Duo Libra)
            </span>
          </p>
          <p className="text-[2.5rem] font-semibold">
            Year: <span className="font-extrabold">2023</span>
          </p>
          <p className="text-[2.5rem] font-semibold">
            Industry: <span className="font-extrabold">Electronics</span>
          </p>
        </div>
        <div className="text-lg max-w-[38rem]">
          <p className="text-[#506363]">
            OPPO is a consumer electronics and mobile communications company
            known for manufacturing smartphones, Blu-ray players, and other
            electronic devices. It was founded in 2001 and has since become one
            of the largest smartphone manufacturers in the world. OPPO is
            recognized for its innovative technology, sleek design, and focus on
            camera quality in its smartphones.
          </p>
          <div className="mt-6">
            <p className="font-medium">Client Goals:</p>
            <p>Foster 5,000 pre-orders of the OPPO Reno 8.</p>
            <p>Generate brand awareness to reach 3M people.</p>
            <p>
              Create compelling stories around the brand&apos;s key message
              &apos;Level Up&apos;.
            </p>
            <p>
              Ensure the campaign&apos;s hashtag &apos;Level Up&apos; trends 10
              times.
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
          We recruited 2 Micro Influencers and fostered UGC content with tweets
          asking our audience to share the most interesting grass to grace story
          they ever heard of using the hashtag #LevelUp2023. Additionally, we
          engaged 150 nano influencers who had over 3,000 followers to amplify
          and share their own stories. Furthermore, we created content themes
          for the nano influencers to promote the features of the phone,
          incorporating a call-to-action to pre-order.
        </>
      </InsightBox>
      <CaseStudyInsight />
    </section>
  );
};

export default Oppo;
