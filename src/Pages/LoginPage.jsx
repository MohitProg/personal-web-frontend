import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../Redux/Api/userApi";
import toast from "react-hot-toast";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import bglogin from "../components/Images/bglg.jpeg"
const LoginPage = () => {
  const {loginstatus}=useSelector((state)=>state.user);
  console.log(loginstatus)
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  // state for hiding and showing user data 
  const [showpassword,setshowpassword]=useState({
    bol:false,
    type:''
  })

  // state of user data 
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  // handle  for login user
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser(user))
      .unwrap()
      .then((res) => {
        console.log(res)
        if (res.success) {
          toast.success(res.message);
          localStorage.setItem("token",res?.data?.refreshToken)

           window.location.href = "/";
          setuser({
            name: "",
            email: "",
            password: "",
          });
        } else {
          toast.error(res.message);
        }
      });
  };
  return (
    <>
      <div className="w-full h-screen relative  bg-cover bg-center flex items-center justify-center p-5" style={{backgroundImage:`url("${bglogin}")`}}>

        <div className="bg-gradient-to-r from-black/55 to-black/40 w-full h-full absolute top-0 right-0 bottom-0 left-0">

        </div>
        <div className="w-full max-w-sm p-6 cmn-parent-bg rounded-lg shadow-lg relative">
          {/* <!-- Heading --> */}
          <h2 className="text-2xl ubuntu-bold  font-semibold text-center text-white">
            Welcome Back{" "}
          </h2>

          {/* <!-- Form --> */}
          <form className="mt-6 space-y-4" onSubmit={HandleSubmit}>
            {/* <!-- Email Input --> */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="block ubuntu-medium text-sm font-medium text-[#949eb6]"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email here"
                value={user?.email}
                onChange={(e) => setuser({ ...user, email: e.target.value })}
                required
               className="bg-[#1c1f26] outline-none border-none cmn-text placeholder:text-[#949eb6] "
              />
            </div>

            {/* <!-- Password Input --> */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="password"
                className="block text-sm ubuntu-medium font-medium text-[#949eb6]"
              >
                Password
              </Label>

              <div className="w-full relative flex  gap-2">

              <Input
                type={showpassword?.type}
                id="password"
                name="password"
                maxLength={15}
                value={user?.password}
                placeholder="Enter the Password"
                onChange={(e) => setuser({ ...user, password: e.target.value })}
                required
                className="bg-[#1c1f26] outline-none border-none text-[#949eb6] placeholder:text-[#949eb6]"
               
              />

              {showpassword?.bol?<VisibilityOffIcon onClick={()=>setshowpassword({bol:!showpassword?.bol,type:"text"})} fontSize="small" className="absolute  right-2 top-[30%] text-white   "/>:<RemoveRedEyeIcon  onClick={()=>setshowpassword({bol:!showpassword?.bol,type:"password"})} fontSize="small" className="absolute  text-white right-2 top-[30%]   "/>}

              </div>
            </div>

            {/* <!-- Login Button --> */}
            <Button className="bg-blue-500 hover:bg-blue-600">
              Login
            </Button>

            {/* <!-- Additional Links --> */}
            <div className="flex items-center justify-between mt-4 text-sm">
              <a href="#" className="text-blue-800 ubuntu-light hover:underline">
                Forgot password?
              </a>
              <Link
                to={"/signup"}
                href="#"
                className="ubuntu-light text-blue-800 hover:underline"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
