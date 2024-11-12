import React, { useState } from "react";
import BlogItem from "../components/BlogItem";
import NewsLatter from "../components/NewsLatter";
import { projectsdataofblog } from "../data/blogdata";
import MainHead from "../components/MainHead";
import { useThemeContext } from "../context/ThemeContext";

const Projects = () => {
  const [projectdata, setprojectdata] = useState(projectsdataofblog);
  const {darkmode}=useThemeContext()
  return (

    <div className={`${darkmode ? "dark" : ""}`}>
    <div className="p-6 dark:bg-[#090D1F]">
      {/* Heading */}
      <MainHead Text={"PROJECTS"} />
  
      {/* List of Projects */}
      <section className="p-6 mt-7">
        <h1 className="text-2xl font-semibold dark:text-white mb-5">List of Projects</h1>
  
        <div className="py-3 mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {projectdata &&
            projectdata.map((value) => (
              <div key={value.id} >
                <BlogItem value={value} />
              </div>
            ))}
        </div>
      </section>
    </div>
  </div>
  
  );
};

export default Projects;
