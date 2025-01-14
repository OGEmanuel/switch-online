"use client";

import { useThemeContext } from "@/context";
import Link from "next/link";
import { ReactNode } from "react";

const FormPage = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();

  return (
    <section className="flex flex-col md:grid grid-cols-2 gap-16">
      <div>
        <div className="flex flex-col gap-4 md:gap-6 pb-6 md:pb-12 border-b border-dashed border-[#CECECE] mb-6 md:mb-12">
          <p
            className={`font-semibold
          ${theme === "dark" ? "text-[#BAD0D0]" : "text-[#082828]"}
          `}
          >
            Get in touch
          </p>
          <h1
            className={`xl:text-[4.25rem] text-3xl font-extrabold xl:leading-[5rem] ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            Interested in working with us?
          </h1>
          <p
            className={`xl:text-2xl text-lg ${
              theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
            }`}
          >
            Fill in the form today, and our team will be in touch shortly.
          </p>
        </div>
        <p
          className={`xl:text-2xl text-lg font-medium 
        ${theme === "dark" ? "text-white" : ""}
        `}
        >
          If you&apos;d prefer to email us directly, send a message to{" "}
          <Link
            href={"mailto:hello@switchonline.xyz"}
            className="text-[#1E9B97]"
          >
            hello@switchonline.xyz
          </Link>
        </p>
      </div>
      {children}
    </section>
  );
};

export default FormPage;
