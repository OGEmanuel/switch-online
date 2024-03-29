import Image from "next/image";

const TeamMember = () => {
  return (
    <div className="w-max">
      <div className="w-max mb-6">
        <Image
          src={"/display-img-small.jpg"}
          alt="display"
          width={296}
          height={240}
        />
      </div>
      <div className="text-center">
        <p className="font-extrabold text-xl">Akintomiwa Johnson</p>
        <p className="text-[#506363] text-lg">Sale Representative</p>
      </div>
    </div>
  );
};

export default TeamMember;
