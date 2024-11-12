import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const NewsLatter = () => {
  const {darkmode}=useThemeContext()
  return (
  <div className={`${darkmode?"dark":""}`}>


    <section className='p-4 dark:bg-[#090D1F]'>
        <div className='w-full lg:w-1/2 mx-auto p-2 flex flex-col gap-4  items-center'>
        <span className='font-semibold  sm:text-xl text-[#6941C6]'>NewsLatter</span>
            <h1 className='text-2xl sm:text-3xl dark:text-white lg:text-4xl font-semibold'>Stories and interviews</h1>
            <p className='text-[#1c1e22] dark:text-[#C0C5D0] sm:text-xl text-center'>Subscribe to learn about new features , the latest in technology solutions and updates</p>
            <div className='flex flex-col items-start w-full justify-center '>
                <div  className='p-2 flex  flex-col sm:flex-row gap-2 items-center w-full'>
                <input className='px-6 w-full py-3 outline-none border-2 border-black rounded-md' type="text" placeholder='Enter your email' name="" id="" />
                <button className='rounded-md px-3 py-2  sm:px-4 sm:py-3 sm:text-xl font-semibold text-white bg-purple-600'>Subscribe</button>
                </div>
                <span className='text-sm px-2 text-[#1c1e22]'>We care about your data in our privacy policy</span>
          
            </div>


        </div>
     
    </section>
  </div>
  )
}

export default NewsLatter
