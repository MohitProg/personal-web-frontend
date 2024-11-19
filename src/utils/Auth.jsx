import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Auth = ({children}) => {
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");
 
  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
  }, [token]);

  

  return token ? <Outlet/> : null;



}
export default Auth;
