import { ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { courseData, mentorData } from "../data/courseData";
import { TbWorld } from "react-icons/tb";

const CoursePageHero = () => {
  const { id } = useParams();
  const course = courseData.find((course) => course.id.toString() === id);

  return (
    <section className="pt-20 bg-[#F8FAFC] h-max lg:h-[70vh] flex flex-col lg:flex-row justify-between pr-0 lg:pr-20 relative">
      {/* Left Side */}
      <div className="px-9 lg:px-20">
        <div className=" text-[#1B4B66] flex items-center justify-start pt-10 space-x-3 text-xs lg:text-sm">
          <span>Home</span> <ChevronRight size={16} /> <span>Categories</span>
          <ChevronRight size={16} />
          <span className="text-bywayBlue">{course.courseTitle}</span>
        </div>

        <h1 className="text-3xl lg:text-[40px] font-bold mt-10">
          {course.courseTitle}
        </h1>
        <p className="text-bywayBtnColor/80 leading-6 w-full lg:w-[60%] mt-4">
          This course is meticulously crafted to provide you with a foundational
          understanding of the principles, methodologies, and tools that drive
          exceptional user experiences in the digital landscape.
        </p>
        <div className="mt-4 flex flex-col lg:flex-row items-center space-x-3">
          <div className="text-[#FEC84B] flex items-center justify-start space-x-2">
            <span>4.6</span>
            <span className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="text-bywayBtnColor">(651651 rating)</span>
          </div>
          <span className="hidden lg:block">|</span>
          <span>22 Total Hours. 155 Lectures. All levels</span>
        </div>

        <div className="flex items-center justify-start mt-4 text-sm">
          <img
            src={course.courseImg}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-3 mr-2 capitalize">created by</span>
          <span className="text-bywayBlue">{course.courseAuthor}</span>
        </div>

        <div className="flex items-center mt-4 mb-6 lg:mb-0">
          <TbWorld /> <span className="ml-2">English</span>,{" "}
          <span>Spanish</span>,<span>Italian</span>, <span>German</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[90%] mx-auto mt-14 lg:w-[400px] static lg:absolute right-20 top-28 border shadow-xl rounded-lg bg-white">
        <div className="p-6">
          <img
            src={course.courseImg}
            alt=""
            className="h-[200px] w-full mb-6 rounded-xl"
          />
          <div className="space-x-2">
            <span className="text-bywayTextDark font-bold text-[22px]">
              $49.5
            </span>
            <span className="line-through text-bywayTextLight">$99.5</span>
            <span className="text-[#16A34A] font-semibold text-xl">
              50% Off
            </span>
          </div>

          <div className="w-full">
            <button className="bg-[#020617] w-full h-12 mt-6 text-white rounded-md text-sm font-medium">
              Add to cart
            </button>
            <button className="bg-transparent border border-[#020617] w-full h-12 mt-3 text-[#020617] rounded-md text-sm font-medium">
              Buy Now
            </button>
          </div>
        </div>

        <div className="border-t border-t-[#E2E8F0] p-6">
          <p>Share</p>
          <img src="/socials.svg" alt="" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default CoursePageHero;
