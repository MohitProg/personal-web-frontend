import { createAsyncThunk } from "@reduxjs/toolkit";

import ApiClient from "../../../contants";

export const AddBlog = createAsyncThunk("/addblog", async (blogdata) => {
  try {
    const res = await ApiClient.post("/blog/postblogs", blogdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const DeleteBlog = createAsyncThunk("/deleteblog", async (blogid) => {
  try {
    const res = await ApiClient.delete(`/blog/deleteblog/${blogid}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const GetUserblog = createAsyncThunk("/getuserblog", async () => {
  try {
    const res = await ApiClient.get("/blog/getuserblogs");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const GetAllblogs = createAsyncThunk("/getallblogs", async (pagevalue) => {
  try {
    const res = await ApiClient.get(`/blog/getblogs?page=${pagevalue||1}&limit=${8}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const GetblogbyId = createAsyncThunk("/getblogid", async (blogid) => {
  try {
    const res = await ApiClient.get(`/blog/getblogs/${blogid}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

// get blog by category
export const Getblogbycategory = createAsyncThunk(
  "/category",
  async (blogcategory) => {
    console.log(Object.keys(blogcategory));
    let query = {
        category:blogcategory
    };
   
    

    try {

        // method to convery query object into query string 
        const params = new URLSearchParams(query);
        const res=await ApiClient.get(`/blog/category/?${params}`)
        return res.data;
    } catch (error) {
        console.log(error)

    }
  }
);


export const Updaterecentblogdata = createAsyncThunk("/updateblog", async (blogid) => {
  try {
    const res = await ApiClient.put(`/blog/recentblog/${blogid}`);
 
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const Getrecentblogdata = createAsyncThunk("/recentblog", async () => {
  try {
    const res = await ApiClient.get(`/blog/getrecentblog`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});



export const AddSavedBlogdata = createAsyncThunk("/savedblog", async (blogid) => {
  try {
    const res = await ApiClient.post(`/blog/savedblog/${blogid}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const GetSavedBlogdata = createAsyncThunk("/getsavedblog", async (blogid) => {
  try {
    const res = await ApiClient.get(`/blog/getsavedblog`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});


export const Likeandisliketheblog = createAsyncThunk("/likeanddislike", async (blogid) => {
  try {
    const res = await ApiClient.post(`/blog/likeanddislike/${blogid}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});
