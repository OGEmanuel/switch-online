import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center font-semibold">
      <Image src={"/logo.svg"} alt="logo" width={46} height={32} />
      <p>Switch Online</p>
    </div>
  );
};

export default Logo;
