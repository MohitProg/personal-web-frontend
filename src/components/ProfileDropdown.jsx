import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import EditProfileModal from "@/modal/EditProfileModal";
import { LogoutUser } from "@/Redux/Api/userApi";
import toast from "react-hot-toast";
const ProfileDropdown = () => {
  // state for edit profile modal 
  const [open,setopen]=useState(false)
  const { userdata } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // logout user functionality 
   const HandleLogoutuser = () => {
      dispatch(LogoutUser())
        .unwrap()
        .then((res) => {
          if (res.success) {
            toast.success(res.message);
            localStorage.removeItem("token");
            localStorage.removeItem("userid");
            window.location.href = "/login";
          } else {
            toast.error(res.message);
          }
        });
    };



  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none focus:outline-none">
          <Avatar className="h-10 w-10 object-fill ">
            <AvatarImage className="object-cover" src={userdata?.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" sm:w-[12vw] mr-3 cmn-bg border-none ">
          <DropdownMenuLabel className="text-xl text-white">My Account</DropdownMenuLabel>

         

          <Link to={"/profile"}>
            <DropdownMenuItem className=" p-2 cmn-text ">Profile</DropdownMenuItem>
          </Link>

          <Link to={"admin/allblog"}>
            <DropdownMenuItem className=" cmn-text ">
              {" "}
              Admin Panel
            </DropdownMenuItem>
          </Link>

          <Link>
            <DropdownMenuItem className=" cmn-text ">
              {" "}
              Settings
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem onClick={(e)=>setopen(true)} className=" cmn-text ">
            {" "}
            Edit Profile
          </DropdownMenuItem>

         
            <DropdownMenuItem onClick={HandleLogoutuser} className=" cmn-text "> Logout</DropdownMenuItem>
          
        </DropdownMenuContent>
      </DropdownMenu>

      <EditProfileModal open={open} setopen={setopen} />
    </>
  );
};

export default ProfileDropdown;
