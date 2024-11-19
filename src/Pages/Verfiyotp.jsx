import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { VerifyOtp } from '../Redux/Api/userApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Verfiyotp = () => {

    const dispatch=useDispatch();
    const Navigate=useNavigate()
    
    const [verifyotp,setverifyotp]=useState({
        verifyCode:""
    });
    
    const HandleVerifyotp=(e)=>{
        e.preventDefault();
        dispatch(VerifyOtp(verifyotp)).unwrap().then((res)=>{

            if(res.success){
                toast.success(res.message);
                localStorage.setItem("token",res?.data?.refreshToken)
                window.location.href="/"
            }else{
                toast.error(res.message);
            }
        })
    }

   return (
   <>
   
   <div className="flex items-center justify-center min-h-screen bg-[#090D1F] p-6">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Verify OTP</h2>
        <p className="mt-2 text-center text-gray-600">Enter the 4-digit code sent to your email.</p>
        
        <div className="mt-6">
          <form onSubmit={HandleVerifyotp}>
            <div className="flex justify-center gap-2">
           
                <input
               
                  type="text"
                  name='verifyCode'
                  value={verifyotp?.verifyCode}
                  onChange={(e)=>setverifyotp({verifyCode:e.target.value})}
                  maxLength="4"
                  className="w-full h-12 text-center ring-1 ring-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-2xl"
                />
          
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Verify OTP
            </button>
          </form>
        </div>

        <p className="mt-4 text-sm text-center text-gray-600">
          Didn't receive the code?{" "}
          <button className="text-blue-500 hover:underline focus:outline-none">Resend</button>
        </p>
      </div>
    </div>
   
   
   </>
  )
}

export default Verfiyotp
