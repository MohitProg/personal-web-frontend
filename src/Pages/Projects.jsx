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
    <div className={`${darkmode ? "dark" : ""}`}>
      <div className="p-6 dark:bg-[#090D1F]">
        {/* Heading */}
        <div className="border-b-2 border-t-2 border-gray-400">
          <h1 className="text-center text-4xl dark:text-white  sm:text-9xl lg:text-[10rem] font-bold">
            PROJECTS
          </h1>
        </div>

        {/* List of Projects */}
        <section className="sm:p-6 mt-7">
          <h1 className="text-2xl font-semibold dark:text-white mb-5">
            List of Projects
          </h1>

          {blogcategorystatus !== "fullfilled" ? (
            // Show loader while the data is being fetched
            <Loader />
          ) : blogsbycategory && blogsbycategory.length > 0 ? (
            <>
              <div className="py-3 mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-3">
                {blogsbycategory.map((value) => (
                  <BlogItem value={value} key={value.id} />
                ))}
              </div>
              {/* Uncomment and adjust Pagination when needed */}
              {/* <div className="p-2 flex items-center justify-center mt-3">
          <Pagination count={10} variant="outlined" color="secondary" />
      </div> */}
            </>
          ) : (
            // Show a message if no projects are available
            <div className="w-full flex min-h-52 items-center justify-center">
              <h1 className="font-semibold">No Projects Available</h1>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Projects;
