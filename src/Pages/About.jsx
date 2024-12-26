import React from "react";
import { useThemeContext } from "../context/ThemeContext";

const About = () => {
  const {darkmode}=useThemeContext();
  return (
    
    <div className="cmn-bg">
      <section className="w-full p-2 sm:p-6 lg:w-3/4 mx-auto">
        <div className="border-b-2 border-t-2 border-gray-400 mb-6">
          <h1 className="text-center ubuntu-bold text-4xl sm:text-6xl lg:text-[8rem] font-bold text-white transition-all duration-300 ease-in-out">
            MOHIT SHARMA
          </h1>
        </div>
  
        <div className="sm:p-4 w-full mt-6">
          <img
            className="w-full mx-auto object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            src="https://res.cloudinary.com/domcmvqa3/image/upload/v1727754484/grfjzgex2x5h1xhxfiib.jpg"
            alt="Mohit Sharma"
          />
        </div>
  
        {/* info div */}
        <div className="p-4 flex flex-col gap-6">
          {/* About Me */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl ubuntu-medium font-semibold text-white dark:text-white">
              About Me
            </span>
            <p className="text-lg ubuntu-regular  cmn-text leading-relaxed">
              I’m an enthusiastic web developer with a strong foundation in React
              Js, Node Js, Mongodb, Tailwind CSS, and JavaScript, honed through
              personal projects and self-learning on YouTube. I’m eager to
              contribute my skills as a Frontend Developer, React Developer,
              Backend Developer, Full Stack Developer, or MERN Stack Developer,
              and take on innovative projects in the industry.
            </p>
          </div>
  
          {/* Skills */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-semibold ubuntu-medium text-white ">
              Skills
            </span>
            <ul className="flex ubuntu-regular flex-col text-lg list-disc pl-6 cmn-text">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>Redux Toolkit</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>C Programming</li>
              <li>Postman</li>
              <li>GitHub</li>
              <li>Render</li>
              <li>Cloudinary</li>
              <li>TypeScript</li>
            </ul>
          </div>
  
          {/* Experience */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-semibold ubuntu-medium text-white">
              Experience
            </span>
            <ul className="flex ubuntu-regular flex-col text-lg list-disc pl-6 cmn-text">
              <li>Worked as a Frontend Developer at IDesign.Market</li>
              <li>Built new feature functionalities for the company</li>
              <li>Fixed client-side bugs and issues in the company</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
 
  


  );
};

export default About;
