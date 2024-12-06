import { useThemeContext } from "@/context";
import Image, { StaticImageData } from "next/image";

const TeamMember = ({
  display,
  name,
  role,
}: {
  display: StaticImageData;
  name: string;
  role: string;
}) => {
  const { theme } = useThemeContext();

  return (
    <div className="w-max">
      <div className="mb-6 w-[18.5rem] h-64">
        <Image
          src={display}
          alt="display"
          placeholder="blur"
          className="rounded-3xl"
        />
      </div>
      <div className="text-center">
        <p
          className={`font-extrabold text-xl 
        ${theme === "dark" ? "text-white" : ""}
        `}
        >
          {name}
        </p>
        <p
          className={`text-lg 
        ${theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"}
        `}
        >
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
