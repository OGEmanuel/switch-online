import Link from "next/link";
import { Button } from "./button";
import ArrowRightSharpIcon from "@/public/icons/arrow-right-sharp-icon";

const CtaRightArrow = ({
  width,
  cta,
  href,
}: {
  width: string;
  cta: string;
  href?: string;
}) => {
  return (
    <Button asChild>
      <Link
        href={href ? href : "/"}
        className={`!bg-[#fff] flex gap-1 items-center shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)] hover:bg-[#fff] rounded-xl h-14 ${width} border border-[#BAD0D0]`}
      >
        <span className="block text-[#082828] font-semibold">{cta}</span>
        <ArrowRightSharpIcon />
      </Link>
    </Button>
  );
};

export default CtaRightArrow;
