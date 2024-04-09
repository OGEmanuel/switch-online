import FeatureBox from "@/components/feature-box";
import CtaRightArrow from "@/components/ui/cta-right-arrow";
import BarIcon from "@/public/icons/bar-icon";
import StrategyIcon from "@/public/icons/strategy-icon";
import OtherServices from "../other-services";
import MediaIcon from "@/public/icons/media-icon";
import Services from "@/components/services";
import ScrollFix from "@/app/scroll-fix";
import DisplayWithBolt from "@/components/display-with-bolt";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-ooh.jpg";

const Media = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-20 flex-wrap xl:flex-nowrap flex gap-8 pt-10">
        <div className="flex flex-col gap-6 w-max mx-auto">
          <div className="flex gap-6 items-center w-max mx-auto">
            <MediaIcon />
            <p className="text-3xl md:text-5xl font-extrabold">OOH</p>
          </div>
          <p className="md:text-2xl text-lg text-[#082828] max-w-[47.5rem] text-center leading-[2.4rem]">
            We&apos;re great at media planning, buying, and monitoring, where
            precision meets innovation to shape impactful Out-of-Home (OOH)
            campaigns
          </p>
        </div>
      </div>
      <ScrollFix
        className="max-w-[35rem]"
        left={<DisplayWithBolt display={display} />}
        right={
          <div className="flex flex-col gap-[2rem] md:gap-[5.5rem]">
            <ServiceDetailsCard
              title="Strategic Media Planning"
              description="We specialize in strategic media plans to spotlight your brand to your target audience. Through careful analysis of demographics and consumer behavior, we identify ideal OOH placements for maximum exposure and engagement. From towering billboards to digital displays, we ensure your message reaches the right audience at the right time."
            />
            <ServiceDetailsCard
              title="Comprehensive Monitoring and Analysis"
              description="We don't stop at ad placement. We provide real-time monitoring and analysis for your OOH campaigns. Using advanced analytics, we optimize your strategy, ensuring measurable results."
            />
            <ServiceDetailsCard
              title="Empowering Creators for Authentic Content"
              description="Beyond influencers, we've curated a diverse pool of creators skilled in crafting authentic, platform-specific content. Leveraging their talent, we generate tailored user-generated content (UGC), boosting your brand presence across channels. Goodbye cookie-cutter, hello authentic storytelling."
            />
          </div>
        }
      />
      <div className="md:mb-0 mb-32">
        <Services
          title="Our Services"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massami. Aliquam in hendrerit urna"
        />
      </div>
    </section>
  );
};

export default Media;
