import { IoFilterOutline } from "react-icons/io5";
import RatingAccordion from "../components/mini-components/RatingAccordion";
import ChaptersAccordion from "../components/mini-components/ChaptersAccordion";
import { courseData, mentorData } from "../data/courseData";
import StarRating from "../components/StarRatings";
import { FaStar } from "react-icons/fa";

const CategoryPage = () => {
  return (
    <main className="text-bywayTextDark min-h-screen mt-32">
      <h1 className="font-bold text-[40px] leading-7 mb-6 px-8 lg:px-20">
        Design Courses
      </h1>
      <h2 className="text-2xl capitalize font-bold px-8 lg:px-20">
        All development courses
      </h2>

      {/* Filter Topics */}
      <section className="flex items-center justify-between mt-6 px-8 lg:px-20">
        <button className="min-w-[112px] h-[48px] border border-bywayTextDark flex items-center justify-center gap-3 rounded-md">
          <IoFilterOutline className="text-xl" />
          <span className="capitalize font-medium text-sm">filter</span>
        </button>

        <div className="flex items-center justify-center gap-4">
          <span>Sort By</span>
          <button className="min-w-[112px] h-[48px] font-medium text-sm border border-bywayTextDark flex items-center justify-center gap-3 rounded-md">
            Relevance
          </button>
        </div>
      </section>

      {/* Mid Section - Filter */}
      <section className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-14 lg:gap-4 mt-14 mb-20 px-8 lg:px-20">
        <div className="space-y-6">
          <RatingAccordion />
          <ChaptersAccordion />
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-[20px] lg:gap-[36px]">
            {courseData.map(
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
                  className="border border-[#E2E8F0] p-[30px] lg:p-[18px] h-[338px] rounded-xl relative shadow-lg cursor-pointer hover:shadow-2xl duration-300 transition-all ease-linear"
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
        </div>
      </section>

      {/* Mentors */}
      <section className="my-[60px] bg-[#F8FAFC] px-8 lg:px-20">
        <div className="flex items-end justify-between mb-[24px]">
          <h3 className="capitalize text-[24px] text-bywayTextDark font-[700]">
            Popular Mentors
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center justify-between gap-[36px]">
          {mentorData
            .slice(0, 5)
            .map(
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
                  className="border border-[#E2E8F0] bg-white rounded-lg p-[18px] w-full"
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
                      <span className="text-xs font-semibold">
                        {starRating}
                      </span>
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

      {/* Courses */}
      <section className="mt-[60px] px-8 lg:px-20 pb-14 lg:pb-20">
        <div className="flex items-end justify-between mb-[24px]">
          <h3 className="capitalize text-[24px] text-bywayTextDark font-[700]">
            Featured Courses
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-[20px] lg:gap-[36px]">
          {courseData
            .slice(0, 4)
            .map(
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
                  className="border border-[#E2E8F0] p-[30px] lg:p-[18px] h-[338px] rounded-xl relative shadow-lg cursor-pointer hover:shadow-2xl duration-300 transition-all ease-linear"
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
    </main>
  );
};

export default CategoryPage;
