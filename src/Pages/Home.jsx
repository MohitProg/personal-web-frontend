import React, { useState } from "react";
import BlogItem from "../components/BlogItem";
import { blogdata } from "../data/blogdata";
import { Recentblogdata } from "../data/blogdata";
import MainHead from "../components/MainHead";
import { useThemeContext } from "../context/ThemeContext";
import SliderComponents from "../components/SliderComponents";

const Home = () => {
  const [blogsdata, setblogsdata] = useState(blogdata);
  const [recentblogdata, setrecentblogdata] = useState(Recentblogdata);
  const { darkmode } = useThemeContext();
  return (
    <>
      <div className={`${darkmode ? "dark" : ""}`}>
        <div className="p-6 dark:bg-[#090D1F]">
          {/* Heading */}
          <div className="border-b-2 border-t-2 border-gray-400">
            <h1 className="text-center text-4xl dark:text-white  sm:text-9xl lg:text-[10rem] font-bold">
              WEBTECH BLOG
            </h1>
          </div>

          {/* Recent Blog Posts Section */}
          <section className="p-1 sm:p-4 mt-7">
            <h1 className="text-2xl font-semibold dark:text-white mb-5">
              Recent Blog Posts
            </h1>

            <div className="py-3 mt-3 w-full">
              {/* You can uncomment this when you have the data */}
              {/* {recentblogdata &&
          recentblogdata?.map((value) => (
            <BlogItem key={value.id} value={value} />
          ))} */}
              <SliderComponents data={recentblogdata} />
            </div>
          </section>

          {/* All Blog Posts Section */}
          <section className="p-1 sm:p-4 mt-5">
            <h1 className="text-2xl font-semibold dark:text-white mb-5">
              All Blog Posts
            </h1>

            <div className="py-3 mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {blogsdata &&
                blogsdata.map((value) => (
                  <BlogItem value={value} key={value.id} />
                ))}
            </div>
          </section>

          {/* Footer */}
          {/* Optional footer can be added here */}
        </div>
      </div>
    </>
  );
};

export default Home;
