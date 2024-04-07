import FeatureBox from "@/components/feature-box";
import CtaRightArrow from "@/components/ui/cta-right-arrow";
import BarIcon from "@/public/icons/bar-icon";
import StrategyIcon from "@/public/icons/strategy-icon";
import OtherServices from "../other-services";
import MediaIcon from "@/public/icons/media-icon";
import Services from "@/components/services";

const Media = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-20 flex-wrap xl:flex-nowrap flex gap-16 pt-10 md:pt-[5.9rem]">
        <div className="flex flex-col gap-6">
        <div className="flex gap-6 items-center">
            <MediaIcon />
            <p className="text-3xl md:text-5xl font-extrabold">Media</p>
          </div>
          <p className="md:text-2xl text-lg text-[#082828] xl:w-[38rem] leading-[2.4rem]">
            We specialize in Social, Paid, Creative, Influencer and Strategy and
            work with fast-growth brands.
          </p>
          <CtaRightArrow width="w-[10.875rem]" cta="Get in touch" />
        </div>
        <p className="md:text-2xl text-lg text-[#506363] leading-[2.4rem]">
          There aren&apos;t many creative agencies that understand performance
          and performance agencies that understand creative. <br />
          This is where we&apos;re different. <br />
          Whether we&apos;re helping to grow your Social communities, deliver
          performance-driven Paid Media, produce social-first Creative or
          Influencer campaigns - we craft strategies based on your brand,
          business and goals, all backed by data and insight.
        </p>
      </div>
      <FeatureBox
        classes="px-4 md:px-20"
        cta="Get in touch"
        title="We grow ambitious brands with Social, Paid, Creative and Influencer"
      >
        <>
          we&apos;re more than just another marketing agency. Our passion lies
          in delving deep into your business, ensuring your brand is not just
          visible but captivating, your voice not just heard but resonating, and
          your impact not just momentary but unforgettable.
        </>
      </FeatureBox>
      <FeatureBox
        classes="flex flex-row-reverse px-4 md:px-20 pb-[7.5rem]"
        cta="Get in touch"
        title="We grow ambitious brands with Social, Paid, Creative and Influencer"
      >
        <>
          we&apos;re more than just another marketing agency. Our passion lies
          in delving deep into your business, ensuring your brand is not just
          visible but captivating, your voice not just heard but resonating, and
          your impact not just momentary but unforgettable.
        </>
      </FeatureBox>
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
