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
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Addblog = () => {

  const Navigate=useNavigate()
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
 

  if(blogdata?.category?.length==0){
    alert("please add category here")
  }else{

 
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

      Navigate("/profile")

      
    }else{
      toast.error(res.message)
    }

    
  })

}

}

  // state for file here
  const [file, setfile] = useState(null);

  return (
    <>
    
        <div className="w-full  min-h-screen mx-auto p-6 cmn-bg ">
          <h2 className="text-2xl ubuntu-medium text-white font-semibold  mb-6">
            Add New Blog
          </h2>

          <form className="space-y-5 flex flex-col gap-3"  onSubmit={HandleSubmit}>
            {/* Title Field */}
            <div className="flex flex-col gap-2">
              <Label
               className="cmn-text sm:text-xl">
                Title
              </Label>
              <Input
                type="text"
                name="title"
                value={blogdata?.title}
                onChange={(e) =>
                  setblogdata({ ...blogdata, title: e.target.value })
                }
                required
                className="cmn-input"
                placeholder="Enter blog title"
              />
            </div>

            {/* Summary Field */}
            <div className="flex flex-col gap-2">
              <Label className="cmn-text sm:text-xl">
                Summary
              </Label>
              <Textarea
                name="summary"
                value={blogdata?.summary}
                required
                className="cmn-input"
                onChange={(e) =>
                  setblogdata({ ...blogdata, summary: e.target.value })
                }
             
                placeholder="A short summary of your blog"
                rows="3"
              ></Textarea>
            </div>

            {/* Thumbnail Image Field */}
            <div className="flex flex-col gap-2">
              <Label className="cmn-text sm:text-xl">
                Thumbnail Image
              </Label>
              <Input
                type="file"
                name="file"
                className="cmn-input"
                required
                onChange={(e) => {
                  setblogdata({ ...blogdata, file: e.target.files[0] }),
                    setfile(e.target.files[0]);
                }}

               accept="image/*"
           
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

            <div className="flex flex-col gap-2">
              <Label className="cmn-text sm:text-xl">
                Category
              </Label>
              <div>
                <FormControl sx={{ m: 1, width: "100%" }} size="small">
                  <InputLabel
                    id="demo-multiple-name-Label "
                    className="cmn-text sm:text-xl"
                  >
                    Tags
                  </InputLabel>
                  <Select
                    className="cmn-input"
                    LabelId="demo-multiple-name-Label"
                    id="demo-multiple-name"
                    multiple

                    value={blogdata?.category||[]}
                    onChange={handleChange}
                    Input={
                      <OutlinedInput
                        className="cmn-text sm:text-xl te"
                        Label="Tags"
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
            <div className="flex flex-col gap-2">
              <Label className="cmn-text sm:text-xl">
                Blog Content
              </Label>
              <TextEdito className="ring-1 ring-black" setblogdata={setblogdata} blogdata={blogdata} />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
              className="bg-blue-500 hover:bg-blue-600"
                
               
                
              >
                Publish Blog
              </Button>
            </div>
          </form>
        </div>
     
    </>
  );
};

export default Addblog;
