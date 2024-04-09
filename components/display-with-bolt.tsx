import BoltImgIcon from "@/public/icons/bolt-img-icon";
import BoltImgIconSmall from "@/public/icons/bolt-img-icon-small";
import Image, { StaticImageData } from "next/image";

const DisplayWithBolt = ({ display }: { display: StaticImageData }) => {
  return (
    <div className="w-max relative">
      <div className="md:w-[560px] xl:w-[560px] xl:h-[560px] lg:w-[358px] lg:h-[358px] w-[358px] h-[358px] md:h-[560px]">
        <Image src={display} alt="display-img" fill placeholder="blur" />
      </div>
      <div className="absolute md:hidden -top-8 -right-4">
        <BoltImgIconSmall />
      </div>
      <div className="absolute md:block hidden -top-8 -right-4">
        <BoltImgIcon />
      </div>
    </div>
  );
};

export default DisplayWithBolt;
