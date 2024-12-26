import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useThemeContext } from '../context/ThemeContext';
import { useDispatch } from 'react-redux';

import { UpdateSearchvalue } from '../Redux/Slice/blogslice';
import { Input } from './ui/input';
const Searchbar = ({value}) => {
    const dispatch=useDispatch();
    const {darkmode}=useThemeContext();
    const [searchdata,setsearchdata]=useState("");

    const HandleChange=(e)=>{
      setsearchdata(e.target.value);
      dispatch(UpdateSearchvalue(e.target.value))

    }
   


  return (
    <>
    <div className={`${darkmode?"dark":""}  ` }>

    <div className='    items-center  flex   bg-[#1c1f26] rounded-full    relative '>
        <SearchIcon    fontSize='medium' className='absolute right-2 text-purple-600 cmn-text'/>
        <input  type="text" onChange={HandleChange} name="" id="" placeholder='Search your blog' className='w-full   border-none bg-transparent p-2 focus:outline-[#949eb6] outline-none rounded-full cmn-text ' />
    </div>
    </div>
    
    </>
  )
}

export default Searchbar
