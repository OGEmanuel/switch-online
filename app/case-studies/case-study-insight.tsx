import InsightSocialIcon from "@/public/icons/insight-social-icon";
import PercentIcon from "@/public/icons/percent-icon";
import PromotionIcon from "@/public/icons/promotion-icon";

type CaseStudy = { metric: string; insight: string };

type Social = CaseStudy;
type Promotion = CaseStudy;
type Percent = CaseStudy;

const CaseStudyInsight = ({
  social,
  promotion,
  percent,
}: {
  social?: Social;
  promotion?: Promotion;
  percent?: Percent;
}) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-6 mb-[9.25rem] lg:max-w-none md:max-w-[560px] md:mt-20 mx-auto">
      {social && (
        <div className="border border-[#BAD0D0] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)] rounded-3xl p-6 flex flex-col gap-4 w-full">
          <InsightSocialIcon />
          <p className="font-semibold lg:text-[2rem] xl:text-[4rem] text-[4rem] leading-[4.8rem]">
            {social.metric}
          </p>
          <p className="text-lg">{social.insight}</p>
        </div>
      )}
      {promotion && (
        <div className="bg-[#5AE0E6] shadow-[0px_16px_32px_0px_rgba(90,224,230,0.2)] rounded-3xl p-6 flex flex-col gap-4 w-full">
          <PromotionIcon />
          <p className="font-semibold text-[4rem] lg:text-[2rem] xl:text-[4rem] leading-[4.8rem]">
            {promotion.metric}
          </p>
          <p className="text-lg">{promotion.insight}</p>
        </div>
      )}
      {percent && (
        <div className="bg-[#115E5B] text-white rounded-3xl p-6 flex flex-col gap-4 w-full">
          <PercentIcon />
          <p className="font-semibold text-[4rem] lg:text-[2rem] xl:text-[4rem] leading-[4.8rem]">
            {percent.metric}
          </p>
          <p className="text-lg">{percent.insight}</p>
        </div>
      )}
    </div>
  );
};

export default CaseStudyInsight;
