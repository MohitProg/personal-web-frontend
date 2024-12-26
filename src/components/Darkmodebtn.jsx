import React from "react";
import { Switch } from "@/components/ui/switch";
import { useThemeContext } from "../context/ThemeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

const Darkmodebtn = () => {
  const { darkmode, setdarkmode } = useThemeContext();

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

      <Switch onCheckedChange={(e) => setdarkmode(e)} />
    </div>
  );
};

export default Darkmodebtn;
