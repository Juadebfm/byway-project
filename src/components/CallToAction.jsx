import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ctaData = [
  {
    id: 1,
    ctaTitle: "",
    ctaImg: "/cta_female.svg",
    ctaBtnText: "",
    ctaPText: "",
  },
  {
    id: 2,
    ctaTitle: "Transform your life through education",
    ctaImg: "/cta_male.svg",
    ctaBtnText: "Checkout Courses",
    ctaPText:
      "Learners around the world are launching new careers, advancing in their fields, and enriching their lives.",
  },
];

const CallToAction = () => {
  return (
    <section className="p-[80px] w-[90%] mx-auto">
      <div className="grid grid-cols-2 items-center justify-center">
        <div>
          <img src="/cta_female.svg" alt="cta_female" />
        </div>

        <div className="w-[90%] space-y-4">
          <h3 className="text-black text-xl font-semibold leading-[1.5] capitalize">
            Become an instructor
          </h3>
          <p className="text-bywayBtnColor leading-tight">
            Instructors from around the world teach millions of students on
            Byway. We provide the tools and skills to teach what you love.
          </p>
          <button className="h-[48px] flex items-center justify-center gap-2 bg-[#020617] mt-3 text-white px-[24px] py-[13px] rounded-md">
            <span>Start your instructor journey</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-between mt-[60px]">
        <div className="w-[90%] space-y-4">
          <h3 className="text-black text-xl font-semibold leading-[1.5] capitalize">
            Become an instructor
          </h3>
          <p className="text-bywayBtnColor leading-tight">
            Instructors from around the world teach millions of students on
            Byway. We provide the tools and skills to teach what you love.
          </p>
          <button className="h-[48px] flex items-center justify-center gap-2 bg-[#020617] mt-3 text-white px-[24px] py-[13px] rounded-md">
            <span>Start your instructor journey</span>
            <FaArrowRight />
          </button>
        </div>
        <div className="ml-28">
          <img src="/cta_male.svg" alt="cta_female" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
