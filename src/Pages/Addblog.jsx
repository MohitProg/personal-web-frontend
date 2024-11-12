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
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  // state for select
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };


  // starting main functionality from here 

  const {darkmode}=useThemeContext();


  return (
    <>

    <div className={`${darkmode ? "dark" : ""}`}>

      <div className="w-full  min-h-screen mx-auto p-6 dark:bg-[#090D1F] bg-white ">
        <h2 className="text-2xl dark:text-[#C0C5D0] font-semibold text-gray-700 mb-6">
          Add New Blog
        </h2>

        <form className="space-y-5 flex flex-col gap-3">
          {/* Title Field */}
          <div>
            <label className="block dark:text-[#C0C5D0] text-gray-600 text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
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
              className="w-full text-gray-600 dark:text-[#C0C5D0] bg-transparent bg-white border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#5941C6] focus:outline-none"
            />
          </div>

          <div>
            <label className="block dark:text-[#C0C5D0] text-gray-600 text-sm font-medium mb-1">
              Category
            </label>
            <div>
              <FormControl sx={{ m: 1, width: "100%" }} size="small">
                <InputLabel id="demo-multiple-name-label " className="dark:text-[#C0C5D0]">Tags</InputLabel>
                <Select
                className="dark:ring-gray-500 dark:ring-1"
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput className="dark:text-[#C0C5D0]" label="Tags" />}
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
            <TextEdito />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="button"
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
