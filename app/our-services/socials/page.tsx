"use client";

import ServiceSocialIcon from "@/public/icons/service-social-icon";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-about-2.jpg";
import ScrollFixServices from "../scroll-fix-services";
import { useThemeContext } from "@/context";
import ServicesHeader from "../services-header";

const Socials = () => {
  const { theme } = useThemeContext();

  return (
    <section className={`${theme === "dark" ? "bg-[#020F0F]" : ""}`}>
      <ServicesHeader
        title="Socials"
        description="We grow cult-like communities leveraging platform-specific
        strategies tailored for a world where every like and share counts!"
      >
        <ServiceSocialIcon />
      </ServicesHeader>
      <ScrollFixServices display={display}>
        <ServiceDetailsCard
          title="Social-First Strategies"
          description="In today's world, social media isn't just a tool - it's a way of life. That's why we're all in on social-first strategies. We know where the action is happening, and we make sure your brand is right there in the mix, sparking conversations and building connections that last."
        />
        <ServiceDetailsCard
          title="Platform-Specific Social Content"
          description="Think of us as your personal social stylists. We know that each platform has its own vibe, its own language. So, we tailor our content to fit seamlessly into the feeds of your audience, whether they're scrolling through Instagram, Twitter, or LinkedIn."
        />
        <ServiceDetailsCard
          title="Data-Driven Approach"
          description="Behind every great social campaign is a mountain of data. We're not just guessing what works - we're diving deep into the numbers, analyzing trends, and making strategic decisions based on what we find. It's like having a crystal ball for your social success."
        />
      </ScrollFixServices>
    </section>
  );
};

export default Socials;
