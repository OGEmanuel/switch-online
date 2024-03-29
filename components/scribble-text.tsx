import ScribbleIcon from "@/public/icons/scribble-icon";
import { ReactNode } from "react";

const ScribbleText = ({
  children,
  header,
}: {
  children: ReactNode;
  header: string;
}) => {
  return (
    <div className="text-center max-w-[50rem] mx-auto relative z-10">
      <p className="text-black text-5xl font-extrabold mb-8 leading-[3.6rem]">
        {header}
      </p>
      <p className="text-[#506363] text-2xl leading-[2.4rem]">{children}</p>
      <div className="absolute top-0 left-[50%] -translate-x-[50%] -z-10">
        <ScribbleIcon />
      </div>
    </div>
  );
};

export default ScribbleText;
