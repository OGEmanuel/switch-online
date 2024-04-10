import CreativeIcon from "@/public/icons/creative-icon";
import Services from "@/components/services";
import ScrollFix from "@/app/scroll-fix";
import DisplayWithBolt from "@/components/display-with-bolt";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-influencer.jpg";

const Creative = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-20 flex-wrap xl:flex-nowrap flex gap-8 pt-10">
        <div className="flex flex-col gap-6 w-max mx-auto">
          <div className="flex gap-6 items-center w-max mx-auto">
            <CreativeIcon />
            <p className="text-3xl md:text-5xl font-extrabold">Creative</p>
          </div>
          <p className="md:text-2xl text-lg text-[#082828] max-w-[47.5rem] text-center leading-[2.4rem]">
            Explore our Creative services, where strategy and imagination
            enhance your brand. We craft assets for Organic and Performance
            goals.
          </p>
        </div>
      </div>
      <ScrollFix
        className="max-w-[35rem]"
        left={<DisplayWithBolt display={display} />}
        right={
          <div className="flex flex-col gap-[2rem] md:gap-[5.5rem]">
            <ServiceDetailsCard
              title="Specialists in Social Creativity"
              description="We specialize in social creativity, crafting content tailored to captivate your audience on their favorite platforms. Our dedicated team ensures each piece resonates with algorithms and audience intentions. Say goodbye to generic campaigns, hello to content that speaks the language of social media."
            />
            <ServiceDetailsCard
              title="From Strategy to Spectacle"
              description="Our diverse dream team spans strategic masterminds to visionary creators, crafting compelling campaigns and captivating content across platforms. From mesmerizing TikToks to scroll-stopping feed posts, our crew of experts knows the digital landscape inside out. See our standout work below and witness the magic."
            />
            <ServiceDetailsCard
              title="Always-On Innovation"
              description="Whether for ongoing content production or your next big campaign, we're your reliable creative partner. Our flexible approach adapts to your unique needs, delivering captivating content that resonates with your audience. Let's turn your vision into a digital masterpiece, together."
            />
          </div>
        }
      />
      <div className="md:mb-0 mb-32 md:mt-20">
        <Services
          title="Our Services"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massami. Aliquam in hendrerit urna"
        />
      </div>
    </section>
  );
};

export default Creative;
