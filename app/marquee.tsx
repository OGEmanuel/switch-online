import Image from "next/image";

const Marquee = () => {
  return (
    <div className="flex flex-col gap-8 w-[71.5rem] mx-auto text-center mt-[8.75rem] bg-white">
      {/* <div className="pt-1 shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)] py-10"></div> */}
      <p className="text-[#485B5B] text-lg font-medium">Brand that trust us</p>
      <div className="flex justify-between">
        <Image
          src={"/easyjet-holidays.png"}
          alt="logo"
          width={112}
          height={64}
        />
        <Image src={"/premier-inn.png"} alt="logo" width={112} height={64} />
        <Image src={"/passenger-logo.png"} alt="logo" width={112} height={64} />
        <Image
          src={"/carpetright-logo.png"}
          alt="logo"
          width={112}
          height={64}
        />
        <Image src={"/blog-mecca.png"} alt="logo" width={112} height={64} />
        <Image src={"/uniql-logo.png"} alt="logo" width={112} height={64} />
      </div>
    </div>
  );
};

export default Marquee;
