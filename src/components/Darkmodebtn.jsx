import React from "react";
import { Switch } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

const Darkmodebtn = () => {
    const {darkmode,setdarkmode}=useThemeContext()
  return (
    <div className="flex  items-center justify-center">
      {/* <button>
      <CircleIcon/>
  </button> */}

      {darkmode ? (
        <span className="text-yellow-500">
          <WbSunnyIcon />
        </span>
      ) : (
        <span>
          <NightlightOutlinedIcon />
        </span>
      )}

      <Switch checked={darkmode} onChange={(e) => setdarkmode(e.target.checked)} />
    </div>
  );
};

export default Darkmodebtn;
