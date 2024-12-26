import React, { useState } from "react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { useLocation } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { UpdateCategoryValue } from "@/Redux/Slice/blogslice";


const Filter = () => {

  const {pathname}=useLocation();
  const dispatch=useDispatch();
  const [select,setselect]=useState("All Blogs")
  

  // category option for search 
  const categorydata = [
    "All Blogs",
    "Personal Project",
    "Programming Tutorials",
    "Web Development",
    "Mobile App Development",
    "Data Science & AI",
    "Cybersecurity",
    "Cloud Computing",
    "Tech News & Trends",
    "Educational Tools & Apps",
    "Study Tips & Strategies",
    "Online Learning Platforms",
    "Software Development",
    "Coding Challenges",
    "Tech Careers & Job Advice",
    "Programming Languages",
    "Open Source Projects",
    "Tech Gadgets & Reviews",
    "Startups & Entrepreneurship",
    "Machine Learning & AI",
    "Blockchain & Cryptocurrency",
    "UI/UX Design",
    "DevOps & Automation",
    "Networking & Server Management",
    "Tech Conferences & Events",
    "Digital Marketing",
    "EdTech Innovations",
    "E-Learning Development",
  ];


  const handleUpadteCategory=(cat)=>{
    dispatch(UpdateCategoryValue(cat))
    setselect(cat)

  }

  return (
    <>
     
        <div className="cmn-bg mt-5 p-2  ">
        <Carousel
      opts={{
        align: "start",
        
      }}
      className=" sm:w-[90%]  mx-auto"
    >
      <CarouselContent className="flex items-center">
        {categorydata.map((value, index) => (
          <CarouselItem key={index} className="basis-2/3 sm:basis-2/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <button onClick={()=>handleUpadteCategory(value)}  className={` ${value===select?"bg-blue-500":""} w-full bg-[#1c1f26]  cmn-text font-bold shadow-lg flex items-center justify-center rounded-full p-2`}>
              {value}
              
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex items-center justify-center bg-[#1c1f26] cmn-text hover:bg-blue-500 border-none cursor-pointer hover:text-white" />
      <CarouselNext className="hidden sm:flex items-center justify-center bg-[#1c1f26] cmn-text hover:bg-blue-500 border-none cursor-pointer hover:text-white" />
    </Carousel>
          
          </div>  

   
    </>
  );
};

export default Filter;
