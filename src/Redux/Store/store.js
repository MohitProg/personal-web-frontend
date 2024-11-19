import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/userSlice"
import blogreducer from "../Slice/blogslice"
import commentSlice from "../Slice/commentSlice"

export const store=configureStore({
    reducer:{
      user:userReducer,
      blog:blogreducer,
      comment:commentSlice
    }
})