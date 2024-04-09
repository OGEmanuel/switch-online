import PerformanceIcon from "@/public/icons/performance-icon";
import Services from "@/components/services";
import ScrollFix from "@/app/scroll-fix";
import DisplayWithBolt from "@/components/display-with-bolt";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-performance.jpg";

const Performance = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-20 flex-wrap xl:flex-nowrap flex gap-8 pt-10">
        <div className="flex flex-col gap-6 w-max mx-auto">
          <div className="flex gap-6 items-center w-max mx-auto">
            <PerformanceIcon />
            <p className="text-3xl md:text-5xl font-extrabold">Performance</p>
          </div>
          <p className="md:text-2xl text-lg text-[#082828] max-w-[47.5rem] text-center leading-[2.4rem]">
            We master full-funnel Paid Media strategies for scalable brand
            growth, with performance-driven campaigns in Paid Social and Paid
            Search.
          </p>
        </div>
      </div>
      <ScrollFix
        className="max-w-[35rem]"
        left={<DisplayWithBolt display={display} />}
        right={
          <div className="flex flex-col gap-[2rem] md:gap-[5.5rem]">
            <ServiceDetailsCard
              title="Elite Team of Performance Marketers"
              description=" Picture a squad of digital maestros who live and breathe Paid Social and Paid Search. That's us. Whether you're a scaleup, a household name, or a global brand, we've got the chops to scale your ad accounts, drive measurable growth, and craft strategies that make a real impact."
            />
            <ServiceDetailsCard
              title="Future-Proofing Your Brand with Strategic Mastery"
              description="In the ever-evolving landscape of Paid Media, staying ahead is the name of the game. We're not just here to run campaigns; we're your strategic partners, keeping a keen eye on industry shifts, platform updates, and emerging trends. Together, we'll sculpt a Paid Media strategy that not only meets your current needs but also anticipates and adapts to the changes ahead. From campaign management to attribution modeling, we've got you covered every step of the way."
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

export default Performance;
