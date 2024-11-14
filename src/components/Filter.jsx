import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useThemeContext } from "../context/ThemeContext";
import { useLocation } from "react-router-dom";
const Filter = () => {
  const { darkmode } = useThemeContext();
  const {pathname}=useLocation()
  return (
    <>
      <div className={`${darkmode ? "dark" : ""}  ${["/profile","/admin/allblog","/admin/alluser","/addblog"].includes(pathname)?"hidden":"block"} `}>
        <div className="bg-white dark:bg-[#090D1F] py-2 relative">
          <h1 className="p-3 px-5 text-gary-700 dark:text-[#C0C5D0] text-xl font-semibold ">
            Category
          </h1>
          <Swiper
          className="  w-3/4 mx-auto mt-2 "
            onInit={(swiper) => {
              swiper.params.navigation.nextEl = ".custom-next";
              swiper.params.navigation.prevEl = ".custom-prev";
             
            }}

            onSwiper={(swiper) => {
              // Update navigation in case Swiper needs to reinitialize
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            slidesPerView={2}
            modules={[Navigation]}
            
            breakpoints={{
              // When the screen width is less than 640px
              640: {
                slidesPerView: 2,
                spaceBetween:20
              },
              // When the screen width is between 640px and 768px
              768: {
                slidesPerView: 3,
              },
              // When the screen width is between 768px and 1024px
              1024: {
                slidesPerView: 1,
              },
              // When the screen width is 1280px or more
              1280: {
                slidesPerView: 6,
                spaceBetween:10
              },
            }}
          >
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Mobile
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Laptop
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Telivison
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Computer
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Computer
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Computer
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Computer
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Computer
                </button>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Computer
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Computer
                </button>
              </div>
            </SwiperSlide><SwiperSlide>
              <div className="mx-auto flex items-center justify-center p-1">
                <button className="px-3 py-1 text-lg rounded-md ring-1 ring-[#6941C6] font-semibold text-[#6941C6] transition-colors duration-200 ease-in-out   dark:ring-1 dark:ring-white hover:bg-[#6941C6] hover:text-white dark:text-white dark:border-white dark:bg-transparent dark:hover:bg-[#6941C6] dark:hover:text-white shadow-lg hover:shadow-md dark:hover:shadow-lg">
                  Computer
                </button>
              </div>
            </SwiperSlide>
          </Swiper>

             {/* custom button for swiper  */}

      {/* right arrow button  */}
      <div  className=" custom-next bg-gray-300 hover:bg-[#5941C6]  transition-colors duration-200 ease-in-out  p-1 sm:p-2 rounded-full absolute right-0  top-[55%] ">
        <button>

        <ArrowRightIcon />
        </button>
      </div>

      {/* right left arrow button  */}
      <div className=" custom-prev bg-gray-300 hover:bg-[#5941C6]  transition-colors duration-200 ease-in-out  p-1  sm:p-2 rounded-full absolute left-0  top-[55%] ">
        <button>

        <ArrowLeftIcon />
        </button>
      </div>
        </div>
      </div>

   
    </>
  );
};

export default Filter;
