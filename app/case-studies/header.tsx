"use client";

import { useThemeContext } from "@/context";

const Header = () => {
  const { theme } = useThemeContext();

  return (
    <div className="lg:pt-[6.25rem] pt-10 pb-6 max-w-[50rem] flex flex-col gap-6">
      <p
        className={`md:text-base text-sm font-semibold ${
          theme === "dark" ? "text-[#BAD0D0]" : "text-[#082828]"
        }`}
      >
        CASE STUDIES
      </p>
      <h1
        className={`md:text-5xl text-[2.5rem] font-extrabold ${
          theme === "dark" ? "text-white" : "text-[#082828]"
        }`}
      >
        We work with brands across multiple industries and verticals
      </h1>
      <p
        className={`md:text-2xl ${
          theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
        }`}
      >
        We specialize in Social, Paid, Creative, Influencer and Strategy and
        work with fast-growth brands.
      </p>
    </div>
  );
};

export default Header;
