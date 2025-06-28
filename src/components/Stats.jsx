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
    <section className="bg-[#F8FAFC] min-h-max lg:min-h-[149px] gap-14 lg:gap-0 grid grid-cols-1 lg:grid-cols-4 items-center justify-center px-[30px] lg:px-[80px] py-20">
      {statData.map(({ statValue, statText }) => (
        <div
          key={statValue}
          className="flex flex-col items-center justify-center border-b-4 border-r-0 lg:border-b-0 lg:border-r-4 border-gray-300 last:border-r-0 pb-14 lg:pb-0"
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
