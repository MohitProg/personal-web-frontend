import React, { useState } from "react";
import BlogItem from "../components/BlogItem";
import NewsLatter from "../components/NewsLatter";
import { Recentblogdata } from "../data/blogdata";
import { useThemeContext } from "../context/ThemeContext";
import SendIcon from "@mui/icons-material/Send";
const Singleblog = () => {
  const [recentblogdata, setrecentblogdata] = useState(Recentblogdata);
  const { darkmode } = useThemeContext();
  return (
    <>
      <div className={`${darkmode ? "dark" : ""}`}>
        <section className="dark:bg-[#090D1F]">
          <div className="p-6 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex  flex-col gap-6">
              {/* blog content  */}
              <div>
                <span className="font-semibold sm:text-xl text-[#6941C6]">
                  Sunday, 1 Jan 2024
                </span>
                <div className="mt-4 flex gap-10 flex-col">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1c1e22] dark:text-white transition-all duration-200 ease-in-out">
                    Grid system for better Design User Interface
                  </h1>

                  <img
                    src="https://media.istockphoto.com/id/2148306092/photo/it-developer-with-stressful-overworked-in-creating-online-software-code-gusher.webp?a=1&b=1&s=612x612&w=0&k=20&c=FYmAPqiAxNsz7Sn6uP00aB3sxHbhCEcF4IUvOp6VGp0="
                    alt=""
                    className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                  />

                  <p className="mt-4 text-[#1c1e22] dark:text-white leading-relaxed text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quasi, voluptas beatae, repellat voluptates praesentium
                    fugiat itaque laudantium eaque nulla quam corporis iure
                    sapiente in at, harum officia dolorem dolor fuga. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio corrupti unde in placeat illo, sequi eius sunt
                    qui eum, excepturi saepe repellendus reiciendis. Eum, nihil
                    amet dolorum odio magni nisi.
                  </p>
                </div>
              </div>

              {/* comment section */}

              <div className="mt-3 w-full flex flex-col gap-5">
                {/* input field  */}
                <div className="w-full flex items-center gap-2 ">
                  <input
                    type="text"
                    className="p-2 flex-1 ring-black ring-1 rounded-sm  outline-none"
                    placeholder="Enter Comment Here"
                    name=""
                    id=""
                  />
                  <button className="hover:bg-purple-500 bg-black dark:bg-gray-600 dark:hover:bg-purple-500 flex items-center justify-center text-white  px-2 py-1  rounded-sm hover: ">
                    <SendIcon fontSize="large" />
                  </button>
                </div>

                {/* message field */}

                <div className="">
                  {/* message 1 */}

                  <div className="flex flex-col bg-gray-200 text-white dark:bg-[#1E1E2D] rounded-lg p-4 shadow-sm space-y-1">
                    <span className="text-sm font-bold text-purple-400">
                      Mohit Sharma
                    </span>
                    <p className="text-base italic text-black dark:text-gray-300">
                      "Very nice blog! I really love it."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:mt-0">
              <h1 className="text-2xl font-semibold dark:text-white">
                Recent Blog Posts
              </h1>

              <div className="py-4 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:mt-4">
                {recentblogdata &&
                  recentblogdata.map((value) => (
                    <BlogItem key={value.id} value={value} />
                  ))}
              </div>
            </div>
          </div>

          {/* Uncomment if needed */}
          {/* <div className="mt-6">
      <NewsLatter />
    </div> */}
        </section>
      </div>
    </>
  );
};

export default Singleblog;
