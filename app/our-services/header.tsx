import { useThemeContext } from "@/context";

const Header = () => {
  const { theme } = useThemeContext();

  return (
    <div className="text-center max-w-[43.5rem] mx-auto flex flex-col gap-5 md:gap-6 mb-[3.375rem]">
      <p
        className={`font-semibold text-sm md:text-base ${
          theme === "dark" ? "text-[#BAD0D0]" : "text-[#082828]"
        }`}
      >
        Our Services
      </p>
      <h1
        className={`font-extrabold text-[2.5rem] md:text-5xl ${
          theme === "dark" ? "text-white" : ""
        }`}
      >
        Our Range of Expert Services
      </h1>
      <p
        className={`md:text-lg ${
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
