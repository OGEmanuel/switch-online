import InsightSocialIcon from "@/public/icons/insight-social-icon";
import PercentIcon from "@/public/icons/percent-icon";
import PromotionIcon from "@/public/icons/promotion-icon";

const CaseStudyInsight = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-6 mb-[9.25rem] lg:max-w-none md:max-w-[560px] md:mt-20 mx-auto">
      <div className="bg-[#5AE0E6] shadow-[0px_16px_32px_0px_rgba(90,224,230,0.2)] rounded-3xl p-6 flex flex-col gap-4 w-full">
        <PromotionIcon />
        <p className="font-semibold text-[4rem] lg:text-[2rem] xl:text-[4rem] leading-[4.8rem]">
          7,225
        </p>
        <p className="text-lg">Backlinks</p>
      </div>
      <div className="bg-[#115E5B] text-white rounded-3xl p-6 flex flex-col gap-4 w-full">
        <PercentIcon />
        <p className="font-semibold text-[4rem] lg:text-[2rem] xl:text-[4rem] leading-[4.8rem]">
          50
        </p>
        <p className="text-lg">Domain authority score of 50</p>
      </div>
    </div>
  );
};

export default CaseStudyInsight;
