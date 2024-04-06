import FeatureBox from "@/components/feature-box";
import CtaRightArrow from "@/components/ui/cta-right-arrow";
import BarIcon from "@/public/icons/bar-icon";
import StrategyIcon from "@/public/icons/strategy-icon";
import OtherServices from "../other-services";
import PerformanceIcon from "@/public/icons/performance-icon";

const Strategy = () => {
  return (
    <section>
      <div className="px-20 flex gap-16 pt-[5.9rem]">
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <PerformanceIcon />
            <p className="text-5xl font-extrabold">Performance</p>
          </div>
          <p className="text-2xl text-[#082828] w-[38rem] leading-[2.4rem]">
            We specialize in Social, Paid, Creative, Influencer and Strategy and
            work with fast-growth brands.
          </p>
          <CtaRightArrow width="w-[10.875rem]" cta="Get in touch" />
        </div>
        <p className="text-2xl text-[#506363] leading-[2.4rem]">
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
      <div className="bg-[#05201F] py-[7.5rem] mb-[6.25rem]">
        <div className="flex items-center justify-between px-4 md:px-20">
          <div className="flex flex-col gap-6">
            <p className="text-white font-extrabold text-[2.5rem]">
              Other Services
            </p>
            <p className="w-[33.75rem] text-[#BAD0D0]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna
            </p>
          </div>
          <BarIcon />
        </div>
        <div className="pl-4 md:pl-20 overflow-auto scrollbar">
          <div className="flex gap-12 w-max pr-20 pt-16">
            <OtherServices />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
