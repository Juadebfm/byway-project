import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courseData } from "../data/courseData";
import CourseCard from "./mini-components/CourseCard";

const TopCourses = () => {
  const [seeAll, setSeeAll] = useState(false);

  let displayedCourses;
  if (seeAll) {
    displayedCourses = courseData;
  } else {
    displayedCourses = courseData.slice(0, 4);
  }

  return (
    <section className="mt-[60px] px-[30px] lg:px-[80px]">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-[20px] lg:gap-[36px]">
        {displayedCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            courseImg={course.courseImg}
            courseTitle={course.courseTitle}
            courseAuthor={course.courseAuthor}
            courseRatings={course.courseRatings}
            noOfRatings={course.noOfRatings}
            courseTotalHours={course.courseTotalHours}
            noOfLectures={course.noOfLectures}
            courseLevel={course.courseLevel}
            coursePrice={course.coursePrice}
          />
        ))}
      </div>
    </section>
  );
};

export default TopCourses;
