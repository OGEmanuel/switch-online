import Image from "next/image";
import InsightBox from "../insight-box";
import CaseStudyInsight from "./case-study-insight";
import ScribbleText from "@/components/scribble-text";
import display from "@/public/display-img-med.jpg";

const StudyOne = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20">
      <div className="md:pt-16 pt-10 max-w-[49.5625rem] mx-auto text-center flex flex-col gap-6 mb-20">
        <p className="text-[#082828] text-sm md:text-base font-semibold">
          TRUECALLER
        </p>
        <h1 className="md:text-5xl text-[2.5rem] font-extrabold">
          10Xed the wave on top social platforms
        </h1>
        <div className="md:text-lg text-base font-medium flex gap-4 w-max mx-auto">
          <p className="text-[#9747FF] bg-[#F5EDFF] py-[10px] px-6 rounded-[2.125rem]">
            Creative
          </p>
          <p className="text-[#C026D3] bg-[#F9EAFB] py-[10px] px-6 rounded-[2.125rem]">
            Social
          </p>
        </div>
      </div>
      <InsightBox
        className="md:flex-row flex-col-reverse mb-4 md:justify-center"
        title="The Client"
        src={display}
      >
        <>
          Goal was to raise awareness of Truecaller&apos;s services among
          Nigerian consumers, emphasising its value proposition and unique
          features.Goal was to raise awareness of Truecaller&apos;s services
          among Nigerian consumers, emphasising its value proposition and unique
          features.Goal was to raise awareness of Truecaller&apos;s services
          among Nigerian consumers, emphasising its value proposition and unique
          features.
        </>
      </InsightBox>
      <InsightBox
        className="md:flex-row-reverse flex-col-reverse mb-4 md:justify-center"
        title="What we did"
        src={display}
      >
        <>
          Goal was to raise awareness of Truecaller&apos;s services among
          Nigerian consumers, emphasising its value proposition and unique
          features.Goal was to raise awareness of Truecaller&apos;s services
          among Nigerian consumers, emphasising its value proposition and unique
          features.Goal was to raise awareness of Truecaller&apos;s services
          among Nigerian consumers, emphasising its value proposition and unique
          features.
        </>
      </InsightBox>
      <CaseStudyInsight />
      <div className="mb-[7.5rem]">
        <ScribbleText header="“Super proud of the outcome and the team that worked on this”">
          <>
            Whether we&apos;re helping to grow your Social communities, deliver
            performance-driven Paid Media, produce social-first Creative or
            Influencer campaigns - we craft strategies based on your brand,
            business and goals, all backed by data and insight.
          </>
        </ScribbleText>
        <div className="mt-8 w-max mx-auto text-center flex flex-col gap-4">
          <div className="w-max mx-auto">
            <Image src={"/user-photo.jpg"} alt="user" width={64} height={64} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#082828] text-xl font-semibold">
              Adewale Omobanle
            </p>
            <p className="text-[#506363]">
              Head of Sales at{" "}
              <span className="font-bold text-[#082828]">Truecaller</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyOne;
