import { Avatar } from "@mui/material";
import React, { useState } from "react";
import BlogItem from "../components/BlogItem";
import { blogdata } from "../data/blogdata";
import { useThemeContext } from "../context/ThemeContext";
import EditProfileModal from "../modal/EditProfileModal";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";

import { Link } from "react-router-dom";
const Profilepage = () => {
  const [blogsdata, setblogsdata] = useState(blogdata);
  // state for edit profile modal
  const [editprofile, seteditprofile] = useState(false);
  // theme context 
  
  const { darkmode } = useThemeContext();
  return (
    <>
      <div className={`${darkmode ? "dark" : ""}`}>
        <div className="min-h-screen w-full flex  flex-col sm:flex-row gap-4 p-6 dark:bg-[#090D1F] bg-gray-100">
          {/* Profile Section */}
          <div className="sm:w-1/4 w-full max-h-screen flex flex-col gap-4 dark:from-[#1E1E2D] dark:bg-gradient-to-br  bg-gradient-to-br from-indigo-100 dark:to-[#32323f] to-purple-200 rounded-xl shadow-lg p-4">
            <div className="flex flex-col items-center gap-4">
              {/* Avatar */}
              <Avatar
                sx={{
                  height: "6rem",
                  width: "6rem",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                }}
              />

              {/* User Details */}
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold text-[#5941C6]">
                  Mohit Sharma
                </h1>
                <p className="text-sm text-gray-600 leading-relaxed dark:text-[#C0C5D0]">
                  Hello developer! My name is Mohit Sharma. I hope you like
                  this. This is my personal website, made with effort.
                </p>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 mt-3">
                <span className="font-semibold bg-[#E0E0F8] dark:bg-[#3C3C59] text-[#5941C6] rounded-full px-3 py-1 hover:bg-[#6941C6] dark:text-white hover:text-white transition-colors duration-300 ease-in-out">
                  Developer
                </span>
              </div>
            </div>

            {/* Settings Section */}
            <div className="text-gray-600 py-4 sm:mt-4">
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                Settings
              </h1>
              <ul className="space-y-3">
                <li
                  onClick={() => seteditprofile(true)}
                  className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  Edit Profile
                </li>
                <li className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                  Your Blogs
                </li>
                <li className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                  Saved Blog
                </li>
                <li className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                  Delete Account
                </li>
                <li className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                  Logout Account
                </li>
              </ul>

              <div className="flex items-center justify-end p-2">
                <Link to={"/addblog"} className="hover:bg-[#5941C6] rounded-full">
                  <ControlPointRoundedIcon  className="text-[#5941C6] hover:text-white" fontSize="large"/>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Section */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:p-4">
            {blogsdata && blogsdata.map((value) => <BlogItem value={value} />)}
          </div>
        </div>
      </div>

      <EditProfileModal
        seteditprofile={seteditprofile}
        editprofile={editprofile}
      />

    
    </>
  );
};

export default Profilepage;
