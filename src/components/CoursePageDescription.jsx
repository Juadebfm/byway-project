import React from "react";
import { useParams } from "react-router-dom";
import { courseData, mentorData } from "../data/courseData";
import { FaAward } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { CiPlay1 } from "react-icons/ci";
import SyllabusAccordion from "./mini-components/SyllabusAccordion";
import LearnerReviewsComponent from "./LearnerReviewsComponent";

const CoursePageDescription = () => {
  const { id } = useParams();
  const course = courseData.find((course) => course.id.toString() === id);

  const mentor = mentorData.find(
    (mentor) => mentor.mentorName === course?.courseAuthor
  );

  const buttonTexts = ["Description", "Instructor", "Syllabus", "Reviews"];
  return (
    <section className="px-9 lg:px-20 mt-7 w-full lg:w-[70%]">
      <div className="flex flex-col lg:block space-x-0 space-y-3 lg:space-y-0 lg:space-x-5 border-b pb-8">
        {buttonTexts.map((text, index) => (
          <button
            className={`min-w-[148px] h-[57px] py-4 px-6 border cursor-pointer rounded-md ${
              index === 0 ? "bg-[#EFF6FF]" : ""
            }`}
            key={text}
          >
            {text}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-bywayTextDark">
          Course Description
        </h2>
        <p className="w-full lg:w-[90%] mt-2 text-bywayBtnColor">
          This interactive e-learning course will introduce you to User
          Experience (UX) design, the art of creating products and services that
          are intuitive, enjoyable, and user-friendly. Gain a solid foundation
          in UX principles and learn to apply them in real-world scenarios
          through engaging modules and interactive exercises.{" "}
        </p>
      </div>

      <div className="mt-6 border-b pb-5">
        <h2 className="text-xl font-semibold text-bywayTextDark">
          Certification
        </h2>
        <p className="w-full lg:w-[90%] mt-2 text-bywayBtnColor">
          At Byway, we understand the significance of formal recognition for
          your hard work and dedication to continuous learning. Upon successful
          completion of our courses, you will earn a prestigious certification
          that not only validates your expertise but also opens doors to new
          opportunities in your chosen field.
        </p>
      </div>

      <div className="mt-6 border-b pb-5">
        <h2 className="text-xl font-semibold text-bywayTextDark mb-6">
          Instructor
        </h2>

        <div>
          <p className="text-xl font-bold capitalize text-bywayBlue">
            {course.courseAuthor}
          </p>
          <p className="text-bywayDirBtnColor font-light">
            {mentor ? mentor.mentorSpecialization : "Instructor"}
          </p>

          <div className="mt-4 flex gap-4 items-center">
            <img
              src={mentor.mentorImage}
              alt={mentor.mentorName}
              className="rounded-full w-32 h-32"
            />
            <div className="space-y-2">
              <span className="flex items-center gap-2 text-bywayTextDark text-sm">
                <FaAward />{" "}
                <span>{course.noOfRatings.toLocaleString()} Reviews</span>
              </span>
              <span className="flex items-center gap-2 text-bywayTextDark text-sm">
                <HiMiniAcademicCap />
                <span>500 Students</span>
              </span>
              <span className="flex items-center gap-2 text-bywayTextDark text-sm">
                <CiPlay1 />
                <span>15 Courses</span>
              </span>
            </div>
          </div>

          <p className="text-bywayBtnColor mt-3">
            With over a decade of industry experience, Ronald brings a wealth of
            practical knowledge to the classroom. He has played a pivotal role
            in designing user-centric interfaces for renowned tech companies,
            ensuring seamless and engaging user experiences.
          </p>
        </div>
      </div>

      <div className="border-b pb-10">
        <SyllabusAccordion />
      </div>
    </section>
  );
};

export default CoursePageDescription;
