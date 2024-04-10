import HomeContentIcon from "@/public/icons/home-content-icon";
import HomeCreativeIcon from "@/public/icons/home-creative-icon";
import HomeInfluencerIcon from "@/public/icons/home-influencer-icon";
import HomeMarketingIcon from "@/public/icons/home-marketing-icon";
import HomeMediaIcon from "@/public/icons/home-media-icon";
import HomePerformanceIcon from "@/public/icons/home-performance-icon";
import HomeSocialIcon from "@/public/icons/home-social-icon";
import HomeStrategyIcon from "@/public/icons/home-strategy-icon";
import display from "@/public/display-img-home-2.jpg";
import DisplayWithBolt from "@/components/display-with-bolt";

const FeatureBoxSec = () => {
  return (
    <div className="flex bg-white justify-between lg:gap-10 gap-4 lg:pt-[10.25rem] pt-[4.625rem] flex-col-reverse lg:flex-row items-center pb-[7.5rem]">
      <div className="xl:max-w-[41rem] md:max-w-[35rem] lg:max-w-[30rem] max-w-[30rem] flex flex-col gap-8 md:gap-10 2xl:gap-20">
        <div className="flex flex-col gap-3 2xl:gap-6">
          <p className="font-extrabold lg:text-[1.75rem] text-[1.75rem] md:text-[2rem] xl:text-[2.5rem] 2xl:leading-[3rem]">
            Result-Focused Strategies
          </p>
          <p className="text-base 2xl:text-lg text-[#506363]">
            Our approach hinges on outcomes, not just outputs. We&apos;re not
            here to merely tick boxes, we&apos;re here to make a real impact on
            your business. With a sharp focus on measurable outcomes, we ensure
            tangible results that drive your success. It&apos;s not just about
            effort; it&apos;s about delivering results that matter to you.
          </p>
        </div>
        <div className="flex flex-col gap-6 2xl:gap-10">
          <div className="flex items-center gap-4">
            <p className="text-[#082828] font-semibold text-base md:text-xl">
              Our Comprehensive Offerings
            </p>
            <hr className="border border-dashed border-[#CECECE] h-[1px] flex-grow" />
          </div>
          <div className="flex gap-5 2xl:gap-10 flex-wrap text-[#082828] text-base 2xl:text-xl">
            <div className="flex items-center gap-2">
              <HomeStrategyIcon />
              <p>Strategy</p>
            </div>
            <div className="flex items-center gap-2">
              <HomeSocialIcon />
              <p>Social</p>
            </div>
            <div className="flex items-center gap-2">
              <HomeMarketingIcon />
              <p>Marketing</p>
            </div>
            <div className="flex items-center gap-2">
              <HomeInfluencerIcon />
              <p>Influencer</p>
            </div>
            <div className="flex items-center gap-2">
              <HomeCreativeIcon />
              <p>Creative</p>
            </div>
            <div className="flex items-center gap-2">
              <HomePerformanceIcon />
              <p>Performance</p>
            </div>
            <div className="flex items-center gap-2">
              <HomeContentIcon />
              <p>Content</p>
            </div>
            <div className="flex items-center gap-2">
              <HomeMediaIcon />
              <p>Media</p>
            </div>
          </div>
        </div>
      </div>
      <DisplayWithBolt display={display} />
    </div>
  );
};

export default FeatureBoxSec;
