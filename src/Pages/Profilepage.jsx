import React, { useState } from "react";
import BlogItem from "../components/BlogItem";

import { useThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LogoutUser } from "../Redux/Api/userApi";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
const Profilepage = () => {
  // theme context
  const { darkmode } = useThemeContext();
  // geting user data
  const { userdata } = useSelector((state) => state.user);
  const { userblog, savedblogdata, getsaveblogstatus, userblogstatus } =
    useSelector((state) => state.blog);

  // state for tabs
  const [tabs, settabs] = useState({
    tab: "Your blog",
  });

  return (
    <>
      {/* main page  */}

      <div className=" w-full flex flex-col  cmn-parent-bg   gap-4 p-2 sm:p-1  ">
        {/* Profile Section */}
        <div className=" w-full sm:w-1/2 mx-auto  mt-4 bg-[#1c1f26]   max-h-screen flex flex-col gap- rounded-xl shadow-lg p-1 sm:p-4">
          <div className="flex  flex-col  items-center ">
            <div className="flex  gap-2  p-2">
              <Avatar className="h-20 w-20">
                <AvatarImage className="object-cover" src={userdata?.avatar} />
                <AvatarFallback>Logo</AvatarFallback>
              </Avatar>

              {/* User Details */}
              <div className=" space-y-1">
                <h1 className="text-2xl ubuntu-bold font-bold  text-white">
                  {userdata?.name}
                </h1>

                <p className="text-sm ubuntu-medium cmn-text leading-relaxed ">
                  {userdata?.email}
                </p>
                <p className="text-sm ubuntu-light main-text leading-relaxed ">
                  {userdata?.desc}
                </p>
              </div>
            </div>
            {/* Avatar */}
          </div>

          {/* Settings Section */}
          <div className="text-gray-600    flex items-center justify-between py-2 ">
            <ul className=" ubuntu-regular flex  items-center gap-3  ">
              <li onClick={() => settabs({ tab: "Your blog" })}>
                <btton className="cmn-btn main-text rounded-full">
                  Your Blog
                </btton>
              </li>
              <li onClick={() => settabs({ tab: "Saved blog" })}>
                <button className="cmn-btn main-text rounded-full">
                  Saved Blog
                </button>
              </li>

              <li className="flex items-center justify-center ">
                <Link to={"/addblog"}>
                  <button className="cmn-btn main-text rounded-full">
                    Add Blog
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Blog Section */}

        {tabs?.tab === "Your blog" ? (
          <>
            {userblogstatus !== "fullfilled" ? (
              <>
                <div className="w-full">
                  <Loader />
                </div>
              </>
            ) : (
              <div>
                {userblog && userblog?.length > 0 ? (
                  <div className="flex-grow col-span-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4  gap-6 sm:p-4">
                    {userblog.map((value) => (
                      <BlogItem value={value} key={value?._id} />
                    ))}
                  </div>
                ) : (
                  <div className="cmn-text h-screen flex items-center  justify-center">
                    No Blog is Available
                  </div>
                )}
              </div>
            )}
          </>
        ) : tabs?.tab === "Saved blog" ? (
          <>
            <div>
              {savedblogdata && savedblogdata?.length > 0 ? (
                <div className="flex-grow grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4  gap-6 sm:p-4">
                  <>
                    {savedblogdata.map((value) => (
                      <BlogItem value={value} />
                    ))}
                  </>
                </div>
              ) : (
                <div className="cmn-text h-screen flex items-center  justify-center">
                  No Blog is Available
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="w-full flex items-center justify-center">
            <h1 className="font-semibold  ">No Blog is Available </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Profilepage;
