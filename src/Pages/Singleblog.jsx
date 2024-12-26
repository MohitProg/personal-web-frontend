import React, { memo, useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import { useThemeContext } from "../context/ThemeContext";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { Getblogbycategory, GetblogbyId } from "../Redux/Api/blogApi";
import { useLocation } from "react-router-dom";
import moment from "moment";
import {
  DeleteCommentfromblog,
  GetCommentofblog,
  PostCommentonBlog,
} from "../Redux/Api/commentApi";
import toast from "react-hot-toast";
import CloseIcon from "@mui/icons-material/Close";
import { DeleteCommentfromState } from "../Redux/Slice/commentSlice";
import Loader from "../components/Loader";
import SyntaxHighlighter from "react-syntax-highlighter";
import { createElement } from "react";

import { dracula,atomOneDark,vs2015,monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Singleblog = () => {
  // token
  const token = localStorage.getItem("token");
  // getting id
  const { pathname } = useLocation();

  const blogid = pathname.split("/")[2];
  // user id
  const userid = localStorage.getItem("userid");

  //  dark mode context
  const { darkmode } = useThemeContext();
  // dispatch
  const dispatch = useDispatch();
  // state for single blog
  const { singleblogdata, blogsbycategory, singleblogtstatus } = useSelector(
    (state) => state.blog
  );

  // state for comment data on a post
  const { getcommentstatus, commentsdata } = useSelector(
    (state) => state.comment
  );

  console.log(commentsdata);
  const [comments, setcomments] = useState({
    id: "",
    comment: "",
  });

 


  const HandleComment = () => {
    if ((token?.length > 0) & (token !== null)) {
      if (comments?.comment?.length > 0) {
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
      } else {
        toast.error("please fill required field");
      }
    } else {
      alert("login to your account ");
    }
  };

  // handle to delete comment

  const DeleteComment = (commentid) => {
    dispatch(DeleteCommentfromblog(commentid))
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          // delete comment fron state
          dispatch(DeleteCommentfromState(commentid));
        } else {
          toast.error(res.message);
        }
      });
  };

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

  // method to hihglight the blog content very import for us 

  const RenderQuillContent = ({ content }) => {
    const copyToClipboard = (code) => {
      navigator.clipboard.writeText(code).then(
        () => {
          toast.success("Code copied to clipboard!");
        },
        (err) => {
          console.error("Failed to copy code: ", err);
        }
      );
    };
  
    const processContent = (htmlContent) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;
  
      const elements = Array.from(tempDiv.childNodes).map((node, index) => {
        if (node.nodeName === "PRE" && node.classList.contains("ql-syntax")) {
          const language = "javascript"; // Default language (or detect dynamically if possible)
          const code = node.textContent;
  
          return (
            <div key={index} className="relative mb-6 cmn-bg ">
              <button
                onClick={() => copyToClipboard(code)}
                className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-600 focus:ring-2 focus:ring-blue-500"
              >
                Copy
              </button>
              <div className=" p-4 rounded-lg overflow-auto">
                <SyntaxHighlighter
                  language={language}
                  style={monokai}
                  showLineNumbers
                  customStyle={{
                    background: "transparent",
                    fontSize: "14px",
                  }}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            </div>
          );
        }
  
        // Render other content with `dangerouslySetInnerHTML`
        return <div className="  max-w-none text-white"    key={index} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />;
      });
  
      return elements;
    };
  
    return <div className="prose max-w-none">{processContent(content)}</div>;
  };
  
  return (
    <>
      {singleblogtstatus !== "fullfilled" ? (
        <>
        <div className="cmn-bg">

          <Loader />
        </div>
        </>
      ) : (
        
          <section className="cmn-bg">
            <div className=" p-2 sm:p-6 w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 flex  flex-col gap-6">
                {/* blog content  */}
                <div>
                  <span className="font-semibold ubuntu-light-italic sm:text-xl cmn-text">
                    {moment(singleblogdata?.createdAt).fromNow()}
                  </span>
                  <div className="mt-4 flex gap-10 flex-col">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white transition-all ubuntu-medium duration-200 ease-in-out">
                      {singleblogdata?.title}
                    </h1>

                    <img
                      src={singleblogdata?.file}
                      alt=""
                      className="rounded-xl object-fill shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                    />
                    <div className="flex flex-col gap-3">
                      <p className="font-normal text-base ubuntu-regular text-gray-600">
                        Created By :{" "}
                        <span className="font-semibold cmn-text ">
                          {singleblogdata?.Author?.name}
                        </span>
                      </p>

                      <div className="flex w-full gap-4 flex-wrap text-sm">
                        {singleblogdata?.category?.map((tag, index) => (
                          <span
                            key={index}
                            className="text-[#96989d] ubuntu-normal  hover:text-white cursor-default bg-[#272b34] p-1 rounded-full text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  


                    <div
                     
                      className="   sm:rounded-lg ubuntu-regular p-2  text-white bg-[#1c1f26]   leading-relaxed sm:text-lg sm:px-5 "
                    >
                      <RenderQuillContent  content={singleblogdata?.content} />
                    </div>
                  </div>
                </div>

                {/* comment section */}

                <div className="mt-3 w-full flex flex-col gap-5">
                  {/* input field  */}
                  <div className="w-full flex items-center gap-2 ">
                    <Input
                      onChange={(e) =>
                        setcomments({ id:singleblogdata?._id, comment: e.target.value })
                      }
                      value={comments?.comment}
                      type="text"
                     className="cmn-input"
                      placeholder="Enter Comment Here"
                      name=""
                      id=""
                    />
                    <Button
                      onClick={HandleComment}
                      className=" bg-blue-500 hover:bg-blue-600   "
                    >
                      <SendIcon fontSize="large" />
                    </Button>
                  </div>

                  {/* message field */}

                  <div className=" flex flex-col gap-3">
                    {/* message 1 */}

                    {commentsdata && commentsdata?.length > 0 ? (
                      <>
                        {commentsdata?.map((value) => (
                          <div className=" bg-[#1c1f26] text-white dark:bg-[#1E1E2D] rounded-lg p-2 sm:p-4  flex shadow-sm items-center gap-2 justify-between">
                            <div
                              key={value?._id}
                              className="flex flex-col  space-y-1"
                            >
                              <span className="text-sm font-bold text-white">
                                {value?.senderId?.name}
                              </span>
                              <p className="text-base italic cmn-text">
                                {value?.comment}
                              </p>
                            </div>
                            <div className="cmnt-text text-[0.7rem] sm:text-sm  h-full  flex flex-col gap-3 items-end ">
                              {userid === value?.senderId?._id && (
                                <div
                                  onClick={() => DeleteComment(value?._id)}
                                  className="hover:bg-[#512b30]   hover:text-red-500 rounded-full p-2 transition-colors duration-200 ease-in-out"
                                >
                                  <CloseIcon fontSize="small" />
                                </div>
                              )}

                              {moment(value?.createdAt).fromNow()}
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div>
                        <h1 className="ubuntu-regular-italic">No Comment is Available</h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:mt-0">
                <h1 className=" text-xl  text-white ubuntu-medium sm:text-2xl font-semibold ">
                  More Blog Posts
                </h1>

                {blogsbycategory && blogsbycategory?.length > 1 ? (
                  <div className="py-4 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:mt-4 ">
                    {blogsbycategory
                      ?.filter((value) => value?._id !== singleblogdata?._id)
                      .map((value) => (
                        <BlogItem key={value._id} value={value} />
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
     
      )}
    </>
  );
};

export default memo(Singleblog);
