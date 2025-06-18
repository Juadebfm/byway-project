import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courseData } from "../data/courseData";
import StarRating from "./StarRatings";

const TopCourses = () => {
  const [seeAll, setSeeAll] = useState(false);

  let displayedCourses;
  if (seeAll) {
    displayedCourses = courseData;
  } else {
    displayedCourses = courseData.slice(0, 4);
  }
  return (
    <section className="mt-[60px] px-[80px]">
      <div className="flex items-end justify-between mb-[24px]">
        <h3 className="capitalize text-[24px] text-bywayTextDark font-[700]">
          Top courses
        </h3>

        <Link
          onClick={() => setSeeAll(!seeAll)}
          to="/"
          className="capitalize text-sm font-medium text-bywayBlue hover:underline underline-offset-4 duration-300 transition-all"
        >
          {seeAll ? "Close See All" : "See All"}
        </Link>
      </div>

      <div className="grid grid-cols-4 items-center justify-between gap-[36px]">
        {displayedCourses.map(
          ({
            id,
            courseImg,
            courseTitle,
            courseAuthor,
            courseRatings,
            noOfRatings,
            courseTotalHours,
            noOfLectures,
            courseLevel,
            coursePrice,
          }) => (
            <div
              key={id}
              className="border border-[#E2E8F0] p-[18px] h-[338px] rounded-xl relative shadow-lg cursor-pointer hover:shadow-2xl duration-300 transition-all ease-linear"
            >
              <img
                src={courseImg}
                alt={courseTitle}
                className="w-full h-[138px] rounded-lg mb-[16px]"
              />

              <div>
                <h3 className="font-bold text-lg capitalize text-bywayTextDark leading-tight line-clamp-1">
                  {courseTitle}
                </h3>
                <span className="text-bywayTextLight text-sm">
                  By {courseAuthor}
                </span>

                <div className="flex items-center justify-start gap-[10px] py-3">
                  <StarRating rating={courseRatings} />
                  <span className="text-xs font-bold text-bywayBtnColor">
                    ({noOfRatings})
                  </span>
                </div>

                <div className="text-xs text-bywayBtnColor space-x-1">
                  <span>{courseTotalHours} Total Hours.</span>
                  <span>{noOfLectures} Lectures.</span>
                  <span>{courseLevel}</span>
                </div>

                <h2 className="absolute bottom-[18px] font-bold text-lg text-bywayTextDark tracking-wide">
                  ${coursePrice}
                </h2>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TopCourses;
