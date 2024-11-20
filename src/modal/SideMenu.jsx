import { Drawer } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
const SideMenu = ({ opensidemenu, setsideopenmenu }) => {
  const { darkmode } = useThemeContext();
  return (
    <>
      <Drawer anchor="left" open={opensidemenu}>
        <div className={`${darkmode ? "dark" : ""}`}>
          <div className="bg-white dark:bg-[#1E1E2D] dark:text-gray-400   min-h-screen w-80 p-2">
            <div className="w-full flex items-center justify-end">
              <button
                className="hover:text-purple-500"
                onClick={() => setsideopenmenu(false)}
              >
                <CloseIcon />
              </button>
            </div>

            
            <ul className="flex flex-col gap-2 font-semibold dark:text-[#C0C5D0] text-gray-600  p-2 text-lg ">
              <Link to={'/profile'} onClick={()=>setsideopenmenu(false)} className="hover:bg-[#5941C6] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                Profile
              </Link>
              {/* <Link to={'admin/allblog'} onClick={()=>setsideopenmenu(false)} className="hover:bg-[#5941C6] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                Admin Panel
              </Link> */}
              <Link className="hover:bg-[#5941C6] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                Settings
              </Link>
              <Link className="hover:bg-[#5941C6] hover:text-white rounded-lg py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer">
                Service
              </Link>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SideMenu;
