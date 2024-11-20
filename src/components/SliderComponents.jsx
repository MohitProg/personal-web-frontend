import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useThemeContext } from "../context/ThemeContext";
import BlogItem from "./BlogItem";
const SliderComponents = ({ data }) => {
  const { darkmode } = useThemeContext();
  return (
    <>
      <div className={`${darkmode ? "dark" : ""} `}>
      <Swiper
  slidesPerView={1} // Default for the smallest screen
  modules={[Navigation]}
  spaceBetween={20}
  navigation={false}
  className="bg-white dark:bg-[#090D1F] "
  breakpoints={{
    640: {
      slidesPerView: 2,
      navigation:true,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation:true,
    },
    1024: {
        navigation:true,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
        navigation:true,
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }}
>

          {data &&
            data.map((value) => (
              <SwiperSlide key={value._id}>
                
                  <BlogItem value={value} />
                
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderComponents;
