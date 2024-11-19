import { createSlice } from "@reduxjs/toolkit";
import { DeleteCommentfromblog, GetCommentofblog, PostCommentonBlog } from "../Api/commentApi";

const initialState = {
    commentsdata:[],
    getcommentstatus:"idle",
    postcommentstatus:"idle",
    deletecommentstatus:"idle"
  
  
};
export const commentSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    DeleteCommentfromState:(state,action)=>{
        const updateddata=state.commentsdata.filter((value)=>value?._id!==action.payload)
        state.commentsdata=JSON.parse(JSON.stringify(updateddata))

    }
   

    
  },

  extraReducers: (builder) => {
    // post comment on a blog 
    builder
      .addCase(PostCommentonBlog.pending, (state, action) => {
        state.postcommentstatus = "pending";
      })
      .addCase(PostCommentonBlog.fulfilled, (state, action) => {
        if(action?.payload){
            state.commentsdata=[action.payload.data,...state.commentsdata]
        }
       
        state.postcommentstatus = "fulfilled";
      })
      .addCase(PostCommentonBlog.rejected, (state, action) => {
        state.postcommentstatus = "rejected";
      });
    
    
    //   get comment on a blog 
    builder
    .addCase(GetCommentofblog.pending, (state, action) => {
      state.getcommentstatus = "pending";
    })
    .addCase(GetCommentofblog.fulfilled, (state, action) => {
      if(action?.payload){
          state.commentsdata=action.payload.data
      }
     
      state.getcommentstatus = "fulfilled";
    })
    .addCase(GetCommentofblog.rejected, (state, action) => {
      state.getcommentstatus = "rejected";
    });
    

    // delete comment 
    builder
    .addCase(DeleteCommentfromblog.pending, (state, action) => {
      state.deletecommentstatus = "pending";
    })
    .addCase(DeleteCommentfromblog.fulfilled, (state, action) => {
    
     
      state.deletecommentstatus = "fulfilled";
    })
    .addCase(DeleteCommentfromblog.rejected, (state, action) => {
      state.deletecommentstatus = "rejected";
    });
    

    
    }

     
});

export default commentSlice.reducer;
export const {DeleteCommentfromState} = commentSlice.actions 

