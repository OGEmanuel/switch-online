"use client";

import CreativeIcon from "@/public/icons/creative-icon";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-influencer.jpg";
import ScrollFixServices from "../scroll-fix-services";
import { useThemeContext } from "@/context";
import ServicesHeader from "../services-header";

const Creative = () => {
  const { theme } = useThemeContext();

  return (
    <section className={`${theme === "dark" ? "bg-[#020F0F]" : ""}`}>
      <ServicesHeader
        title="Creative"
        description="Explore our Creative services, where strategy and imagination
        enhance your brand. We craft assets for Organic and Performance
        goals."
      >
        <CreativeIcon />
      </ServicesHeader>
      <ScrollFixServices display={display}>
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
      </ScrollFixServices>
    </section>
  );
};

export default Creative;
