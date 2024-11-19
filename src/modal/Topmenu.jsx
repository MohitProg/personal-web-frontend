import React from "react";
import { Link, useLocation } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import { Drawer, Switch } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeContext } from "../context/ThemeContext";
import Darkmodebtn from "../components/darkmodebtn";
const Topmenu = ({ openmenu, setopenmenu }) => {
  const { darkmode, setdarkmode } = useThemeContext();
  const path = useLocation().pathname;
  return (
    <>
      <Drawer open={openmenu} anchor="top">
        <div className={`${darkmode ? "dark" : ""}`}>
          <div className=" p-6 z-[999] dark:bg-[#121212]">
            <h1 className="text-2xl text-center  font-bold dark:text-[#C0C5D0]">
              Mohit Sharma
            </h1>

            <div className="  text-[#1A1A1A]  mt-4 ">
              <ul className="flex flex-col dark:text-white text-start gap-8 text-lg">
                {/* <Link
                  onClick={() => setopenmenu(false)}
                  className="hover:border-b-2 dark:text-white transition-all duration-200 ease-in-out border-[#090D1F]"
                  to="/"
                >
                  Blog
                </Link>
                <Link
                  className="hover:border-b-2 dark:text-white transition-all duration-200 ease-in-out border-[#090D1F]"
                  onClick={() => setopenmenu(false)}
                  to={"projects"}
                >
                  Projects
                </Link>
                <Link
                  className="hover:border-b-2 dark:text-white transition-all duration-200 ease-in-out border-[#090D1F]"
                  onClick={() => setopenmenu(false)}
                  to="about"
                >
                  About
                </Link>
                <Link
                  className="hover:border-b-2 dark:text-white transition-all duration-200 ease-in-out border-[#090D1F]"
                  onClick={() => setopenmenu(false)}
                  to="newsletter"
                >
                  Newsletter
                </Link> */}

<Link
                  className={`hover:border-b-2 transition-all duration-200 ease-in-out border-[#090D1F] ${
                    path === "/" ? "border-b-2" : ""
                  }`}

                  onClick={() => setopenmenu(false)}
                  to="/"
                >
                  Blog
                </Link>
                <Link
                  className={`hover:border-b-2 transition-all duration-200 ease-in-out border-[#090D1F] ${
                    path === "/projects" ? "border-b-2" : ""
                  }`}

                  onClick={() => setopenmenu(false)}
                  to={"projects"}
                >
                  Projects
                </Link>
                <Link
                  className={`hover:border-b-2 transition-all duration-200 ease-in-out border-[#090D1F] ${
                    path === "/about" ? "border-b-2" : ""
                  }`}

                  onClick={() => setopenmenu(false)}
                  to="about"
                >
                  About
                </Link>
                <Link
                  className={`hover:border-b-2 transition-all duration-200 ease-in-out border-[#090D1F] ${
                    path === "/newsletter" ? "border-b-2" : ""
                  }`}

                  onClick={() => setopenmenu(false)}
                  to="newsletter"
                >
                  Newsletter
                </Link>
              </ul>
            </div>
           

            <div className="w-full flex gap-3 items-center justify-center mt-4 dark:text-white">
            <Darkmodebtn/>
              <CloseIcon fontSize="large" onClick={() => setopenmenu(false)} />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Topmenu;
