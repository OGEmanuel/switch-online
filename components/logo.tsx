import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-1 items-center font-semibold">
      <Image src={"/logo.svg"} alt="logo" width={46} height={32} />
      <p>Switch Online</p>
    </Link>
  );
};

export default Logo;
