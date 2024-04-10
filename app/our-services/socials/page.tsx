import ServiceSocialIcon from "@/public/icons/service-social-icon";
import Services from "@/components/services";
import ScrollFix from "@/app/scroll-fix";
import DisplayWithBolt from "@/components/display-with-bolt";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-about-2.jpg";

const Socials = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-20 flex-wrap xl:flex-nowrap flex gap-8 pt-10">
        <div className="flex flex-col gap-6 w-max mx-auto">
          <div className="flex gap-6 items-center w-max mx-auto">
            <ServiceSocialIcon />
            <p className="text-3xl md:text-5xl font-extrabold">Socials</p>
          </div>
          <p className="md:text-2xl text-lg text-[#082828] max-w-[47.5rem] text-center leading-[2.4rem]">
            We grow cult-like communities leveraging platform-specific
            strategies tailored for a world where every like and share counts!
          </p>
        </div>
      </div>
      <ScrollFix
        className="max-w-[35rem]"
        left={<DisplayWithBolt display={display} />}
        right={
          <div className="flex flex-col gap-[2rem] md:gap-[5.5rem]">
            <ServiceDetailsCard
              title="Social-First Strategies"
              description=" In today's world, social media isn't just a tool - it's a way of life. That's why we're all in on social-first strategies. We know where the action is happening, and we make sure your brand is right there in the mix, sparking conversations and building connections that last."
            />
            <ServiceDetailsCard
              title="Platform-Specific Social Content"
              description="Think of us as your personal social stylists. We know that each platform has its own vibe, its own language. So, we tailor our content to fit seamlessly into the feeds of your audience, whether they're scrolling through Instagram, Twitter, or LinkedIn."
            />
            <ServiceDetailsCard
              title="Data-Driven Approach"
              description="Behind every great social campaign is a mountain of data. We're not just guessing what works - we're diving deep into the numbers, analyzing trends, and making strategic decisions based on what we find. It's like having a crystal ball for your social success."
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

export default Socials;
