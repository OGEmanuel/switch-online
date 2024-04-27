"use client";

import InfluencerIcon from "@/public/icons/influencer-icon";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-influencer.jpg";
import ScrollFixServices from "../scroll-fix-services";
import { useThemeContext } from "@/context";
import ServicesHeader from "../services-header";

const Influencer = () => {
  const { theme } = useThemeContext();

  return (
    <section className={`${theme === "dark" ? "bg-[#020F0F]" : ""}`}>
      <ServicesHeader
        title="Influencer"
        description="We create influential campaigns to boost brand awareness and drive
        action through creativity and influence."
      >
        <InfluencerIcon />
      </ServicesHeader>
      <ScrollFixServices display={display}>
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
      </ScrollFixServices>
    </section>
  );
};

export default Influencer;
