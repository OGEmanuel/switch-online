import CtaRightArrow from "@/components/ui/cta-right-arrow";

const ServiceDetailsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col p-6 md:p-12 gap-8 border border-[#BAD0D0] rounded-xl w-[22rem] md:w-[27rem] 2xl:w-[41rem]">
      <div className="flex flex-col gap-6">
        <p className="md:text-[2rem] text-[1.75rem] 2xl:text-[2.5rem] font-extrabold md:leading-[3rem]">
          {title}
        </p>
        <p className="text-base md:text-lg text-[#506363]">{description}</p>
      </div>
      <CtaRightArrow width="w-[10.875rem]" cta="Get in touch" />
    </div>
  );
};

export default ServiceDetailsCard;
