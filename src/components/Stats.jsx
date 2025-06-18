import React from "react";

const statData = [
  {
    statValue: "250+",
    statText: "Courses by our best mentors",
  },
  {
    statValue: "1000+",
    statText: "Courses by our best mentors",
  },
  {
    statValue: "15+",
    statText: "Courses by our best mentors",
  },
  {
    statValue: "2400+",
    statText: "Courses by our best mentors",
  },
];

const Stats = () => {
  return (
    <section className="bg-[#F8FAFC] min-h-[149px] grid grid-cols-4 items-center justify-center px-[80px] ">
      {statData.map(({ statValue, statText }) => (
        <div
          key={statValue}
          className="flex flex-col items-center justify-center border-r-4 border-gray-300 last:border-r-0"
        >
          <span className="text-[32px] text-bywayTextDark font-semibold">
            {statValue}
          </span>
          <span className="text-sm">{statText}</span>
        </div>
      ))}
    </section>
  );
};

export default Stats;
