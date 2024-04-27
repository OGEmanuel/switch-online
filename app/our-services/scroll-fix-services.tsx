import DisplayWithBolt from "@/components/display-with-bolt";
import ScrollFix from "../scroll-fix";
import Services from "@/components/services";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

const ScrollFixServices = ({
  display,
  children,
}: {
  display: StaticImageData;
  children: ReactNode;
}) => {
  return (
    <>
      <ScrollFix
        className="md:w-max lg:flex-shrink-0"
        classNameRight="flex-grow"
        left={<DisplayWithBolt display={display} />}
        right={
          <div className="flex flex-col gap-[2rem] md:gap-[5.5rem] w-full">
            {children}
          </div>
        }
      />
      <div className="md:mb-0 pb-32 md:mt-20">
        <Services
          title="Our Services"
          description="Discover our comprehensive range of services designed to elevate your brand and drive results."
        />
      </div>
    </>
  );
};

export default ScrollFixServices;
