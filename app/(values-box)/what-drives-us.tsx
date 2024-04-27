import { useThemeContext } from "@/context";
import Values from "./values";

const WhatDrivesUs = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`px-4 md:px-8 lg:px-20 lg:pt-[7.5rem] ${
        theme === "dark" ? "bg-[#05201F]" : "bg-[#FAFAFA]"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[37.625rem] mx-auto text-center flex flex-col gap-4 mb-10">
          <p
            className={`text-[1.75rem] md:text-[2.5rem] font-extrabold leading-[3rem] ${
              theme === "dark" ? "text-white" : "text-[#082828]"
            }`}
          >
            What drives us
          </p>
          <p
            className={`md:text-lg ${
              theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
            }`}
          >
            We believe in open and transparent communication, ensuring you know
            where your money goes.{" "}
          </p>
        </div>
        <div className="flex flex-wrap justify-center pb-[7.5rem]">
          <Values
            className="xl:border-r xl:border-b"
            title="Client-centric"
            description="We believe in putting our clients at the heart of everything we do. Their success is our success, and we're dedicated to exceeding their expectations by delivering measurable results."
          />
          <Values
            className="xl:border-l xl:border-b"
            title="Transparency"
            description="We believe in open and transparent communication, ensuring you
              know where your money goes. If you don't get the metrics,
              don't fret - we'll simplify and guide you through
              it."
          />
          <Values
            className="xl:border-r xl:border-t"
            title="Our Team"
            description="Our team is the backbone of our success. We value
              collaboration, diversity, and mutual respect, harnessing the
              collective expertise and passion of our team members to
              deliver outstanding results for our clients."
          />
          <Values
            className="xl:border-l xl:border-t"
            title="Passion"
            description="We're deeply committed to making a positive impact. Our
              enthusiasm drives us to go above and beyond for our clients,
              delivering exceptional results with dedication and commitment."
          />
        </div>
      </div>
    </div>
  );
};

export default WhatDrivesUs;
