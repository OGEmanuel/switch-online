import ScribbleText from "@/components/scribble-text";
import { Button } from "@/components/ui/button";
import ArrowRightSharpIcon from "@/public/icons/arrow-right-sharp-icon";
import Image from "next/image";
import Link from "next/link";
import TeamMember from "./team-member";

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
            We’re more than just another marketing agency, the world is full of
            those. We’re passionate about delving deep into your business and
            pushing you into digital success. With Switch, you can go to bed at
            night knowing that your brand is not just visible, but captivating;
            your voice is not just heard, but resonating; and your impact is not
            just momentary, but unforgettable.
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
          There aren't many creative agencies that understand performance and
          performance agencies that understand creative. <br />
          This is where we're different. <br />
          Whether we're helping to grow your Social communities, deliver
          performance-driven Paid Media, produce social-first Creative or
          Influencer campaigns - we craft strategies based on your brand,
          business and goals, all backed by data and insight.
        </>
      </ScribbleText>
      <div className="mt-[7.5rem] bg-[#FAFAFA] px-4 md:px-20 flex items-center py-[7.5rem]">
        <div className="w-max">
          <Image
            src={"/display-img-med.jpg"}
            alt="display-img"
            width={560}
            height={560}
          />
        </div>
        <div className="max-w-[41rem] mx-auto">
          <p className="text-[2.5rem] font-extrabold leading-[3rem] mb-6">
            Our approach hinges on outcomes, not just outputs
          </p>
          <p className="text-lg text-[#506363] leading-[1.8rem] mb-8">
            Results are our compass, and we're not here to just tick boxes with
            you; we're committed to making a real impact on your business.{" "}
            <br />
            <br />
            Our focus is sharp, targeting measurable outcomes that matter to
            you. With us, it's not just about effort; it's about tangible
            results driving your success. <br />
            The results-driven Social first agency you've been looking for.
          </p>
          <Button asChild>
            <Link
              href="/"
              className="!bg-[#fff] flex gap-1 items-center shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)] hover:bg-[#fff] rounded-xl h-14 w-[15.125rem] border border-[#BAD0D0]"
            >
              <span className="block text-[#082828] font-semibold">
                Browse Our Services
              </span>
              <ArrowRightSharpIcon />
            </Link>
          </Button>
        </div>
      </div>
      <div className="py-[6.25rem] px-4 md:px-20">
        <div className="text-center w-[50rem] mx-auto mb-16">
          <p className="text-[2.5rem] font-extrabold mb-6">Meet our team</p>
          <p className="text-lg text-[#506363] leading-[1.8rem]">
            Say hello to agile marketing, from strategic thinking to execution,
            planning to production, we are experts in taking compelling ideas
            and turning them into a reality for your audience.
          </p>
        </div>
        <div className="flex justify-between">
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
