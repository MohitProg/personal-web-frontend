import { createSlice } from "@reduxjs/toolkit";
import {
  GetSingleUserdata,
  LoginUser,
  LogoutUser,
  Signupuser,
  UpdateUser,
  VerifyOtp,
} from "../Api/userApi";
const initialState = {
  userdata: "",
  signupstatus: "idle",
  loginstatus: "idle",
  verifyotpstatus: "idle",
  singleuserstatus: "idle",
  updateusertstatus: "idle",
  logoutstatus: "idle",
};
export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    Postuserdata: (state, action) => {
      state.userdata = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(Signupuser.pending, (state, action) => {
        state.signupstatus = "pending";
      })
      .addCase(Signupuser.fulfilled, (state, action) => {
        state.signupstatus = "fullfilled";
      })
      .addCase(Signupuser.rejected, (state, action) => {
        state.signupstatus = "rejected";
      });

    // login user
    builder
      .addCase(LoginUser.pending, (state, action) => {
        state.loginstatus = "pending";
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        const { success, data } = action.payload;

        if (success) {
          state.userdata = data;
        }
        state.loginstatus = "fullfilled";
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loginstatus = "rejected";
      });

    // verify otp
    builder
      .addCase(VerifyOtp.pending, (state, action) => {
        state.verifyotpstatus = "pending";
      })
      .addCase(VerifyOtp.fulfilled, (state, action) => {
        const { success, data } = action.payload;

        if (success) {
          state.userdata = data;
        }
        state.verifyotpstatus = "fullfilled";
      })
      .addCase(VerifyOtp.rejected, (state, action) => {
        state.verifyotpstatus = "rejected";
      });

    // get single userdata
    builder
      .addCase(GetSingleUserdata.pending, (state, action) => {
        state.singleuserstatus = "pending";
      })
      .addCase(GetSingleUserdata.fulfilled, (state, action) => {
        const { success, data } = action.payload;

        if (success) {
          state.userdata = data;
        }
        state.singleuserstatus = "fullfilled";
      })
      .addCase(GetSingleUserdata.rejected, (state, action) => {
        state.singleuserstatus = "rejected";
      });

    // update user data
    builder
      .addCase(UpdateUser.pending, (state, action) => {
        state.updateusertstatus = "pending";
      })
      .addCase(UpdateUser.fulfilled, (state, action) => {
        const { success, data } = action.payload;

        if (success) {
          state.userdata = data;
        }
        state.updateusertstatus = "fullfilled";
      })
      .addCase(UpdateUser.rejected, (state, action) => {
        state.updateusertstatus = "rejected";
      });

    // logout user

    builder
      .addCase(LogoutUser.pending, (state, action) => {
        state.logoutstatus = "pending";
      })
      .addCase(LogoutUser.fulfilled, (state, action) => {
        state.logoutstatus = "fullfilled";
      })
      .addCase(LogoutUser.rejected, (state, action) => {
        state.logoutstatus = "rejected";
      });
  },
});

export default userSlice.reducer;

export const { Postuserdata } = userSlice.actions;
