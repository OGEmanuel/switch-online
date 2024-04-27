"use client";

import PerformanceIcon from "@/public/icons/performance-icon";
import ServiceDetailsCard from "../service-details-card";
import display from "@/public/display-img-performance.jpg";
import ScrollFixServices from "../scroll-fix-services";
import { useThemeContext } from "@/context";
import ServicesHeader from "../services-header";

const Performance = () => {
  const { theme } = useThemeContext();

  return (
    <section className={`${theme === "dark" ? "bg-[#020F0F]" : ""}`}>
      <ServicesHeader
        title="Performance"
        description="We master full-funnel Paid Media strategies for scalable brand
        growth, with performance-driven campaigns in Paid Social and Paid
        Search."
      >
        <PerformanceIcon />
      </ServicesHeader>
      <ScrollFixServices display={display}>
        <ServiceDetailsCard
          title="Elite Team of Performance Marketers"
          description=" Picture a squad of digital maestros who live and breathe Paid Social and Paid Search. That's us. Whether you're a scaleup, a household name, or a global brand, we've got the chops to scale your ad accounts, drive measurable growth, and craft strategies that make a real impact."
        />
        <ServiceDetailsCard
          title="Future-Proofing Your Brand with Strategic Mastery"
          description="In the ever-evolving landscape of Paid Media, staying ahead is the name of the game. We're not just here to run campaigns; we're your strategic partners, keeping a keen eye on industry shifts, platform updates, and emerging trends. Together, we'll sculpt a Paid Media strategy that not only meets your current needs but also anticipates and adapts to the changes ahead. From campaign management to attribution modeling, we've got you covered every step of the way."
        />
      </ScrollFixServices>
    </section>
  );
};

export default Performance;
