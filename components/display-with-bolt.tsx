import BoltImgIcon from "@/public/icons/bolt-img-icon";
import BoltImgIconSmall from "@/public/icons/bolt-img-icon-small";
import Image, { StaticImageData } from "next/image";

const DisplayWithBolt = ({ display }: { display: StaticImageData }) => {
  return (
    <div className="relative">
      <div className="">
        <Image src={display} alt="display-img" placeholder="blur" />
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
