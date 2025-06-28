import { useParams } from "react-router-dom";
import { courseData } from "../data/courseData";
import { ChevronRight } from "lucide-react";
import CoursePageHero from "../components/CoursePageHero";
import CoursePageDescription from "../components/CoursePageDescription";
import LearnerReviewsComponent from "../components/LearnerReviewsComponent";
import CustomerReviews from "../components/CustomerReviews";
import CourseCard from "../components/mini-components/CourseCard";

const CoursePage = () => {
  const { id } = useParams();
  //   Find the course by ID
  const course = courseData.find((course) => course.id.toString() === id);

  console.log(course);

  // If the course can't be found display below
  if (!course) {
    return (
      <section className="min-h-screen flex items-center justify-center px-[30px] lg:px-[80px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-bywayTextDark mb-4">
            Course Not Found
          </h1>
          <p className="text-bywayTextLight mb-6">
            The course you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="bg-bywayBlue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Go Back Home
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className=" min-h-screen">
      <CoursePageHero />
      <CoursePageDescription />
      <LearnerReviewsComponent />
      <CustomerReviews />
      <section className="mt-0 lg:mt-[60px] px-[30px] lg:px-[80px] pb-20">
        <div className="flex items-end justify-between mb-[24px]">
          <h3 className="capitalize text-[24px] text-bywayTextDark font-[700]">
            More Courses Like This
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-[20px] lg:gap-[36px]">
          {courseData.slice(0, 4).map((course) => (
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
    </section>
  );
};

export default CoursePage;
