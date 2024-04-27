"use client";

import { useThemeContext } from "@/context";

const Values = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`w-[34rem] 2xl:w-[40rem] ${className} flex justify-center ${
        theme === "dark" ? "border-[#506363]" : "border-[#D7DBDB]"
      }`}
    >
      <div className="max-w-[30rem] text-center mx-auto py-12 flex flex-col gap-4">
        <p
          className={`text-xl md:text-2xl font-semibold ${
            theme === "dark" ? "text-white" : "text-[#082828]"
          }`}
        >
          {title}
        </p>
        <p
          className={`md:text-lg ${
            theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Values;
