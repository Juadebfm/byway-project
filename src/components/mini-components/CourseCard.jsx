import { Link } from "react-router-dom";
import StarRating from "../StarRatings";

const CourseCard = ({
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
}) => {
  return (
    <Link
      to={`/course/${id}`}
      className="border border-[#E2E8F0] p-[30px] lg:p-[18px] h-[338px] rounded-xl relative shadow-lg cursor-pointer hover:shadow-2xl duration-300 transition-all ease-linear block"
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
        <span className="text-bywayTextLight text-sm">By {courseAuthor}</span>

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
    </Link>
  );
};

export default CourseCard;
