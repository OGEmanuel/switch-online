import InfluencerIcon from "@/public/icons/influencer-icon";
import Services from "@/components/services";
import ScrollFix from "@/app/scroll-fix";
import DisplayWithBolt from "@/components/display-with-bolt";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-influencer.jpg";

const Influencer = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-20 flex-wrap xl:flex-nowrap flex gap-8 pt-10">
        <div className="flex flex-col gap-6 w-max mx-auto">
          <div className="flex gap-6 items-center w-max mx-auto">
            <InfluencerIcon />
            <p className="text-3xl md:text-5xl font-extrabold">Influencer</p>
          </div>
          <p className="md:text-2xl text-lg text-[#082828] max-w-[47.5rem] text-center leading-[2.4rem]">
            We create influential campaigns to boost brand awareness and drive
            action through creativity and influence.
          </p>
        </div>
      </div>
      <ScrollFix
        className="max-w-[35rem]"
        left={<DisplayWithBolt display={display} />}
        right={
          <div className="flex flex-col gap-[2rem] md:gap-[5.5rem]">
            <ServiceDetailsCard
              title="Human-Centered Influencer Strategy"
              description=" We prioritize human intuition over algorithms. Our approach begins with genuine human interaction and thorough research to find the perfect influencers for your brand. While we use technology to validate insights, our meticulous planning ensures we match you with influencers who resonate with your audience and optimize your budget."
            />
            <ServiceDetailsCard
              title="Seamless Campaign Management"
              description="From start to finish, we manage your influencer campaign with precision. Our comprehensive services include strategic planning, research, outreach, approvals, payments, and analysis. Whether hands-on or hands-off, our adaptable approach meets your unique needs with professionalism."
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

export default Influencer;
