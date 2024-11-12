import React, { useState } from "react";
import { blogdata } from "../data/blogdata";
import BlogItem from "../components/BlogItem";

const Allblogpage = () => {
  const [blogsdata, setblogsdata] = useState(blogdata);
  return (
    <>
<div className="p-1 flex flex-col gap-2">

    <div>
<h1 className="text-gray-800 text-lg">Total No of Blogs : <span className="font-semibold text-black">{blogdata?.length}</span></h1>

    </div>
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-3  ">
        {blogsdata &&
          blogsdata.map((value) => <BlogItem value={value} key={value.id} />)}
      </div>


</div>
    </>
  );
};

export default Allblogpage;
