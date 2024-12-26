import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useThemeContext } from '../context/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
const Fotter = () => {
  const {darkmode}=useThemeContext()
  return (
 
       <footer className="p-3 cmn-bg">
          <h1 className="font-semibold text-xl ubuntu-medium ">Social links</h1>
          <div className="mt-3 flex flex-col sm:flex-row gap-2 justify-between lg:justify-start ">
          <div className=" ">
            <Link  target="_blank" to={"https://www.youtube.com/@itssladd99"}  className="flex cmn-text  bg-[#1c1f26] p-1  rounded-sm text-sm items-center gap-1  " href=""><YouTubeIcon className="text-red-700"/> Youtube</Link>
          </div>
          <div>
            <a className="flex items-center  bg-[#1c1f26] rounded-sm p-1 gap-1  text-lg cmn-text" href=""><TwitterIcon className="text-blue-700"/> twitter</a>
          </div>
          <div>
            <Link target="_blank"   to={"https://www.linkedin.com/in/mohit-sharma-3251722a9/"} className="flex items-center bg-[#1c1f26]  rounded-sm p-1 gap-1 text-lg cmn-text" href=""><LinkedInIcon className="text-blue-700"/> LinkedIn</Link>
          </div>
          <div>
            <Link target="_blank"   to={"https://github.com/MohitProg/"} className="flex items-center bg-[#1c1f26]  rounded-sm p-1 gap-1 text-lg cmn-text" href=""><GitHubIcon className="text-gray-600"/> Github</Link>
          </div>
          <div>
            <Link target="_blank"   to={"https://www.instagram.com/unemployed_mohit/"} className="flex items-center bg-[#1c1f26]  rounded-sm p-1 gap-1 text-lg cmn-text" href=""><InstagramIcon className="text-orange-600"/> InstaGram</Link>
          </div>
          </div>


        </footer>

  )
}

export default Fotter
