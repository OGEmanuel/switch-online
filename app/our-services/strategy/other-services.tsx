"use client";

import ServiceSocialIcon from "@/public/icons/service-social-icon";
import ServiceCard from "../service-card";
import ServiceListItem from "../service-list-item";
import SocialBoltIcon from "@/public/icons/social-bolt-icon";
import InfluencerIcon from "@/public/icons/influencer-icon";
import InfluencerBoltIcon from "@/public/icons/influencer-bolt-icon";
import CreativeIcon from "@/public/icons/creative-icon";
import CreativeBoltIcon from "@/public/icons/creative-bolt-icon";
import PerformanceIcon from "@/public/icons/performance-icon";
import PerformanceBoltIcon from "@/public/icons/performance-bolt-icon";
import ContentIcon from "@/public/icons/content-icon";
import StrategyBoltIcon from "@/public/icons/strategy-bolt-icon";
import MediaIcon from "@/public/icons/media-icon";
import StrategyIcon from "@/public/icons/strategy-icon";
import { usePathname } from "next/navigation";

const OtherServices = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <ServiceCard
          className="max-w-[30rem] bg-white"
          link="/our-services/strategy"
          title="Strategy"
          icon={<StrategyIcon />}
          description="We align sales and marketing with demand generation strategies that
          drive revenue growth"
        >
          <ServiceListItem>
            <StrategyBoltIcon />
            <p>Sales audit.</p>
          </ServiceListItem>
          <ServiceListItem>
            <StrategyBoltIcon />
            <p>Go to market strategy.</p>
          </ServiceListItem>
          <ServiceListItem>
            <StrategyBoltIcon />
            <p>ICP, messaging and channel discovery.</p>
          </ServiceListItem>
          <ServiceListItem>
            <StrategyBoltIcon />
            <p>Funnel optimization.</p>
          </ServiceListItem>
        </ServiceCard>
      )}
      <ServiceCard
        className="max-w-[30rem] bg-white"
        link="/our-services"
        title="Socials"
        icon={<ServiceSocialIcon />}
        description="We grow cult-like communities leveraging platform-specific strategies tailored for a world where every like and share counts!"
      >
        <ServiceListItem>
          <SocialBoltIcon />
          <p>Social strategy.</p>
        </ServiceListItem>
        <ServiceListItem>
          <SocialBoltIcon />
          <p>Channel and community management.</p>
        </ServiceListItem>
        <ServiceListItem>
          <SocialBoltIcon />
          <p>Social-first content creation.</p>
        </ServiceListItem>
        <ServiceListItem>
          <SocialBoltIcon />
          <p>Social listening and insights.</p>
        </ServiceListItem>
      </ServiceCard>
      <ServiceCard
        className="max-w-[30rem] bg-white"
        link="/our-services"
        title="Influencer"
        icon={<InfluencerIcon />}
        description="We create influential campaigns to boost brand awareness and drive action through creativity and influence."
      >
        <ServiceListItem>
          <InfluencerBoltIcon />
          <p>End-to-end campaign management.</p>
        </ServiceListItem>
        <ServiceListItem>
          <InfluencerBoltIcon />
          <p>Access to a network of top-tier influencers.</p>
        </ServiceListItem>
        <ServiceListItem>
          <InfluencerBoltIcon />
          <p>Brand awareness and direct campaigns.</p>
        </ServiceListItem>
        <ServiceListItem>
          <InfluencerBoltIcon />
          <p>Strategic content amplification.</p>
        </ServiceListItem>
        <ServiceListItem>
          <InfluencerBoltIcon />
          <p>Wrap reports and analysis.</p>
        </ServiceListItem>
      </ServiceCard>
      <ServiceCard
        className="max-w-[30rem] bg-white"
        link="/our-services"
        title="Creative"
        icon={<CreativeIcon />}
        description="Explore our Creative services, where strategy and imagination enhance your brand. We craft assets for Organic and Performance goals."
      >
        <ServiceListItem>
          <CreativeBoltIcon />
          <p>Organic and paid social video.</p>
        </ServiceListItem>
        <ServiceListItem>
          <CreativeBoltIcon />
          <p>UGC to high quality production.</p>
        </ServiceListItem>
        <ServiceListItem>
          <CreativeBoltIcon />
          <p>Creative strategy, art direction and campaigns.</p>
        </ServiceListItem>
        <ServiceListItem>
          <CreativeBoltIcon />
          <p>Motion design, animation and graphics.</p>
        </ServiceListItem>
      </ServiceCard>
      <ServiceCard
        className="max-w-[30rem] bg-white"
        link="/our-services"
        title="Performance"
        icon={<PerformanceIcon />}
        description="We master full-funnel Paid Media strategies for scalable brand growth, with performance-driven campaigns in Paid Social and Paid Search."
      >
        <ServiceListItem>
          <PerformanceBoltIcon />
          <p>Paid social.</p>
        </ServiceListItem>
        <ServiceListItem>
          <PerformanceBoltIcon />
          <p>Paid search.</p>
        </ServiceListItem>
        <ServiceListItem>
          <PerformanceBoltIcon />
          <p>SEO.</p>
        </ServiceListItem>
        <ServiceListItem>
          <PerformanceBoltIcon />
          <p>Martech</p>
        </ServiceListItem>
      </ServiceCard>
      <ServiceCard
        className="max-w-[30rem] bg-white"
        link="/our-services"
        title="Content"
        icon={<ContentIcon />}
        description="Crafting stories that resonate and visuals that inspire, our Content services bring your brand's narrative to life."
      >
        <ServiceListItem>
          <StrategyBoltIcon />
          <p>TVC and radio script development.</p>
        </ServiceListItem>
        <ServiceListItem>
          <StrategyBoltIcon />
          <p>Blog content.</p>
        </ServiceListItem>
        <ServiceListItem>
          <StrategyBoltIcon />
          <p>Social content.</p>
        </ServiceListItem>
        <ServiceListItem>
          <StrategyBoltIcon />
          <p>Press release</p>
        </ServiceListItem>
      </ServiceCard>
      <ServiceCard
        className="max-w-[30rem] bg-white"
        link="/our-services"
        title="Media"
        icon={<MediaIcon />}
        description="Position your brand for success in the digital realm with our comprehensive Media services."
      >
        <ServiceListItem>
          <SocialBoltIcon />
          <p>Media planning.</p>
        </ServiceListItem>
        <ServiceListItem>
          <SocialBoltIcon />
          <p>Media buying.</p>
        </ServiceListItem>
        <ServiceListItem>
          <SocialBoltIcon />
          <p>Media consolidation.</p>
        </ServiceListItem>
        <ServiceListItem>
          <SocialBoltIcon />
          <p>Media reporting and analysis.</p>
        </ServiceListItem>
      </ServiceCard>
    </>
  );
};

export default OtherServices;
