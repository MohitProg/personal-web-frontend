import React, { useState } from "react";
import TextEdito from "../components/TextEdito";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import { useDispatch } from "react-redux";
import { AddBlog } from "../Redux/Api/blogApi";
import toast from "react-hot-toast";
import { AddBlogstoState } from "../Redux/Slice/blogslice";

const Addblog = () => {
  // functionality for select option  of material ui
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Personal Project",
    "Programming Tutorials",
    "Web Development",
    "Mobile App Development",
    "Data Science & AI",
    "Cybersecurity",
    "Cloud Computing",
    "Tech News & Trends",
    "Educational Tools & Apps",
    "Study Tips & Strategies",
    "Online Learning Platforms",
    "Software Development",
    "Coding Challenges",
    "Tech Careers & Job Advice",
    "Programming Languages",
    "Open Source Projects",
    "Tech Gadgets & Reviews",
    "Startups & Entrepreneurship",
    "Machine Learning & AI",
    "Blockchain & Cryptocurrency",
    "UI/UX Design",
    "DevOps & Automation",
    "Networking & Server Management",
    "Tech Conferences & Events",
    "Digital Marketing",
    "EdTech Innovations",
    "E-Learning Development",
  ];

  // state for select
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const category=typeof value === "string" ? value.split(",") : value
    
    setblogdata({...blogdata,category:category});
  };

  // starting main functionality from here

  const { darkmode } = useThemeContext();
  // dispatch
  const dispatch=useDispatch();

  // state for hanlde blog data
  const [blogdata, setblogdata] = useState({
    category: "",
    title: "",
    summary: "",
    content: "",
    file: "",
  });




const HandleSubmit=(e)=>{
  e.preventDefault();
  console.log(e)

  if(blogdata?.category?.length==0){
    alert("please add category here")
  }
  const formdata=new FormData();
  formdata.append("title",blogdata?.title)
  formdata.append("category",blogdata?.category)
  formdata.append("summary",blogdata?.summary)
  formdata.append("content",blogdata?.content)
  formdata.append("file",blogdata?.file)


  dispatch(AddBlog(blogdata)).unwrap().then((res)=>{
    if(res.success){
      toast.success(res.message)
      dispatch(AddBlogstoState(res.data))
      setblogdata(
        {
          category: "",
          title: "",
          summary: "",
          content: "",
          file: "",
        }
      )
    }else{
      toast.error(res.message)
    }

    
  })









}

  // state for file here
  const [file, setfile] = useState(null);

  return (
    <>
      <div className={`${darkmode ? "dark" : ""}`}>
        <div className="w-full  min-h-screen mx-auto p-6 dark:bg-[#090D1F] bg-white ">
          <h2 className="text-2xl dark:text-[#C0C5D0] font-semibold text-gray-700 mb-6">
            Add New Blog
          </h2>

          <form className="space-y-5 flex flex-col gap-3"  onSubmit={HandleSubmit}>
            {/* Title Field */}
            <div>
              <label className="block dark:text-[#C0C5D0] text-gray-600 text-sm font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={blogdata?.title}
                onChange={(e) =>
                  setblogdata({ ...blogdata, title: e.target.value })
                }
                className="w-full border dark:text-[#C0C5D0] dark:bg-transparent border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-[#5941C6] focus:outline-none"
                placeholder="Enter blog title"
              />
            </div>

            {/* Summary Field */}
            <div>
              <label className="block dark:text-[#C0C5D0] text-gray-600 text-sm font-medium mb-1">
                Summary
              </label>
              <textarea
                name="summary"
                value={blogdata?.summary}
                onChange={(e) =>
                  setblogdata({ ...blogdata, summary: e.target.value })
                }
                className="w-full border dark:text-[#C0C5D0] dark:bg-transparent border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-[#5941C6] focus:outline-none"
                placeholder="A short summary of your blog"
                rows="3"
              ></textarea>
            </div>

            {/* Thumbnail Image Field */}
            <div>
              <label className="block dark:text-[#C0C5D0] text-gray-600 text-sm font-medium mb-1">
                Thumbnail Image
              </label>
              <input
                type="file"
                name="file"
                onChange={(e) => {
                  setblogdata({ ...blogdata, file: e.target.files[0] }),
                    setfile(e.target.files[0]);
                }}
                className="w-full text-gray-600 dark:text-[#C0C5D0] bg-transparent  border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#5941C6] focus:outline-none"
              />

              {file !== null && (
                <div className="flex items-center  justify-start w-full p-3">
                  <img
                    src={file && URL.createObjectURL(file)}
                    className=" h-60  object-contain"
                    alt="thumbnail image "
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block dark:text-[#C0C5D0] text-gray-600 text-sm font-medium mb-1">
                Category
              </label>
              <div>
                <FormControl sx={{ m: 1, width: "100%" }} size="small">
                  <InputLabel
                    id="demo-multiple-name-label "
                    className="dark:text-[#C0C5D0]"
                  >
                    Tags
                  </InputLabel>
                  <Select
                    className="dark:ring-gray-500 dark:ring-1"
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={blogdata?.category||[]}
                    onChange={handleChange}
                    input={
                      <OutlinedInput
                        className="dark:text-[#C0C5D0]"
                        label="Tags"
                      />
                    }
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        //   style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>

            {/* Blog Editor Field */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Blog Content
              </label>
              <TextEdito setblogdata={setblogdata} blogdata={blogdata} />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                
                className="px-6 py-2 bg-[#5941C6] text-white rounded-md hover:bg-blue-600 transition duration-200"
              >
                Publish Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addblog;
