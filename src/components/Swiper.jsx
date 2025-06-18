import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { swiperData } from "../data/courseData";

const SwiperContainer = () => {
  return (
    <div className="h-full p-4">
      <Swiper
        // Optional parameters
        direction="horizontal"
        loop={true}
        modules={[Autoplay]}
        // Pagination
        pagination={{
          clickable: true,
        }}
        // Navigation arrows
        navigation={true}
        // Scrollbar
        scrollbar={{
          draggable: true,
        }}
        autoplay={{
          delay: 5000, // 5 seconds between slides
          disableOnInteraction: true, // Continue autoplay after user interactions
        }}
        // Additional styling
        className="h-screen"
      >
        {swiperData.map(({ heading, image, paragraph, buttonText }) => (
          <SwiperSlide key={image}>
            <div className="grid grid-cols-2 items-center justify-center mt-[65px] gap-[100px]">
              <div>
                <h1 className="font-bold text-[40px] leading-[1.3] text-bywayTextDark mb-3">
                  {heading}
                </h1>
                <p className="leading-[1.6] text-bywayTextLight w-[90%]">
                  {paragraph}
                </p>
                <button className="min-w-[219px] h-[53px] bg-bywayBlue mt-[24px] rounded-lg text-white px-6">
                  {buttonText}
                </button>
              </div>

              <div>
                <img src={image} alt="Hero Image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
