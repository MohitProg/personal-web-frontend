import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useThemeContext } from "../context/ThemeContext";
const Filter = () => {
  const { darkmode } = useThemeContext();
  return (
    <>
      <div className={`${darkmode ? "dark" : ""}  `}>
        <div className="bg-white dark:bg-[#090D1F] py-4">
          <Swiper
            slidesPerView={3}
            modules={[Navigation]}
            // navigation={true}

            breakpoints={{
              // When the screen width is less than 640px
              640: {
                slidesPerView: 2,
              },
              // When the screen width is between 640px and 768px
              768: {
                slidesPerView: 4,
              },
              // When the screen width is between 768px and 1024px
              1024: {
                slidesPerView: 6,
              },
              // When the screen width is 1280px or more
              1280: {
                slidesPerView: 8,
              },
            }}
          >
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg font-semibold text-black transition-colors duration-200 ease-in-out border-1 border-black  ring-2 ring-black dark:ring-1 dark:ring-white hover:bg-black hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-white dark:hover:text-black shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Mobile
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg font-semibold text-black transition-colors duration-200 ease-in-out border-1 border-black  ring-2 ring-black dark:ring-1 dark:ring-white hover:bg-black hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-white dark:hover:text-black shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Laptop
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg font-semibold text-black transition-colors duration-200 ease-in-out border-1 border-black  ring-2 ring-black dark:ring-1 dark:ring-white hover:bg-black hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-white dark:hover:text-black shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Telivison
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg font-semibold text-black transition-colors duration-200 ease-in-out border-1 border-black  ring-2 ring-black dark:ring-1 dark:ring-white hover:bg-black hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-white dark:hover:text-black shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Computer
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Filter;
