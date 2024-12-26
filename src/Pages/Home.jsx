import React, { useState } from "react";
import BlogItem from "../components/BlogItem";
import { useThemeContext } from "../context/ThemeContext";
import SliderComponents from "../components/SliderComponents";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePageValue } from "../Redux/Slice/blogslice";
import Loader from "../components/Loader";
import Searchbar from "../components/Searchbar";
import Profile from "@/components/Profile";
import Filter from "@/components/Filter";

const Home = () => {
  // get recentblogdata
  const { recentblogdata, getallblogstatus } = useSelector(
    (state) => state.blog
  );

  // console.log(getallblogstatus)

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
    // console.log(value);
    dispatch(UpdatePageValue(value));
  };
  return (
    <>
      
        <div className=" p-1 sm:p-6 cmn-bg dark:bg-[#090D1F] relative">
          {/* search bar for small screen */}
          <div className="block sm:hidden   top-0 py-2 ">
            <Searchbar value={"block"} />
          </div>

          <Profile />
          <div className="  mt-3  sticky top-0   z-[999] ">
            {/* <h1>This is slider </h1> */}

          <Filter/>
          </div>

          {/* Recent Blog Posts Section */}
          {/* {recentblogdata?.length > 0 && localStorage.getItem("token") && (
            <section className="p-1 sm:p-4 mt-7">
              <h1 className="text-2xl ubuntu-medium font-semibold dark:text-white mb-5">
                Recent Blog Posts
              </h1>

              <div className="py-3 mt-3 w-full">
                <SliderComponents data={recentblogdata} />
              </div>
            </section>
          )} */}

          {/* All Blog Posts Section */}
          <section className=" p-2 sm:p-4 mt-2">
            <h1 className=" text-lg sm:text-2xl ubuntu-medium font-semibold text-white mb-5">
              All Blog Posts
            </h1>

            {getallblogs && getallblogs?.length > 0 ? (
              <>
                <div className="  sm:py-3 sm:mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                  {getallblogs?.map((value) => (
                    <BlogItem value={value} key={value._id} />
                  ))}
                </div>

                <div className="p-2 flex items-center justify-center mt-3 ">
                  <Pagination
                    count={Math.ceil(totalvalue / 8)}
                    onChange={HanldePagination}
                    variant="outlined"
                    color="primary"
                    
                  />
                </div>
              </>
            ) : getallblogstatus !== "fullfilled" ? (
              <>
                <Loader />
              </>
            ) : (
              <div className="w-full flex items-center justify-center h-screen">
                <h1 className="font-semibold ubuntu-regular-italic cmn-text   ">
                  No Blog is Available{" "}
                </h1>
              </div>
            )}
          </section>

          {/* Footer */}
          {/* Optional footer can be added here */}
        </div>
      
    </>
  );
};

export default Home;
