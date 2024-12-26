import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ApiClient from "../../../contants";

export const Signupuser=createAsyncThunk("/signup",async(userdata)=>{
    try {
        
        const res=await ApiClient.post("/user/signup",userdata)
        // console.log(res.data)
        return res.data


    } catch (error) {
        console.log(error)
    }

})

export const LoginUser=createAsyncThunk("/login",async(userdata)=>{
    try {
        
        const res=await ApiClient.post("/user/login",userdata)
        // console.log(res.data)
        return res.data


    } catch (error) {
        console.log(error)
    }

})

// method to verify otp
export const VerifyOtp=createAsyncThunk("/otp",async(otp)=>{
    try {
        
        const res=await ApiClient .post("/user/verify/otp",otp)
        console.log(res.data)
        return res.data;


    } catch (error) {
        console.log(error)
    }

})



// method to get single user data 

export const GetSingleUserdata=createAsyncThunk("/user/getuser",async(userdata)=>{
    try {
        
        const res=await ApiClient.get("/user/getuser")
        localStorage.setItem("userid",res.data?.data?._id)
        return res.data
    } catch (error) {
        console.log(error)
    }

})

// update user data 
export const UpdateUser=createAsyncThunk("/user/update",async(userdata)=>{
    try {
        
        const res=await ApiClient.put("/user/update",userdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        return res.data


    } catch (error) {
        console.log(error)
    }

})

// logout user 
export const LogoutUser=createAsyncThunk("/user/logout",async(userdata)=>{
    try {
        
        const res=await ApiClient.get("/user/logout")
        return res.data


    } catch (error) {
        console.log(error)
    }

})