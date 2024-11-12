import { createContext,useContext, useState } from "react";
const themecontext=createContext();
export const useThemeContext=()=>useContext(themecontext)
export const ThemeContextProvider=({children})=>{

    // state for theme 
    const [darkmode,setdarkmode]=useState(false)
    return (
        <themecontext.Provider  value={{setdarkmode,darkmode}}>
{children}
        </themecontext.Provider>
    )
}