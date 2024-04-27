import BoltImgIcon from "@/public/icons/bolt-img-icon";
import BoltImgIconSmall from "@/public/icons/bolt-img-icon-small";
import Image, { StaticImageData } from "next/image";

const DisplayWithBolt = ({ display }: { display: StaticImageData }) => {
  return (
    <div className="xl:w-max">
      <div className="max-w-[35rem] mx-auto relative">
        <Image
          src={display}
          alt="display-img"
          placeholder="blur"
          className="rounded-3xl"
        />
        <div className="absolute md:hidden -top-8 -right-4">
          <BoltImgIconSmall />
        </div>
        <div className="absolute md:block hidden -top-8 -right-4">
          <BoltImgIcon />
        </div>
      </div>
    </div>
  );
};

export default DisplayWithBolt;
