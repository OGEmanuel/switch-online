import { ReactNode } from "react";

const ServiceListItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-3 text-left items-start md:text-lg text-[#506363]">
      {children}
    </div>
  );
};

export default ServiceListItem;
