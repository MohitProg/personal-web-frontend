import React, { memo, useEffect, useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
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

  return (
    <>
      <div key={value?._id}>
        <div className="w-full rounded-xl shadow-lg sm:bg-[#1c1f26] border-b-2 sm:border-b-0 border-[#949eb6]  sm:hover:outline sm:hover:outline-1 sm:outline-[#96989d] overflow-hidden transition-all duration-300 ease-in-out">
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
                        <ThumbUpRoundedIcon
                          className="text-[#96989d]  sm:hover:text-[#39e58c]"
                          fontSize="medium"
                        />
                      </Tooltip>
                    </button>
                  ) : (
                    <button
                      className="sm:hover:bg-[#255643]  bg-[#1a1f26]  sm:bg-transparent   rounded-full p-2 flex items-center justify-center"
                      onClick={() => HandleReaction(value?._id)}
                    >
                      <Tooltip title="Like blog" arrow>
                        <ThumbUpOffAltIcon
                          className="text-[#96989d]  sm:hover:text-[#39e58c]"
                          fontSize="medium"
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
                        <BookmarkBorderIcon
                          className="text-[#96989d]  hover:text-[#ff8e3b]"
                          fontSize="medium"
                        />
                      </Tooltip>
                    </button>
                  ) : (
                    <button
                      className="sm:hover:bg-[#523527]  bg-[#1a1f26]  sm:bg-transparent  rounded-full p-2 flex items-center justify-center"
                      onClick={() => HandleSavedblog(value)}
                    >
                      <Tooltip title="Unsaved blog" arrow>
                        <BookmarkIcon
                          className="text-[#96989d]  hover:text-[#ff8e3b]"
                          fontSize="medium"
                        />
                      </Tooltip>
                    </button>
                  )}
                </div>

                {userid === value?.Author && (
                  <div className="flex gap-3">
                    <button className="sm:hover:bg-[#184a52]  bg-[#1a1f26]  sm:bg-transparent  rounded-full p-2 flex items-center justify-center">
                      <Tooltip title="Edit blog" arrow>
                        <EditIcon fontSize="medium"     className="text-[#96989d]  hover:text-[#2cdce6]" />
                      </Tooltip>
                    </button>

                    <button
                      onClick={() => DeleteuserBlog(value)}
                      className="sm:hover:bg-[#512b30]  bg-[#1a1f26]  sm:bg-transparent  rounded-full p-2 flex items-center justify-center"
                    >
                      <Tooltip title="Delete blog" arrow>
                        <DeleteIcon
                          className="text-[#96989d]  hover:text-[#e04337]"
                          fontSize="medium"
                        />
                      </Tooltip>
                    </button>
                  </div>
                )}
              </div>
              <span className="font-semibold ubuntu-regular-italic text-[#96989d]  text-sm">
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
                <h1 className=" h-32 text-2xl ubuntu-medium font-semibold text-white transition-all duration-300 ease-in-out hover:text-[#6941C6]">
                  {value?.title?.slice(0, 60)}.
                </h1>

                <button className="hover:bg-[#432256]  bg-[#1a1f26]  sm:bg-transparent  rounded-full p-2 flex items-center justify-center">
                  <ArrowOutwardIcon
                    fontSize="medium"
                    className="text-[#96989d]  hover:text-[#ce3df3] "
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
                    className="text-[#96989d] ubuntu-normal  hover:text-white cursor-default bg-[#272b34] p-1 rounded-full text-xs"
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
