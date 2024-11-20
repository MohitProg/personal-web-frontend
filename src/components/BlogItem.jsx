import React, { memo, useEffect, useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BookmarkIcon from '@mui/icons-material/Bookmark';
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
  const token=localStorage.getItem("token")
  // get recent blog data  for bookmark the state 
  const {savedblogdata}=useSelector((state)=>state.blog);
  const [bookmark,setbookmark]=useState(false)

  useEffect(() => {
    if (savedblogdata && savedblogdata.length > 0) {
      const isBookmarked = savedblogdata.some((blog) => blog?._id === value?._id);
     
      setbookmark(isBookmarked)
    }
  }, [savedblogdata,bookmark]);

  console.log(bookmark,value?._id,savedblogdata)

  
  

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
      dispatch(DeleteBlog(blog?._id))
        .unwrap()
        .then((res) => {
          if (res.success) {
            toast.success(res.message)
            dispatch(DeleteStateofRecentblogdata(blog?._id))
      
            dispatch(DeleteBlogtoState(blog?._id))
            
          } else {
            toast.error(res.message);
          }
        });
    };

  // functionality to handle saved blog
  const HandleSavedblog = (blogdata) => {
    if(token!==null & token?.length>0){

      dispatch(AddSavedBlogdata(blogdata?._id))
        .unwrap()
        .then((res) => {
          console.log(res);
          if (res.success) {
            toast.success(res.message);
            if(res.message==="Blog saved successfully"){
              setbookmark(true)
            }else{
              setbookmark(false)
            }
  
          
          } else {
            toast.error(res.message);
          }
        });
    }else{
      alert("login to your account")
    }
  };

  //  functionality to like and dislike the blogs
  const HandleReaction = (blogid) => {
    if(token!==null & token?.length>0){
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
    }else{
      alert("please login to your account ")
    }

   
  };

  return (
    <>
      <div key={value?._id}>
        <div className="w-full rounded-xl shadow-lg bg-white dark:bg-[#1E1E2D] overflow-hidden transition-all duration-300 ease-in-out">
          {/* Image Div */}
          <div className="w-full h-48 overflow-hidden rounded-t-xl">
            <img
              className="w-full object-cover h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={value?.file}
              alt="Blog Image"
            />
          </div>

          {/* Info Div */}
          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <div className="flex gap-2 items-center">
                  {like?.like ? (
                    <button onClick={() => HandleReaction(value?._id)}>
                      <Tooltip title="Like blog" arrow>
                        <ThumbUpRoundedIcon
                          className="text-[#6941C6]"
                          fontSize="small"
                        />
                      </Tooltip>
                    </button>
                  ) : (
                    <button onClick={() => HandleReaction(value?._id)}>
                      <Tooltip title="Like blog" arrow>
                        <ThumbUpOffAltIcon
                          className="text-[#6941C6]"
                          fontSize="small"
                        />
                      </Tooltip>
                    </button>
                  )}

                  <span className="text-sm mt-1 dark:text-[#C0C5D0]">
                    {like?.count}
                  </span>
                </div>
                <div>

                  {!bookmark?<button className="" onClick={() => HandleSavedblog(value)}>
                    
                    <Tooltip title="Saved blog" arrow>
                      <BookmarkBorderIcon
                        className="text-[#6941C6]"
                        fontSize="small"
                      />
                    </Tooltip>
                  </button>:<button className="" onClick={() => HandleSavedblog(value)}>
                    
                    <Tooltip title="Unsaved blog" arrow>
                      <BookmarkIcon
                        className="text-[#6941C6]"
                        fontSize="small"
                      />
                    </Tooltip>
                  </button>}
                  
                </div>

                {userid === value?.Author && (
                  <div className="flex gap-3">
                    <button className="text-[#6941C6]">
                      <Tooltip title="Edit blog" arrow>
                        <EditIcon fontSize="small" />
                      </Tooltip>
                    </button>

                    <button
                      onClick={() => DeleteuserBlog(value)}
                      className="text-[#6941C6]"
                    >
                      <Tooltip title="Delete blog" arrow>
                        <DeleteIcon fontSize="small" />
                      </Tooltip>
                    </button>
                  </div>
                )}
              </div>
              <span className="font-semibold text-[#6941C6] dark:text-[#A0A0C0] text-sm">
                {moment(value?.createdAt).fromNow()}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {/* Title and Link */}
              <Link
                onClick={() => HandleRecentblogdata(value)}
                to={`/blog/${value?._id}`}
                className="flex justify-between items-center gap-2"
              >
                <h1 className=" text-lg sm:text-2xl font-semibold text-[#333333] dark:text-white transition-all duration-300 ease-in-out hover:text-[#6941C6]">
                  {value?.title?.slice(0, 60)}..
                </h1>
                <button
                 
                  className="hover:bg-[#6941C6] dark:text-white hover:text-white rounded-full sm:p-2 transition-colors duration-200 ease-in-out"
                >
                  <ArrowOutwardIcon />
                </button>
              </Link>

              {/* Description */}
              <div className="text-[#667085] flex items-center justify-between dark:text-[#C0C5D0] text-base leading-relaxed">
                {value?.summary?.slice(0, 100)}...
              </div>

              {/* Tags */}
              <div className="flex gap-4 flex-wrap text-sm">
                {value?.category?.map((tag, index) => (
                  <span
                    key={index}
                    className="font-semibold sm:text-base text-[0.8rem] bg-[#E0E0F8] dark:bg-[#3C3C59] text-[#5941C6] rounded-full px-2 py-1 hover:bg-[#6941C6] dark:text-white hover:text-white transition-colors duration-200 ease-in-out"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(BlogItem) ;
