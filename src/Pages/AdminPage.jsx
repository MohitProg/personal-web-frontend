import React, { useState } from "react";
import BlogItem from "../components/BlogItem";
import { blogdata } from "../data/blogdata";
import { Link, Outlet } from "react-router-dom";
import {useThemeContext} from "../context/ThemeContext"

const AdminPage = () => {
  const [blogsdata, setblogsdata] = useState(blogdata);
  const { darkmode } = useThemeContext();
  return (
    <>
      {/* admin page  */}

      <div className={`${darkmode ? "dark" : ""}`}>

      <div className="min-h-screen w-full flex dark:bg-[#090D1F] flex-col sm:flex-row gap-4 p-6 bg-gray-100">
        {/* section 1  menu section */}

        <div className="sm:w-1/4 w-full max-h-screen flex flex-col gap-4 dark:from-[#1E1E2D] dark:bg-gradient-to-br  bg-gradient-to-br from-indigo-100 dark:to-[#32323f] to-purple-200 rounded-xl shadow-lg p-4">
          <h1 className="text-gray-600 dark:text-[#C0C5D0] ">
            Admin:{" "}
            <span className="font-semibold text-xl text-[#5941C6]">
              Mohit Sharma
            </span>
          </h1>

          <div className="text-gray-600 py-4 mt-2">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-[#C0C5D0] mb-2">
              Settings
            </h1>
            <ul className="space-y-3 flex flex-col gap-1">
              <Link to={"/admin/allblog"} className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                All Blogs
              </Link>
              <Link to={"/admin/alluser"} className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                All user
              </Link>
              <Link to={"/admin/chartview"} className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                Chart View
              </Link>
            </ul>
          </div>
        </div>

        {/* section 2  */}
        <div className="w-full gap-6 ">
        <Outlet/>
        </div>
      </div>

      </div>
    </>
  );
};

export default AdminPage;
