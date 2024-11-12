import React from 'react'

const MainHead = ({Text}) => {
  return (
    <div className="border-b-2 border-t-2 border-gray-400">
    <h1 className="text-center text-7xl dark:text-white  sm:text-9xl lg:text-[13rem] font-bold">
     {Text}
    </h1>
  </div>
  )
}

export default MainHead
