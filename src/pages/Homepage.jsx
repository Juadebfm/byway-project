import React from "react";
import Swiper from "../components/Swiper";
import Stats from "../components/Stats";
import TopCategories from "../components/TopCategories";
import TopCourses from "../components/TopCourses";
import TopInstructor from "../components/TopInstructor";
import CustomerReviews from "../components/CustomerReviews";
import CallToAction from "../components/CallToAction";

const Homepage = () => {
  return (
    <main>
      <div className="h-[calc(100vh-70px)] px-[80px]">
        <Swiper />
      </div>
      <Stats />
      <TopCategories />
      <TopCourses />
      <TopInstructor />
      <CustomerReviews />
      <CallToAction />
    </main>
  );
};

export default Homepage;
