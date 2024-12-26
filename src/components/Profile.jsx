import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import bglogo from "../components/Images/bglg.jpeg"
const Profile = () => {
  return (
    <>
      <div className="relative  flex  mt-2 h-[50vh]  bg-cover bg-center   " style={{backgroundImage:`url(${bglogo})`}}>
      
       

        <div className="flex-1 h-full  flex items-center bg-gradient-to-r from-black/55 to-black/70   absolute z-50  p-2 sm:p-5 top-0   justify-start    right-0 left-0  ">
        
        <div className="sm:w-2/4   sm:bg-[#1c1f26]  flex flex-col gap-2 sm:gap-5 p-1 sm:p-5 rounded-md shadow-md">
          <h1 className=" text-2xl sm:text-3xl leading-snug text-white font-semibold ubuntu-medium ">
            Hi, I’m Mohit Sharma, a dedicated Web Developer skilled in
            building efficient, scalable, and user-friendly web applications
          </h1>
          <div className="flex text-white  text-lg sm:text-2xl gap-2 items-center  font-semibold">
            Hire Me as{" "}
            <h1 className="text-blue-500">
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

          <Button  className="sm:text-xl  text-sm py-2 bg-blue-500 hover:bg-blue-600">Know More About Me</Button>

          </div>
      
      </div>

    </div>
      </div>
    
    </>
  );
};

export default Profile;
