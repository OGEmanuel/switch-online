import InsightBox from "./insight-box";

const CaseStudies = () => {
  return (
    <section className="px-4 md:px-20">
      <div className="mt-[6.25rem] mb-6 w-[50rem] flex flex-col gap-6">
        <p className="text-[#082828] font-semibold">CASE STUDIES</p>
        <h1 className="text-5xl font-extrabold">
          Our results keep the herd happy
        </h1>
        <p className="text-2xl text-[#506363]">
          We specialize in Social, Paid, Creative, Influencer and Strategy and
          work with fast-growth brands.
        </p>
      </div>
      <InsightBox
        href="/case-studies/study-one"
        title="TrueCaller"
        src="/display-img-no-bolt.jpg"
      >
        <>
          Goal was to raise awareness of Truecaller&apos;s services among
          Nigerian consumers, emphasising its value proposition and unique
          features.
        </>
      </InsightBox>
      <InsightBox
        className="flex-row-reverse"
        href="/case-studies/study-one"
        title="TrueCaller"
        src="/display-img-no-bolt.jpg"
      >
        <>
          Goal was to raise awareness of Truecaller&apos;s services among
          Nigerian consumers, emphasising its value proposition and unique
          features.
        </>
      </InsightBox>
      <InsightBox
        className="pb-[7.5rem]"
        href="/case-studies/study-one"
        title="TrueCaller"
        src="/display-img-med.jpg"
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
