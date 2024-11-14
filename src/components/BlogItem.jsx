import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';

const BlogItem = ({ value }) => {
  return (
    <>
<div className="w-full rounded-xl shadow-lg bg-white dark:bg-[#1E1E2D] overflow-hidden transition-all duration-300 ease-in-out">
  {/* Image Div */}
  <div className="w-full h-48 overflow-hidden rounded-t-xl">
    <img
      className="w-full object-cover h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
      src={value?.image}
      alt="Blog Image"
    />
  </div>

  {/* Info Div */}
  <div className="p-4 flex flex-col gap-4">
    <div className="flex justify-between items-center">
<div className="flex items-center gap-2">
  <button><ThumbUpRoundedIcon  className="text-[#6941C6]" fontSize="small"/></button>
  <span className="text-sm mt-1 dark:text-[#C0C5D0]">345k</span>
</div>
    <span className="font-semibold text-[#6941C6] dark:text-[#A0A0C0] text-sm">{value?.date}</span>
    </div>
    
    <div className="flex flex-col gap-4">
      {/* Title and Link */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#333333] dark:text-white transition-all duration-300 ease-in-out hover:text-[#6941C6]">{value?.title}</h1>
        <Link
          to="/blog/873246"
          className="hover:bg-[#6941C6] dark:text-white hover:text-white rounded-full p-2 transition-colors duration-200 ease-in-out"
        >
          <ArrowOutwardIcon />
        </Link>
      </div>

      {/* Description */}
      <p className="text-[#667085] dark:text-[#C0C5D0] text-base leading-relaxed">
        {value?.description}
      </p>

      {/* Tags */}
      <div className="flex gap-4 flex-wrap text-sm">
        {value?.tags?.map((tag, index) => (
          <span
            key={index}
            className="font-semibold bg-[#E0E0F8] dark:bg-[#3C3C59] text-[#5941C6] rounded-full px-2 py-1 hover:bg-[#6941C6] dark:text-white hover:text-white transition-colors duration-200 ease-in-out"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default BlogItem;
