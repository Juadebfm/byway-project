import React from "react";
import { Link } from "react-router-dom";
import { topCategories } from "../data/courseData";

const TopCategories = () => {
  return (
    <section className="mt-[60px] px-[80px]">
      <div className="flex items-end justify-between mb-[24px]">
        <h3 className="capitalize text-[24px] text-bywayTextDark font-[700]">
          Top categories
        </h3>

        <Link
          to="/"
          className="capitalize text-sm font-medium text-bywayBlue hover:underline underline-offset-4 duration-300 transition-all"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-4 items-center justify-center gap-[36px]">
        {topCategories.map(({ icon, category, courseCount }) => (
          <div
            key={category}
            className="border shadow-lg rounded-xl py-[32px] px-[48px] flex items-center justify-start flex-col hover:scale-[1.03] duration-300 transition-all cursor-pointer"
          >
            <div className="w-[80px] h-[80px] bg-[#E0F2FE] rounded-full flex items-center justify-center mb-3">
              <img src={icon} alt={category} />
            </div>
            <span className="text-xl font-semibold capitalize mb-5">
              {category}
            </span>
            <span>{courseCount} Courses</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
