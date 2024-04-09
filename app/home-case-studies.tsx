import ArrowRightSharpIcon from "@/public/icons/arrow-right-sharp-icon";
import Image, { StaticImageData } from "next/image";
import Insight from "./case-studies/insight";

const HomeCaseStudies = ({
  display,
  description,
}: {
  display: StaticImageData;
  description: string;
}) => {
  return (
    <div className="max-w-[20rem] md:max-w-[28rem] 2xl:max-w-[35rem] rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-6">
        <Image
          src={display}
          alt="display img"
          width={560}
          height={260}
          placeholder="blur"
        />
        <div className="flex justify-between items-center">
          <p className="lg:text-[2rem] text-[1.75rem] leading-[2.4rem] font-extrabold">
            Truecaller
          </p>
          <ArrowRightSharpIcon />
        </div>
        <p className="lg:text-lg text-[#506363] max-h-[3.5rem] overflow-hidden text-ellipsis after:content-['...']">
          {description}
        </p>
        <div className="flex gap-4 flex-wrap pb-[3rem] lg:pb-[6.5rem]">
          <Insight>4 million views</Insight>
          <Insight>2 million engagements</Insight>
          <Insight>Average IG ER 10.75%</Insight>
        </div>
      </div>
    </div>
  );
};

export default HomeCaseStudies;
