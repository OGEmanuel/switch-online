import ContentIcon from "@/public/icons/content-icon";
import Services from "@/components/services";
import ScrollFix from "@/app/scroll-fix";
import DisplayWithBolt from "@/components/display-with-bolt";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-content.jpg";

const Strategy = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-20 flex-wrap xl:flex-nowrap flex gap-8 pt-10">
        <div className="flex flex-col gap-6 w-max mx-auto">
          <div className="flex gap-6 items-center w-max mx-auto">
            <ContentIcon />
            <p className="text-3xl md:text-5xl font-extrabold">Content</p>
          </div>
          <p className="md:text-2xl text-lg text-[#082828] max-w-[47.5rem] text-center leading-[2.4rem]">
            Storytelling is at the heart of everything we do.. We believe that
            behind every successful brand is a compelling story waiting to be
            told.
          </p>
        </div>
      </div>
      <ScrollFix
        className="max-w-[35rem]"
        left={<DisplayWithBolt display={display} />}
        right={
          <div className="flex flex-col gap-[2rem] md:gap-[5.5rem]">
            <ServiceDetailsCard
              title="Immersive Storytelling Experiences"
              description="At our core, we're storytellers who understand the power of narrative. In every piece of content - be it a blog post, social media campaign, or video production - we craft immersive storytelling experiences. From the hero's journey to testimonials, we use storytelling techniques to create authentic connections and drive meaningful engagement."
            />
            <ServiceDetailsCard
              title="Brand Narrative Development"
              description="Your brand is more than just a logo; it's a living story. We collaborate with you to uncover its essence, identify key narratives, and develop a cohesive storytelling strategy. From showcasing your origin to sharing customer success stories, we craft narratives that capture your essence and resonate with your audience."
            />
            <ServiceDetailsCard
              title="Story-driven Content Marketing"
              description="Storytelling extends beyond content creation, influencing our entire marketing strategy. We use storytelling principles to guide content distribution, audience targeting, and engagement tactics, ensuring your brand narrative is always prominent. Through various channels like blogs, social media, emails, and videos, we build trust, foster connections, and drive action."
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

export default Strategy;
