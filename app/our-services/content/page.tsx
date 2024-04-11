import ContentIcon from "@/public/icons/content-icon";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-content.jpg";
import ScrollFixServices from "../scroll-fix-services";

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
      <ScrollFixServices display={display}>
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
      </ScrollFixServices>
    </section>
  );
};

export default Strategy;
