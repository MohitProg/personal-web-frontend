import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Topmenu from "../modal/Topmenu";

import { useThemeContext } from "../context/ThemeContext";

import Darkmodebtn from "./darkmodebtn";
import { Avatar } from "@mui/material";
import SideMenu from "../modal/SideMenu";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleUserdata } from "../Redux/Api/userApi";
import toast from "react-hot-toast";
import { GetAllblogs, Getrecentblogdata, GetSavedBlogdata, GetUserblog } from "../Redux/Api/blogApi";

const Navbar = () => {
  
  // dispatch
  const dispatch=useDispatch();
  // state for navigation
  const Naviagte = useNavigate();
  // state for navbar
  const [openmenu, setopenmenu] = useState(false);
  // state for side menu page 
  const [opensidemenu,setsideopenmenu]=useState(false)
  // setting pathname
  const path = useLocation().pathname;
  // value of dark mode
  const { darkmode } = useThemeContext();
  // Naviagte function for login page
  

  const HandleNaviagte = () => {
    console.log("mohit sharma");
    window.location.href = "/login";
   
  };

  // getting data of user from here 
const {userdata,singleuserstatus}=useSelector((state)=>state.user);
const {userblogstatus,getallblogstatus,getrecentblogstatus,pagevalue,getsaveblogstatus}=useSelector((state)=>state.blog);
const token=localStorage.getItem("token");




// creating global data dispatching here 

useEffect(()=>{
  if(singleuserstatus==="idle" && token ){

    dispatch(GetSingleUserdata()).unwrap().then((res)=>{
     
      if(!res.success){
        toast.error(res.msg)
        localStorage.removeItem("token")
    
        
      }
    })
  }

  getrecentblogstatus==="idle" && token && dispatch(Getrecentblogdata())
 userblogstatus==="idle" && token && dispatch(GetUserblog())
 getsaveblogstatus==="idle" && token &&  dispatch(GetSavedBlogdata());



},[dispatch,userblogstatus,singleuserstatus,getallblogstatus,getsaveblogstatus,getrecentblogstatus,token,pagevalue])


console.log(pagevalue)
useEffect(()=>{
  if(pagevalue!==0 ){

    dispatch(GetAllblogs(pagevalue));
  }
 
  console.log("mohit")

  
},[pagevalue])




  return (
    <>
      <Topmenu setopenmenu={setopenmenu} openmenu={openmenu} />
      <SideMenu opensidemenu={opensidemenu} setsideopenmenu={setsideopenmenu}/>

      <header className={`${darkmode ? "dark" : ""} ${["/admin/allblog","/admin/alluser","/addblog","/login","/signup"].includes(path)?"hidden":"block"}`}>
        <nav className="p-3 bg-white flex  justify-between items-center dark:bg-[#090D1F]  ">
          <div className=" flex items-center gap-2 text-2xl dark:text-white sm:text-3xl font-bold">
            <Avatar src="http://res.cloudinary.com/dmd35imtv/image/upload/v1732077509/z7l9bdejwaxqzu660ug5.webp"/>
           WebTech
          </div>

          <div className="flex gap-2 items-center">
            <div className="sm:flex gap-5 items-center text-[#1A1A1A] hidden ">
              <ul className="flex gap-8 text-lg dark:text-white">
                <Link
                  className={`hover:border-b-2 transition-all duration-200 ease-in-out border-[#090D1F] ${
                    path === "/" ? "border-b-2" : ""
                  }`}
                  to="/"
                >
                  Blog
                </Link>
                <Link
                  className={`hover:border-b-2 transition-all duration-200 ease-in-out border-[#090D1F] ${
                    path === "/projects" ? "border-b-2" : ""
                  }`}
                  to={"projects"}
                >
                  Projects
                </Link>
                <Link
                  className={`hover:border-b-2 transition-all duration-200 ease-in-out border-[#090D1F] ${
                    path === "/about" ? "border-b-2" : ""
                  }`}
                  to="about"
                >
                  About
                </Link>
                <Link
                  className={`hover:border-b-2 transition-all duration-200 ease-in-out border-[#090D1F] ${
                    path === "/newsletter" ? "border-b-2" : ""
                  }`}
                  to="newsletter"
                >
                  Newsletter
                </Link>
              </ul>
              <Darkmodebtn />
            </div>
            <button
              onClick={() => setopenmenu(true)}
              className="hover:text-gray-500 dark:text-white sm:hidden"
            >
              <MenuIcon fontSize="large" />
            </button>

            {/* toogle for login and profile button  */}

            {token && token?.length>0?
            <button onClick={()=>setsideopenmenu(true)}>
              <Avatar src={userdata?.avatar}/>
            </button>: <button
              onClick={HandleNaviagte}
              className="rounded-md px-3 py-1   sm:block  sm:text-lg font-semibold text-white bg-[#5941C6]"
            >
              Login
            </button>}

           


          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
