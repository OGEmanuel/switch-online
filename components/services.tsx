import OtherServices from "@/app/our-services/other-services";
import BarIcon from "@/public/icons/bar-icon";

const Services = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#05201F]">
      <div className="mx-auto max-w-[1440px] py-12 lg:py-[7.5rem]">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-20">
          <div className="flex flex-col gap-6">
            <p className="text-white font-extrabold text-[2.5rem]">{title}</p>
            <p className="lg:max-w-[33.75rem] md:max-w-[27rem] max-w-[33.75rem] text-[#BAD0D0]">
              {description}
            </p>
          </div>
          <div className="md:block hidden">
            <BarIcon />
          </div>
        </div>
        <div className="pl-4 md:pl-8 lg:pl-20 overflow-auto scrollbar pt-16">
          <div className="flex gap-6 md:gap-12 w-max pr-10 md:pr-20">
            <OtherServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
