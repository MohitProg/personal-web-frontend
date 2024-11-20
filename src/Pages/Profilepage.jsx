import { Avatar, Modal, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import { blogdata, Recentblogdata } from "../data/blogdata";
import { useThemeContext } from "../context/ThemeContext";
import EditProfileModal from "../modal/EditProfileModal";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSavedBlogdata } from "../Redux/Api/blogApi";
import { LogoutUser } from "../Redux/Api/userApi";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
const Profilepage = () => {
  // state for edit profile modal
  const [editprofile, seteditprofile] = useState(false);
  // state for giving open modal for small screen to give more option
  const [openMoreModal, setopenMoreModal] = useState(false);
  // theme context
  const { darkmode } = useThemeContext();
  // geting user data
  const { userdata } = useSelector((state) => state.user);
  const { userblog, savedblogdata, getsaveblogstatus, userblogstatus } =
    useSelector((state) => state.blog);
  const dispatch = useDispatch();

  // state for tabs
  const [tabs, settabs] = useState({
    tab: "Your blog",
  });

  console.log(savedblogdata, tabs);

  // useEffect(() => {
  //   if (getsaveblogstatus === "idle") {
  //     dispatch(GetSavedBlogdata());
  //   }
  // }, [getsaveblogstatus, dispatch]);

  // Logout user functionality

  const HandleLogoutuser = () => {
    dispatch(LogoutUser())
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          localStorage.removeItem("token");
          localStorage.removeItem("userid");
          window.location.href = "/login";
        } else {
          toast.error(res.message);
        }
      });
  };

  return (
    <>
      {/* profile edit modal  */}

      <Modal open={openMoreModal}>
        <div className="w-full h-screen flex items-center justify-center   p-4 ">
          <div className=" bg-white rounded-lg w-full  p-2  ">
            <div className="flex items-center justify-between p-2 ">
              <h1 className="text-xl  font-semibold ">Settings</h1>
              <button onClick={() => setopenMoreModal(false)}>
                <CloseIcon fontSize="medium" />
              </button>
            </div>

            <ul className=" flex flex-col  gap-1 mt-1  rounded-md">
              <li
                onClick={() => seteditprofile(true)}
                className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer"
              >
                Edit Profile
              </li>
              <li
                className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer"
                onClick={() => {settabs({ tab: "Your blog" }),setopenMoreModal(false)}}
              >
                Your Blogs
              </li>
              <li
                className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer"
                onClick={() => {settabs({ tab: "Saved blog" }),setopenMoreModal(false)}}
              >
                Saved Blog
              </li>
              <li className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                Delete Account
              </li>
              <li
                className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer"
                onClick={HandleLogoutuser}
              >
                Logout Account
              </li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* main page  */}
      <div className={`${darkmode ? "dark" : ""}`}>
        <div className="min-h-screen w-full flex  flex-col sm:flex-row gap-4 p-6 dark:bg-[#090D1F] bg-gray-100">
          {/* Profile Section */}
          <div className=" w-full  sm:w-2/4 lg:w-1/4  max-h-screen flex flex-col gap-4 dark:from-[#1E1E2D] dark:bg-gradient-to-br  bg-gradient-to-br from-indigo-100 dark:to-[#32323f] to-purple-200 rounded-xl shadow-lg p-1 sm:p-4">
            <div className=" flex sm:hidden w-full  items-center justify-end">
              <button className="" onClick={() => setopenMoreModal(true)}>
                <MoreVertIcon fontSize="medium" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-4">
              {/* Avatar */}
              <Avatar
                src={userdata?.avatar}
                sx={{
                  height: "6rem",
                  width: "6rem",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                }}
              />

              {/* User Details */}
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold text-[#5941C6]">
                  {userdata?.name}
                </h1>

                <p className="text-sm text-gray-800 leading-relaxed dark:text-[#C0C5D0]">
                  {userdata?.email}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed dark:text-[#C0C5D0]">
                  {userdata?.desc}
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
            <div className="text-gray-600 py-4 sm:block hidden sm:mt-4">
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
                <li
                  className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer"
                  onClick={() => settabs({ tab: "Your blog" })}
                >
                  Your Blogs
                </li>
                <li
                  className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer"
                  onClick={() => settabs({ tab: "Saved blog" })}
                >
                  Saved Blog
                </li>
                <li className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                  Delete Account
                </li>
                <li
                  className="hover:bg-[#5941C6] dark:text-[#C0C5D0] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer"
                  onClick={HandleLogoutuser}
                >
                  Logout Account
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center sm:justify-end p-2 w-full ">
              <Link to={"/addblog"} className="hover:bg-[#5941C6] rounded-full">
                <Tooltip title="Add blog" arrow>
                  <ControlPointRoundedIcon
                    style={{ height: "50px", width: "50px" }}
                    className="text-[#5941C6]  hover:text-white"
                    fontSize="large"
                  />
                </Tooltip>
              </Link>
            </div>
          </div>

          {/* Blog Section */}

          {tabs?.tab === "Your blog" ? (
            <>
              {userblogstatus !== "fullfilled" ? (
                <>
                  <Loader />
                </>
              ) : (
                <div className="flex-grow grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6 sm:p-4">
                  {userblog && userblog?.length > 0 ? (
                    <>
                      {userblog.map((value) => (
                        <BlogItem value={value} />
                      ))}
                    </>
                  ) : (
                    "No Blog is Available"
                  )}
                </div>
              )}
            </>
          ) : tabs?.tab === "Saved blog" ? (
            <>
              <div className="flex-grow grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6 sm:p-4">
              {savedblogdata && savedblogdata?.length > 0 ? (
                    <>
                      {savedblogdata.map((value) => (
                        <BlogItem value={value} />
                      ))}
                    </>
                  ) : (
                    "No Blog is Available"
                  )}
              </div>
            </>
          ) : (
            <div className="w-full flex items-center justify-center">
              <h1 className="font-semibold  ">No Blog is Available </h1>
            </div>
          )}
        </div>
      </div>

      <EditProfileModal
      setopenMoreModal={setopenMoreModal}
        seteditprofile={seteditprofile}
        editprofile={editprofile}
      />
    </>
  );
};

export default Profilepage;
