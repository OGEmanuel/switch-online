import { useThemeContext } from "@/context";
import ScribbleIcon from "@/public/icons/scribble-icon";
import { ReactNode } from "react";

const ScribbleText = ({
  children,
  header,
}: {
  children: ReactNode;
  header: string;
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`text-center max-w-[30rem] px-0 md:px-8 lg:px-0 md:max-w-[50rem] mx-auto relative z-10`}
    >
      <p
        className={`text-[2rem] md:text-5xl font-extrabold mb-7 md:mb-8 md:leading-[3.6rem] 
      ${theme === "dark" ? "text-white" : "text-black"}
      `}
      >
        {header}
      </p>
      <p
        className={`text-base md:text-2xl md:leading-[2.4rem] 
      ${theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"}
      `}
      >
        {children}
      </p>
      <div className="absolute top-0 left-[50%] -translate-x-[50%] -z-10">
        <ScribbleIcon />
      </div>
    </div>
  );
};

export default ScribbleText;
