import StrategyIcon from "@/public/icons/strategy-icon";
import display from "@/public/display-img-strategy.jpg";
import ServiceDetailsCard from "../service-details-card";
import ScrollFixServices from "../scroll-fix-services";

const Strategy = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-20 flex-wrap xl:flex-nowrap flex gap-8 pt-10">
        <div className="flex flex-col gap-6 w-max mx-auto">
          <div className="flex gap-6 items-center w-max mx-auto">
            <StrategyIcon />
            <p className="text-3xl md:text-5xl font-extrabold">Strategy</p>
          </div>
          <p className="md:text-2xl text-lg text-[#082828] max-w-[47.5rem] text-center leading-[2.4rem]">
            We are not just strategic, our approach ensures that your sales and
            marketing deliver revenue growth.
          </p>
        </div>
      </div>
      <ScrollFixServices display={display}>
        <ServiceDetailsCard
          title="Holistic Revenue-Driven Approach"
          description="We integrate sales and marketing efforts for holistic revenue growth. Our strategies attract, engage, and nurture prospects, maximizing opportunities and delivering tangible bottom-line results."
        />
        <ServiceDetailsCard
          title="Data-Driven Insights and Analysis"
          description="We use advanced analytics and market intelligence to deeply understand your audience, industry trends, and competition. This drives targeted demand generation strategies for measurable results, from lead identification to optimized conversion rates."
        />
        <ServiceDetailsCard
          title="Agile and Adaptive Execution"
          description="In a fast-paced business world, agility is crucial. We constantly monitor, analyze, and refine strategies for maximum effectiveness. Whether adjusting messaging, optimizing ad spend, or exploring new tactics, our agile approach ensures dynamic demand generation aligned with your revenue goals."
        />
      </ScrollFixServices>
    </section>
  );
};

export default Strategy;
