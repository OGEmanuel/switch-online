import ArrowRightSharpIcon from "@/public/icons/arrow-right-sharp-icon";
import Image from "next/image";
import Insight from "./case-studies/insight";

const HomeCaseStudies = () => {
  return (
    <div className="max-w-[28rem] 2xl:max-w-[35rem] rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-6">
        <Image
          src={"/display-img-home-med.jpg"}
          alt="display img"
          width={560}
          height={260}
        />
        <div className="flex justify-between items-center">
          <p className="text-[2rem] leading-[2.4rem] font-extrabold">
            Truecaller
          </p>
          <ArrowRightSharpIcon />
        </div>
        <p className="text-lg text-[#506363]">
          Goal was to raise awareness of Truecaller&apos;s services among
          Nigerian consumers, emphasising its value proposition and unique
          features.
        </p>
        <div className="flex gap-4 flex-wrap pb-[6.5rem]">
          <Insight>4 million views</Insight>
          <Insight>2 million engagements</Insight>
          <Insight>Average IG ER 10.75%</Insight>
        </div>
      </div>
    </div>
  );
};

export default HomeCaseStudies;
