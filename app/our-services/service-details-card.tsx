import CtaRightArrow from "@/components/ui/cta-right-arrow";
import { useThemeContext } from "@/context";

const ServiceDetailsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`p-6 md:p-12 flex flex-col gap-8 border rounded-xl 
    ${theme === "dark" ? "border-[#506363]" : "border-[#BAD0D0]"}
    `}
    >
      <div className="flex flex-col gap-6">
        <p
          className={`md:text-[2rem] text-[1.75rem] 2xl:text-[2.5rem] font-extrabold md:leading-[3rem] ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          {title}
        </p>
        <p
          className={`text-base md:text-lg ${
            theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
          }`}
        >
          {description}
        </p>
      </div>
      <CtaRightArrow
        width="w-[10.875rem]"
        cta="Get in touch"
        href="/get-in-touch"
      />
    </div>
  );
};

export default ServiceDetailsCard;
