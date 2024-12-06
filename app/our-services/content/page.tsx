"use client";

import ContentIcon from "@/public/icons/content-icon";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-content.jpg";
import ScrollFixServices from "../scroll-fix-services";
import { useThemeContext } from "@/context";
import ServicesHeader from "../services-header";

const Strategy = () => {
  const { theme } = useThemeContext();

  return (
    <section className={`${theme === "dark" ? "bg-[#020F0F]" : ""}`}>
      <ServicesHeader
        title="Content"
        description="Storytelling is at the heart of everything we do.. We believe that
        behind every successful brand is a compelling story waiting to be
        told."
      >
        <ContentIcon />
      </ServicesHeader>
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
