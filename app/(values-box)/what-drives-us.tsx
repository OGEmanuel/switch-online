import Values from "./values";

const WhatDrivesUs = () => {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-20">
      <div className="max-w-[37.625rem] mx-auto text-center flex flex-col gap-4 mb-10">
        <p className="text-[#082828] text-[1.75rem] md:text-[2.5rem] font-extrabold leading-[3rem]">
          What drives us
        </p>
        <p className="text-[#506363] md:text-lg">
          We believe in open and transparent communication, ensuring you know
          where your money goes.{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center pb-[7.5rem]">
        <Values
          className="xl:border-r xl:border-b border-[#D7DBDB]"
          title="Client-centric"
          description="We believe in putting our clients at the heart of everything we do. Their success is our success, and we're dedicated to exceeding their expectations by delivering measurable results."
        />
        <Values
          className="xl:border-l xl:border-b border-[#D7DBDB]"
          title="Transparency"
          description="We believe in open and transparent communication, ensuring you
              know where your money goes. If you don't get the metrics,
              don't fret - we'll simplify and guide you through
              it."
        />
        <Values
          className="xl:border-r xl:border-t border-[#D7DBDB]"
          title="Our Team"
          description="Our team is the backbone of our success. We value
              collaboration, diversity, and mutual respect, harnessing the
              collective expertise and passion of our team members to
              deliver outstanding results for our clients."
        />
        <Values
          className="xl:border-l xl:border-t border-[#D7DBDB]"
          title="Passion"
          description="We're deeply committed to making a positive impact. Our
              enthusiasm drives us to go above and beyond for our clients,
              delivering exceptional results with dedication and commitment."
        />
      </div>
    </div>
  );
};

export default WhatDrivesUs;
