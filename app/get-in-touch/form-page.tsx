import Link from "next/link";
import { ReactNode } from "react";

const FormPage = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col md:grid grid-cols-2 gap-16">
      <div>
        <div className="flex flex-col gap-4 md:gap-6 pb-6 md:pb-12 border-b border-dashed border-[#CECECE] mb-6 md:mb-12">
          <p className="text-[#082828] font-semibold">Get in touch</p>
          <h1 className="xl:text-[4.25rem] text-3xl font-extrabold xl:leading-[5rem]">
            Interested in working with us?
          </h1>
          <p className="text-[#506363] xl:text-2xl text-lg">
            Fill in the form today, and our team will be in touch shortly.
          </p>
        </div>
        <p className="xl:text-2xl text-lg font-medium">
          If you&apos;d prefer to email us directly, send a message to{" "}
          <Link href={"mailto:hey@switchonline.xyz"} className="text-[#1E9B97]">
            hey@switchonline.xyz
          </Link>
        </p>
      </div>
      {children}
    </section>
  );
};

export default FormPage;
