import React, { useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { useDispatch } from "react-redux";
import { VerifyOtp } from "../Redux/Api/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,

  InputOTPSlot,
} from "@/components/ui/input-otp";

const Verfiyotp = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [verifyotp, setverifyotp] = useState({
    verifyCode: "",
  });

  const HandleVerifyotp = (e) => {
    e.preventDefault();
    dispatch(VerifyOtp(verifyotp))
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          localStorage.setItem("token", res?.data?.refreshToken);
          window.location.href = "/";
        } else {
          toast.error(res.message);
        }
      });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#090D1F] p-6">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Verify OTP
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Enter the 4-digit code sent to your email.
          </p>

          <div className="mt-6">
            <form onSubmit={HandleVerifyotp} className="flex flex-col gap-2">
              <div className="flex justify-center gap-2">
                <InputOTP  maxLength={4}  value={verifyotp?.verifyCode} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}  onChange={(e) => setverifyotp({ verifyCode: e })} >
                  <InputOTPGroup className="flex gap-2 ">
                    <InputOTPSlot className="ring-1 ring-black" index={0} />
                    <InputOTPSlot className="ring-1 ring-black" index={1} />
                    <InputOTPSlot className="ring-1 ring-black"   index={2} />
                    <InputOTPSlot className="ring-1 ring-black" index={3} />
                  </InputOTPGroup>
                
                </InputOTP>

              
              </div>

              <Button
                type="submit"
                className="bg-purple-700 hover:bg-purple-600"
              >
                Verify OTP
              </Button>
            </form>
          </div>

          <p className="mt-4 text-sm text-center text-gray-600">
            Didn't receive the code?{" "}
            <button className="text-blue-500 hover:underline focus:outline-none">
              Resend
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Verfiyotp;
