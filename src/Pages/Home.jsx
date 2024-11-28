import React, { useState } from "react";
import BlogItem from "../components/BlogItem";
import { blogdata } from "../data/blogdata";
import { Recentblogdata } from "../data/blogdata";
import MainHead from "../components/MainHead";
import { useThemeContext } from "../context/ThemeContext";
import SliderComponents from "../components/SliderComponents";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePageValue } from "../Redux/Slice/blogslice";
import Loader from "../components/Loader";
import Searchbar from "../components/Searchbar";

const Home = () => {
  // get recentblogdata
  const { recentblogdata, getallblogstatus } = useSelector(
    (state) => state.blog
  );

  console.log(getallblogstatus)

  // dispatch
  const dispatch = useDispatch();
  // context for a dark mode
  const { darkmode } = useThemeContext();
  // data of blog from store
  const { getallblogs, totalvalue, pagevalue } = useSelector(
    (state) => state.blog
  );

  // functionality to handle pagination
  const HanldePagination = (e, value) => {
    console.log(value);
    dispatch(UpdatePageValue(value));
  };
  return (
    <>
      <div className={`${darkmode ? "dark" : ""}`}>
        <div className=" px-6 sm:p-6 dark:bg-[#090D1F]">
          {/* search bar for small screen */}
          <div className="block sm:hidden py-1">
            <Searchbar value={"block"} />
          </div>
          {/* Heading */}
          <div className="border-b-2 border-t-2 border-gray-400 mt-8">
            <h1 className="text-center text-4xl dark:text-white  sm:text-9xl lg:text-[10rem] font-bold">
              WEBTECH BLOG
            </h1>
          </div>

          {/* Recent Blog Posts Section */}
          {recentblogdata?.length > 0 && (
            <section className="p-1 sm:p-4 mt-7">
              <h1 className="text-2xl font-semibold dark:text-white mb-5">
                Recent Blog Posts
              </h1>

              <div className="py-3 mt-3 w-full">
                <SliderComponents data={recentblogdata} />
              </div>
            </section>
          )}

          {/* All Blog Posts Section */}
          <section className="p-1 sm:p-4 mt-5">
            <h1 className="text-2xl font-semibold dark:text-white mb-5">
              All Blog Posts
            </h1>

            {getallblogs && getallblogs?.length > 0 ? (
              <>
                <div className="py-3 mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-3">
                  {getallblogs?.map((value) => (
                    <BlogItem value={value} key={value._id} />
                  ))}
                </div>

                <div className="p-2 flex items-center justify-center mt-3 ">
                  <Pagination
                    count={Math.ceil(totalvalue / 8)}
                    onChange={HanldePagination}
                    variant="outlined"
                    color="secondary"
                  />
                </div>
              </>
            ) : getallblogstatus !== "fullfilled" ? (
              <>
                <Loader />
              </>
            ) : (
              <div className="w-full flex items-center justify-center">
                <h1 className="font-semibold  ">No Blog is Available </h1>
              </div>
            )}
          </section>

          {/* Footer */}
          {/* Optional footer can be added here */}
        </div>
      </div>
    </>
  );
};

export default Home;
