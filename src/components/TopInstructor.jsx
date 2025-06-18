import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mentorData } from "../data/courseData";
import { FaStar } from "react-icons/fa";

const TopInstructor = () => {
  const [showAll, setShowAll] = useState(false);

  let displayedMentors;
  if (showAll === true) {
    displayedMentors = mentorData;
  } else {
    displayedMentors = mentorData.slice(0, 4);
  }

  return (
    <section className="mt-[60px] px-[80px]">
      <div className="flex items-end justify-between mb-[24px]">
        <h3 className="capitalize text-[24px] text-bywayTextDark font-[700]">
          Top instructors
        </h3>

        <Link
          onClick={() => setShowAll(!showAll)}
          to="/"
          className="capitalize text-sm font-medium text-bywayBlue hover:underline underline-offset-4 duration-300 transition-all"
        >
          {showAll ? "Close Show" : "See All"}
        </Link>
      </div>

      <div className="grid grid-cols-4 items-center justify-between gap-[36px]">
        {displayedMentors.map(
          ({
            id,
            mentorImage,
            mentorName,
            mentorSpecialization,
            starRating,
            noOfStudentsHandled,
          }) => (
            <div
              key={id}
              className="border border-[#E2E8F0] rounded-lg p-[18px] w-[300px]"
            >
              <img
                src={mentorImage}
                alt={mentorName}
                className="h-[132px] w-full rounded-md mb-[18px]"
              />

              <div className="flex flex-col items-center justify-center pb-[18px] border-b border-b-[#e2e8f0]">
                <span className="text-lg text-bywayTextDark capitalize font-bold">
                  {mentorName}
                </span>
                <span className="text-bywayBtnColor text-sm">
                  {mentorSpecialization}
                </span>
              </div>

              <div className="pt-[16px] flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <FaStar className="text-[#EAB308]" />
                  <span className="text-xs font-semibold">{starRating}</span>
                </span>
                <span className="text-xs font-bold text-bywayBtnColor">
                  {noOfStudentsHandled}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TopInstructor;
