import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import NewsLatter from "../components/NewsLatter";
import { Recentblogdata } from "../data/blogdata";
import { useThemeContext } from "../context/ThemeContext";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { Getblogbycategory, GetblogbyId } from "../Redux/Api/blogApi";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { DeleteCommentfromblog, GetCommentofblog, PostCommentonBlog } from "../Redux/Api/commentApi";
import toast from "react-hot-toast";
import CloseIcon from "@mui/icons-material/Close";
import { DeleteCommentfromState } from "../Redux/Slice/commentSlice";
import Loader from "../components/Loader";
const Singleblog = () => {
  // getting id
  const { pathname } = useLocation();

  const blogid = pathname.split("/")[2];

  //  dark mode context
  const { darkmode } = useThemeContext();
  // dispatch
  const dispatch = useDispatch();
  // state for single blog
  const { singleblogdata, blogsbycategory,singleblogtstatus } = useSelector(
    (state) => state.blog
  );

  // state for comment data on a post
  const { getcommentstatus, commentsdata } = useSelector(
    (state) => state.comment
  );
  const [comments, setcomments] = useState({
    id: "",
    comment: "",
  });



  const HandleComment = () => {
  

    if(comments?.comment?.length>0){

      dispatch(PostCommentonBlog(comments))
        .unwrap()
        .then((res) => {
          if (res.success) {
            toast.success(res.message);
            setcomments({
              id: "",
              comment: "",
            });
          } else {
            toast.error(res.message);
          }
        });
    }else{
      toast.error("please add comment first")
    }
  };

  // handle to delete comment

  const DeleteComment=(commentid)=>{

    dispatch(DeleteCommentfromblog(commentid)).unwrap().then((res)=>{
      if(res.success){
        toast.success(res.message)
        // delete comment fron state 
        dispatch(DeleteCommentfromState(commentid))
      }else{
        toast.error(res.message)
      }

    })

  }
  

  useEffect(() => {
    dispatch(GetblogbyId(blogid))
      .unwrap()
      .then((res) => {
        // get recent blogs
        if (res.success) {
          setcomments({ ...comments, id: blogid });
          dispatch(Getblogbycategory(res.data.category));
        }
      });

    dispatch(GetCommentofblog(blogid));
  }, [blogid, dispatch]);

  return (
    <>

    {singleblogtstatus!=="fullfilled"?<>
    <Loader/>
    
    </>:<div className={`${darkmode ? "dark" : ""}`}>
        <section className="dark:bg-[#090D1F]">
          <div className="p-6 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex  flex-col gap-6">
              {/* blog content  */}
              <div>
                <span className="font-semibold sm:text-xl text-[#6941C6]">
                  {moment(singleblogdata?.createdAt).fromNow()}
                </span>
                <div className="mt-4 flex gap-10 flex-col">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1c1e22] dark:text-white transition-all duration-200 ease-in-out">
                    {singleblogdata?.title}
                  </h1>

                  <img
                    src={singleblogdata?.file}
                    alt=""
                    className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                  />
                  <div className="flex flex-col gap-3">
                    <p className="font-normal text-base text-gray-600">
                      Created By :{" "}
                      <span className="font-semibold text-black ">
                        {singleblogdata?.Author?.name}
                      </span>
                    </p>

                    <div className="flex w-full gap-4 flex-wrap text-sm">
                      {singleblogdata?.category?.map((tag, index) => (
                        <span
                          key={index}
                          className="font-semibold bg-[#E0E0F8] dark:bg-[#3C3C59] text-[#5941C6] rounded-full px-2 py-1 hover:bg-[#6941C6] dark:text-white hover:text-white transition-colors duration-200 ease-in-out"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: singleblogdata?.content,
                    }}
                    className="mt-4 text-[#1c1e22] dark:text-white leading-relaxed text-lg"
                  ></div>
                </div>
              </div>

              {/* comment section */}

              <div className="mt-3 w-full flex flex-col gap-5">
                {/* input field  */}
                <div className="w-full flex items-center gap-2 ">
                  <input
                    onChange={(e) =>
                      setcomments({ ...comments, comment: e.target.value })
                    }
                    value={comments?.comment}
                    type="text"
                    className=" p-1 sm:p-2 flex-1 ring-black ring-1 rounded-sm  outline-none"
                    placeholder="Enter Comment Here"
                    name=""
                    id=""
                  />
                  <button
                    onClick={HandleComment}
                    className="sm:hover:bg-purple-500 sm:bg-[#5941C6] rounded-md dark:bg-gray-600 sm:dark:hover:bg-purple-500 flex items-center justify-center sm:text-white  sm:px-2 sm:py-1  hover: "
                  >
                    <SendIcon fontSize="large" />
                  </button>
                </div>

                {/* message field */}

                <div className=" flex flex-col gap-3">
                  {/* message 1 */}

                  {commentsdata && commentsdata?.length > 0 ? (
                    <>
                      {commentsdata?.map((value) => (
                        <div className=" bg-gray-200 text-white dark:bg-[#1E1E2D] rounded-lg p-2 sm:p-4  flex shadow-sm items-center gap-2 justify-between">
                          <div
                            key={value?._id}
                            className="flex flex-col  space-y-1"
                          >
                            <span className="text-sm font-bold text-purple-400">
                              {value?.senderId?.name}
                            </span>
                            <p className="text-base italic text-black dark:text-gray-300">
                              {value?.comment}
                            </p>
                          </div>
                          <div className="text-purple-400 text-[0.7rem] sm:text-sm  h-full  flex flex-col gap-3 items-end ">
                            <button
                              onClick={() => DeleteComment(value?._id)}
                              className="hover:bg-[#6941C6] dark:text-white hover:text-white rounded-full p-1 transition-colors duration-200 ease-in-out"
                            >
                              <CloseIcon fontSize="small" />
                            </button>
                            {moment(value?.createdAt).fromNow()}
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div>
                      <h1>No Comment is Available</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:mt-0">
              <h1 className=" text-xl sm:text-2xl font-semibold dark:text-white">
                More Blog Posts
              </h1>

              {blogsbycategory && blogsbycategory?.length > 1 ? (
                <div className="py-4 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:mt-4 ">
                  {blogsbycategory
                    ?.filter((value) => value?._id !== singleblogdata?._id)
                    .map((value) => (
                      <BlogItem key={value.id} value={value} />
                    ))}
                </div>
              ) : (
                <>
                  <div className="w-full text-center mt-4 ">
                    <h1>No Blog Available</h1>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Uncomment if needed */}
          {/* <div className="mt-6">
      <NewsLatter />
    </div> */}
        </section>
      </div>}
      
    </>
  );
};

export default Singleblog;
