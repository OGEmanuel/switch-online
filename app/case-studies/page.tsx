import display from "@/public/display-img-med.jpg";
import InsightBox from "./insight-box";
("");

const CaseStudies = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20">
      <div className="lg:mt-[6.25rem] mt-10 mb-6 max-w-[50rem] flex flex-col gap-6">
        <p className="text-[#082828] md:text-base text-sm font-semibold">
          CASE STUDIES
        </p>
        <h1 className="md:text-5xl text-[2.5rem] font-extrabold">
          Our results keep the herd happy
        </h1>
        <p className="md:text-2xl text-[#506363]">
          We specialize in Social, Paid, Creative, Influencer and Strategy and
          work with fast-growth brands.
        </p>
      </div>
      <InsightBox
        className="flex-col-reverse lg:flex-row"
        href="/case-studies/study-one"
        title="TrueCaller"
        src={display}
      >
        <>
          Goal was to raise awareness of Truecaller&apos;s services among
          Nigerian consumers, emphasising its value proposition and unique
          features.
        </>
      </InsightBox>
      <InsightBox
        className="lg:flex-row-reverse flex-col-reverse"
        href="/case-studies/study-one"
        title="TrueCaller"
        src={display}
      >
        <>
          Goal was to raise awareness of Truecaller&apos;s services among
          Nigerian consumers, emphasising its value proposition and unique
          features.
        </>
      </InsightBox>
      <InsightBox
        className="pb-[7.5rem] flex-col-reverse lg:flex-row"
        href="/case-studies/study-one"
        title="TrueCaller"
        src={display}
      >
        <>
          Goal was to raise awareness of Truecaller&apos;s services among
          Nigerian consumers, emphasising its value proposition and unique
          features.
        </>
      </InsightBox>
    </section>
  );
};

export default CaseStudies;
