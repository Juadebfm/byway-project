import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import { customerReviewData } from "../data/courseData";

const CustomerReviews = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-[60px] px-[30px] lg:px-[80px] bg-gray-50 mt-[80px]">
      <div className="flex items-end justify-between mb-[40px]">
        <div>
          <h3 className="text-[32px] font-bold text-bywayTextDark mb-2 leading-none">
            What Our Customer Say
          </h3>
          <h4 className="text-[32px] font-bold text-bywayTextDark">About Us</h4>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex gap-2">
          <button
            className="swiper-button-prev-custom w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            className="swiper-button-next-custom w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={false} // Disable loop so arrows can disable at start/end
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="customer-reviews-swiper"
      >
        {customerReviewData.map(
          ({ id, reviewMessage, customerImg, customerName, customerJD }) => (
            <SwiperSlide key={id}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
                {/* Quote Icon */}
                <img src="/quotes.svg" alt="quotes" className="mb-4 mt-3" />

                {/* Review Message */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                  {reviewMessage}
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={customerImg}
                    alt={customerName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-bywayTextDark text-sm">
                      {customerName}
                    </h4>
                    <p className="text-gray-500 text-xs">{customerJD}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default CustomerReviews;
