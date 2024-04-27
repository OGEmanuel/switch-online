"use client";

import MediaIcon from "@/public/icons/media-icon";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-ooh.jpg";
import ScrollFixServices from "../scroll-fix-services";
import { useThemeContext } from "@/context";
import ServicesHeader from "../services-header";

const Media = () => {
  const { theme } = useThemeContext();

  return (
    <section className={`${theme === "dark" ? "bg-[#020F0F]" : ""}`}>
      <ServicesHeader
        title="OOH"
        description="We're great at media planning, buying, and monitoring, where
        precision meets innovation to shape impactful Out-of-Home (OOH)
        campaigns"
      >
        <MediaIcon />
      </ServicesHeader>
      <ScrollFixServices display={display}>
        <ServiceDetailsCard
          title="Strategic Media Planning"
          description="We specialize in strategic media plans to spotlight your brand to your target audience. Through careful analysis of demographics and consumer behavior, we identify ideal OOH placements for maximum exposure and engagement. From towering billboards to digital displays, we ensure your message reaches the right audience at the right time."
        />
        <ServiceDetailsCard
          title="Comprehensive Monitoring and Analysis"
          description="We don't stop at ad placement. We provide real-time monitoring and analysis for your OOH campaigns. Using advanced analytics, we optimize your strategy, ensuring measurable results."
        />
        <ServiceDetailsCard
          title="Empowering Creators for Authentic Content"
          description="Beyond influencers, we've curated a diverse pool of creators skilled in crafting authentic, platform-specific content. Leveraging their talent, we generate tailored user-generated content (UGC), boosting your brand presence across channels. Goodbye cookie-cutter, hello authentic storytelling."
        />
      </ScrollFixServices>
    </section>
  );
};

export default Media;
