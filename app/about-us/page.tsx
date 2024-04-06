import ScribbleText from "@/components/scribble-text";
import Image from "next/image";
import TeamMember from "./team-member";
import FeatureBox from "@/components/feature-box";

const AboutUs = () => {
  return (
    <section className="pt-[4.5rem] pb-[6.25rem]">
      <div className="flex justify-between w-full mb-16 px-4 md:px-20">
        <div className="text-black font-extrabold text-7xl w-max leading-[5.5rem]">
          <p>
            Be <span className="text-[#1E9B97]">Seen.</span>
          </p>
          <p>
            Be <span className="text-[#48B3B8]">Heard.</span>
          </p>
          <p>
            Be <span className="text-[#5AE0E6]">Unforgettable.</span>
          </p>
        </div>
        <div className="max-w-[38.375rem] text-lg">
          <p className="text-[#082828] font-semibold mb-4">ABOUT US</p>
          <p className="text-[#506363] leading-9">
            We&apos;re more than just another marketing agency, the world is
            full of those. We&apos;re passionate about delving deep into your
            business and pushing you into digital success. With Switch, you can
            go to bed at night knowing that your brand is not just visible, but
            captivating; your voice is not just heard, but resonating; and your
            impact is not just momentary, but unforgettable.
          </p>
        </div>
      </div>
      <div className="w-full mb-[7.5rem] px-4 md:px-20">
        <Image
          src={"/display-img.jpg"}
          alt="display"
          width={1280}
          height={560}
          className="w-full"
        />
      </div>
      <ScribbleText header="We blend creative and performance">
        <>
          There aren&apos;t many creative agencies that understand performance
          and performance agencies that understand creative. <br />
          This is where we&apos;re different. <br />
          Whether we&apos;re helping to grow your Social communities, deliver
          performance-driven Paid Media, produce social-first Creative or
          Influencer campaigns - we craft strategies based on your brand,
          business and goals, all backed by data and insight.
        </>
      </ScribbleText>
      <FeatureBox
        classes="bg-[#FAFAFA] px-4 md:px-20 py-[7.5rem]"
        title="Our approach hinges on outcomes, not just outputs"
        cta="Browse Our Services"
      >
        <>
          Results are our compass, and we&apos;re not here to just tick boxes
          with you; we&apos;re committed to making a real impact on your
          business. <br />
          <br />
          Our focus is sharp, targeting measurable outcomes that matter to you.
          With us, it&apos;s not just about effort; it&apos;s about tangible
          results driving your success. <br />
          The results-driven Social first agency you&apos;ve been looking for.
        </>
      </FeatureBox>
      <div className="py-[6.25rem] px-4 md:px-20">
        <div className="text-center w-[50rem] mx-auto mb-16">
          <p className="text-[2.5rem] font-extrabold mb-6">Meet our team</p>
          <p className="text-lg text-[#506363] leading-[1.8rem]">
            Say hello to agile marketing, from strategic thinking to execution,
            planning to production, we are experts in taking compelling ideas
            and turning them into a reality for your audience.
          </p>
        </div>
        <div className="flex justify-between gap-8 overflow-auto">
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
