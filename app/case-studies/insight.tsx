import { ReactNode } from "react";

const Insight = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-[#082828] text-lg font-medium py-[10px] px-6 bg-[#F4F4F4] rounded-[2.125rem] w-max">
      {children}
    </p>
  );
};

export default Insight;
