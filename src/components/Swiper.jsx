import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { swiperData } from "../data/courseData";

const SwiperContainer = () => {
  return (
    <div className="h-max lg:h-full p-0 lg:p-4 mt-20 lg:mt-16">
      <Swiper
        // Optional parameters
        direction="horizontal"
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        // Pagination
        pagination={{
          clickable: false,
        }}
        // Navigation arrows
        navigation={true}
        // Scrollbar
        scrollbar={{
          draggable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        // Additional styling
        className="h-max"
      >
        {swiperData.map(({ heading, image, paragraph, buttonText }) => (
          <SwiperSlide key={image}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-8 lg:mt-[65px] gap-[20px] lg:gap-[100px]">
              <div>
                <h1 className="font-bold text-[35px] lg:text-[40px] leading-[1.3] text-bywayTextDark mb-3">
                  {heading}
                </h1>
                <p className="leading-[1.6] text-bywayTextLight w-full lg:w-[90%]">
                  {paragraph}
                </p>
                <button className="w-full lg:w-max h-[53px] bg-bywayBlue mt-[24px] rounded-lg text-white px-6">
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
