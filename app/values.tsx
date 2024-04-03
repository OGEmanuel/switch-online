const Values = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={`w-[40rem] ${className} flex justify-center`}>
      <div className="max-w-[30rem] text-center mx-auto py-12">
        <p className="text-[#082828] text-2xl font-semibold">{title}</p>
        <p className="text-[#506363] text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Values;
