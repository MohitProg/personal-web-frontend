import React, { useState } from "react";
import BlogItem from "../components/BlogItem";
import { newsletterData } from "../data/blogdata";
import { useThemeContext } from "../context/ThemeContext";
const NewsLetter = () => {
  const [newslatterdata,setnewslatterdata]=useState(newsletterData);
  const {darkmode}=useThemeContext()
  return (
    <>
      <div className={`${darkmode ? "dark" : ""}`}>
  <section className="p-6 min-h-screen dark:bg-[#090D1F]">
    {/* Heading */}
    <h1 className="text-3xl font-semibold dark:text-white mb-6">All Blog Posts</h1>

    {/* Blog Posts Grid */}
    <div className="py-3 mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {newslatterdata &&
        newslatterdata.map((value) => (
          <div key={value.id} className="">
            <BlogItem value={value} />
          </div>
        ))}
    </div>
  </section>
</div>

    </>
  );
};

export default NewsLetter;
