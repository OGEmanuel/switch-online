type Goals = {
  id: string;
  goal: string;
};

const ClientDetails = ({
  name,
  year,
  industry,
  summary,
  goals,
}: {
  name: string;
  year: string;
  industry: string;
  summary: string;
  goals: Goals[];
}) => {
  return (
    <div className="flex mb-16 flex-wrap xl:flex-nowrap gap-6 md:gap-16">
      <div className="md:text-[2.5rem] text-[1.75rem] max-w-[38rem] md:flex-shrink-0">
        <p className="font-semibold">
          Client: <span className="font-extrabold">{name}</span>
        </p>
        <p className="font-semibold">
          Year: <span className="font-extrabold">{year}</span>
        </p>
        <p className="font-semibold">
          Industry: <span className="font-extrabold">{industry}</span>
        </p>
      </div>
      <div className="md:text-lg text-base">
        <p className="text-[#506363]">{summary}</p>
        <div className="mt-6">
          <p className="font-medium">Client Goals:</p>
          {goals.map((goal) => (
            <p key={goal.id}>{goal.goal}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
