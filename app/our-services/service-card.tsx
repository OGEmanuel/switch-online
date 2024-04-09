"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const ServiceCard = ({
  children,
  icon,
  title,
  description,
  link,
  className,
}: {
  children: ReactNode;
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  className: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <button
      onClick={handleClick}
      className="lg:hover:-translate-y-5 transition-all"
    >
      <div
        className={`p-4 md:p-6 ${className} h-full shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)] border border-[#BAD0D0] rounded-3xl`}
      >
        <div className="flex gap-4 items-center text-xl md:text-2xl font-semibold text-[#082828] mb-4">
          {icon}
          <p>{title}</p>
        </div>
        <p className="md:text-lg text-[#506363] mb-6 text-left">
          {description}
        </p>
        <div className="border-t border-dashed border-t-[#CECECE] pt-6 flex flex-col gap-6">
          {children}
        </div>
      </div>
    </button>
  );
};

export default ServiceCard;
