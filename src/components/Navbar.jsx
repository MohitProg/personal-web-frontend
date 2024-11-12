import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Topmenu from "../modal/Topmenu";

import { useThemeContext } from "../context/ThemeContext";

import Darkmodebtn from "./darkmodebtn";
import { Avatar } from "@mui/material";
import SideMenu from "../modal/SideMenu";

const Navbar = () => {
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
    // window.location.reload()
  };

  return (
    <>
      <Topmenu setopenmenu={setopenmenu} openmenu={openmenu} />
      <SideMenu opensidemenu={opensidemenu} setsideopenmenu={setsideopenmenu}/>

      <header className={`${darkmode ? "dark" : ""}`}>
        <nav className="p-3 bg-white flex  justify-between items-center dark:bg-[#090D1F]  ">
          <h1 className=" text-2xl dark:text-white sm:text-3xl font-bold">
           WebTech
          </h1>

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

            <button
              onClick={HandleNaviagte}
              className="rounded-md px-3 py-1  hidden sm:block  sm:text-lg font-semibold text-white bg-[#5941C6]"
            >
              Login
            </button>

{/* avatar ui page  */}
            <button onClick={()=>setsideopenmenu(true)}>
              <Avatar/>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
