import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import bglogo from "../components/Images/bglg.jpeg"
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <div className="relative  flex  mt-2 h-[80vh] bg-fixed  bg-cover bg-center   " style={{backgroundImage:`url(${bglogo})`}}>
      
       

        <div className="flex-1 h-full  flex items-center bg-gradient-to-r from-black/20 to-black/40   absolute z-50  p-2 sm:p-5 top-0   justify-start    right-0 left-0  ">
        
        <div className="  lg:w-2/4  sm:cmn-child-bg  flex flex-col gap-2 sm:gap-5 p-1 sm:p-5 rounded-lg   shadow-md">
          <h1 className=" text-2xl sm:text-2xl lg:text-2xl leading-snug text-white font-semibold ubuntu-medium ">
            Hi, I’m Mohit Sharma, a dedicated Web Developer skilled in
            building efficient, scalable, and user-friendly web applications
          </h1>
          <div className="flex main-text  text-lg sm:text-2xl gap-2 items-center  font-semibold">
            Hire Me as{" "}
            <h1 className="text-[#d78330] font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Backend Developer",
                    "React Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />{" "}
            </h1>
          </div>
          <div>

          <Link to={"/about"}  className=" cmn-btn main-text font-bold">Know More About Me</Link>

          </div>
      
      </div>

    </div>
      </div>
    
    </>
  );
};

export default Profile;
