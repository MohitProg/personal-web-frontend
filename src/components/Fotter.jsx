import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
const Fotter = () => {
  const {darkmode}=useThemeContext()
  return (
    <div className={`${darkmode?"dark":""}`}>
       <footer className="p-3 dark:bg-[#090D1F]">
          <h1 className="font-semibold text-xl ">Social links</h1>
          <div className="mt-3 flex gap-6 justify-between lg:justify-start ">
          <div className=" ">
            <Link  target="_blank" to={"https://www.youtube.com/@itssladd99"}  className="flex items-center gap-1 dark:text-white text-lg" href=""><YouTubeIcon className="text-red-700"/> Youtube</Link>
          </div>
          <div>
            <a className="flex items-center gap-1 dark:text-white text-lg" href=""><TwitterIcon className="text-blue-700"/> twitter</a>
          </div>
          <div>
            <Link target="_blank"   to={"https://www.linkedin.com/in/mohit-sharma-3251722a9/"} className="flex items-center dark:text-white gap-1 text-lg" href=""><LinkedInIcon className="text-blue-700"/> LinkedIn</Link>
          </div>
          </div>


        </footer>
    </div>
  )
}

export default Fotter
