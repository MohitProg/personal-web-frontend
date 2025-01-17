import React, { memo, useEffect, useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link, useNavigate } from "react-router-dom";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { PiHeartBold } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiRead } from "react-icons/ci";

import {
  AddSavedBlogdata,
  DeleteBlog,
  Likeandisliketheblog,
  Updaterecentblogdata,
} from "../Redux/Api/blogApi";
import {
  DeleteBlogtoState,
  DeleteStateofRecentblogdata,
  UpdateStateofrecentblogdata,
  UpdateStateofSavedblogdata,
} from "../Redux/Slice/blogslice";
import toast from "react-hot-toast";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Tooltip } from "@mui/material";

const BlogItem = ({ value }) => {
  const Navigate = useNavigate();
  // token
  const token = localStorage.getItem("token");
  // get recent blog data  for bookmark the state
  const { savedblogdata } = useSelector((state) => state.blog);
  const [bookmark, setbookmark] = useState(false);

  useEffect(() => {
    if (savedblogdata && savedblogdata.length > 0) {
      const isBookmarked = savedblogdata.some(
        (blog) => blog?._id === value?._id
      );

      setbookmark(isBookmarked);
    }
  }, [savedblogdata, bookmark]);

  // getting user id
  const userid = localStorage.getItem("userid");
  // dispatch
  const dispatch = useDispatch();
  // state to handle like and dislike the blog
  const [like, setlike] = useState({ like: false, count: 0 });

  useEffect(() => {
    setlike({
      like: value?.likes?.includes(userid),
      count: value?.likes?.length,
    });
  }, []);
  // getting user id

  // functionality to  handle recent blog
  const HandleRecentblogdata = (value) => {
    dispatch(Updaterecentblogdata(value?._id))
      .unwrap()
      .then((res) => {
        if (res.success) {
          dispatch(UpdateStateofrecentblogdata(value));
        }
      });
  };

  // functionality to delete blog data
  const DeleteuserBlog = (blog) => {
    const value = confirm("do you want to delete");
    if (value) {
      dispatch(DeleteBlog(blog?._id))
        .unwrap()
        .then((res) => {
          if (res.success) {
            toast.success(res.message);
            dispatch(DeleteStateofRecentblogdata(blog?._id));

            dispatch(DeleteBlogtoState(blog?._id));
          } else {
            toast.error(res.message);
          }
        });
    }
  };

  // functionality to handle saved blog
  const HandleSavedblog = (blogdata) => {
    if ((token !== null) & (token?.length > 0)) {
      dispatch(AddSavedBlogdata(blogdata?._id))
        .unwrap()
        .then((res) => {
          console.log(res);
          if (res.success) {
            toast.success(res.message);
            if (res.message === "Blog saved successfully") {
              setbookmark(true);
            } else {
              setbookmark(false);
            }
          } else {
            toast.error(res.message);
          }
        });
    } else {
      alert("login to your account");
    }
  };

  //  functionality to like and dislike the blogs
  const HandleReaction = (blogid) => {
    if ((token !== null) & (token?.length > 0)) {
      dispatch(Likeandisliketheblog(blogid))
        .unwrap()
        .then((res) => {
          if (res.success) {
            const likecount = res?.data?.likes?.length;
            setlike({ count: likecount, like: !like?.like });

            toast.success(res.message);
          } else {
            toast.error(res.message);
          }
        });
    } else {
      alert("please login to your account ");
    }
  };

  // update blog data
  const HandleUpdateblog = (blogid) => {
    Navigate(`/updateblog/${blogid}`);
  };
  return (
    <>
      <div key={value?._id}>
        <div className="w-full rounded-lg shadow-lg cmn-child-bg sm:border-b-0 border-[#d78330]  sm:hover:outline sm:hover:outline-1 sm:outline-[#d78330] overflow-hidden transition-all duration-300 ease-in-out">
          {/* Image Div */}
          <div className="w-full h-48 p-2 overflow-hidden rounded-t-xl">
            <img
              className="w-full  rounded-md object-cover h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={value?.file}
              alt="Blog Image"
            />
          </div>

          {/* Info Div */}
          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <div className="flex gap-1 items-center justify-center ">
                  {like?.like ? (
                    <button
                      className="sm:hover:bg-[#255643] bg-[#1a1f26]  sm:bg-transparent  rounded-full p-1 flex items-center justify-center"
                      onClick={() => HandleReaction(value?._id)}
                    >
                      <Tooltip title="Like blog" arrow>
                        {/* <ThumbUpRoundedIcon
                          className="text-[#96989d]  sm:hover:text-[#39e58c]"
                          fontSize="medium"
                        /> */}

                        {/* <CiHeart  /> */}
                        <FcLike
                          size={25}
                          className="main-text  sm:hover:text-[#39e58c]"
                        />
                      </Tooltip>
                    </button>
                  ) : (
                    <button
                      className="sm:hover:bg-[#255643] bg-[#1a1f26]  sm:bg-transparent  rounded-full p-1 flex items-center justify-center"
                      onClick={() => HandleReaction(value?._id)}
                    >
                      <Tooltip title="Like blog" arrow>
                        <PiHeartBold
                          size={26}
                          className="main-text   sm:hover:text-[#39e58c]"
                        />
                      </Tooltip>
                    </button>
                  )}

                  <div className="text-sm  text-[#96989d] ">{like?.count}</div>
                </div>
                <div>
                  {!bookmark ? (
                    <button
                      className="sm:hover:bg-[#523527] bg-[#1a1f26]  sm:bg-transparent    rounded-full p-2 flex items-center justify-center"
                      onClick={() => HandleSavedblog(value)}
                    >
                      <Tooltip title="Saved blog" arrow>
                        <FaRegBookmark
                          size={20}
                          className="main-text  hover:text-[#ff8e3b]"
                        />
                      </Tooltip>
                    </button>
                  ) : (
                    <button
                      className="sm:hover:bg-[#523527]  bg-[#1a1f26]  sm:bg-transparent  rounded-full p-2 flex items-center justify-center"
                      onClick={() => HandleSavedblog(value)}
                    >
                      <Tooltip title="Unsaved blog" arrow>
                        {/* <BookmarkIcon
                        
                          fontSize="medium"
                        /> */}
                        <FaBookmark
                          size={20}
                          className="main-text  hover:text-[#ff8e3b]"
                        />
                      </Tooltip>
                    </button>
                  )}
                </div>

                {userid === value?.Author && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => HandleUpdateblog(value?._id)}
                      className="sm:hover:bg-[#184a52]  bg-[#1a1f26]  sm:bg-transparent  rounded-full p-2 flex items-center justify-center"
                    >
                      <Tooltip title="Edit blog" arrow>
                        {/* <EditIcon
                          fontSize="medium"
                     
                        /> */}
                        <FaEdit
                          size={23}
                          className="main-text  hover:text-[#2cdce6]"
                        />
                      </Tooltip>
                    </button>

                    <button
                      onClick={() => DeleteuserBlog(value)}
                      className="sm:hover:bg-[#512b30]  bg-[#1a1f26]  sm:bg-transparent  rounded-full p-2 flex items-center justify-center"
                    >
                      <Tooltip title="Delete blog" arrow>
                        <MdOutlineDeleteOutline
                          size={26}
                          className="main-text  hover:text-[#e04337]"
                        />
                      </Tooltip>
                    </button>
                  </div>
                )}
              </div>
              <span className="font-semibold ubuntu-regular-italic cmn-text text-sm">
                {moment(value?.createdAt).fromNow()}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {/* Title and Link */}
              <Link
                onClick={() => HandleRecentblogdata(value)}
                to={`/blog/${value?._id}`}
                className="flex justify-between items-start p-1 gap-2"
              >
                <h1 className=" h-32 text-2xl ubuntu-medium font-bold main-text transition-all duration-300 ease-in-out hover:text-[#d78330]">
                  {value?.title?.slice(0, 60)}.
                </h1>

                <button className="hover:bg-[#432256]  bg-[#1a1f26]  sm:bg-transparent  rounded-full p-2 flex items-center justify-center">
                  {/* <ArrowOutwardIcon
                    fontSize="medium"
                
                  /> */}

                  <CiRead
                    size={26}
                    className="main-text  hover:text-[#ce3df3] "
                  />
                </button>
              </Link>

              {/* Description */}
              {/* <div className="text-[#667085] flex items-center justify-between dark:text-[#C0C5D0] text-base leading-relaxed ubuntu-light">
                {value?.summary?.slice(0, 80)}...
              </div> */}

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {value?.category?.map((tag, index) => (
                  <div
                    key={index}
                    className="cmn-text px-2 sm:p-0 ubuntu-normal  hover:main-text cursor-default bg-[#272b34] p-1 rounded-full text-sm sm:text-xs"
                  >
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(BlogItem);
