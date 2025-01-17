import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import NewsLatter from "../components/NewsLatter";
import { projectsdataofblog } from "../data/blogdata";
import MainHead from "../components/MainHead";
import { useThemeContext } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { Getblogbycategory } from "../Redux/Api/blogApi";
import { Pagination } from "@mui/material";
import Loader from "../components/Loader";

const Projects = () => {
  const [projectdata, setprojectdata] = useState(projectsdataofblog);
  const { darkmode } = useThemeContext();
  // get data
  const { blogsbycategory, blogcategorystatus } = useSelector(
    (state) => state.blog
  );
  console.log(blogsbycategory);
  // calling dispatch
  const dispatch = useDispatch();
  // get personal project data
  useEffect(() => {
    dispatch(Getblogbycategory(["Personal Project"]));
  }, []);
  return (

      <div className="p-2 cmn-parent-bg">
        {/* Heading */}
        <div className="sm:border-b-2 border-gray-400">
          <h1 className="text-center ubuntu-bold text-4xl  text-white  sm:text-9xl lg:text-[10rem] font-bold">
            PROJECTS
          </h1>
        </div>

        {/* List of Projects */}
        <section className="sm:p-6 mt-7">
          {/* <h1 className="text-2xl font-semibold ubuntu-medium dark:text-white mb-5">
            List of Projects
          </h1> */}

          {blogcategorystatus !== "fullfilled" ? (
            // Show loader while the data is being fetched
            <Loader />
          ) : blogsbycategory && blogsbycategory.length > 0 ? (
            <>
              <div className="py-3 mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {blogsbycategory.map((value) => (
                  <BlogItem value={value} key={value.id} />
                ))}
              </div>
          
            </>
          ) : (
            // Show a message if no projects are available
            <div className="w-full flex min-h-52 items-center justify-center">
              <h1 className="font-semibold">No Projects Available</h1>
            </div>
          )}
        </section>
      </div>
    
  );
};

export default Projects;
