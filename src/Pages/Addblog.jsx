import React from 'react'
import TextEdito from '../components/TextEdito'

const Addblog = () => {
  return (
   <>
    <div className="w-full  min-h-screen mx-auto p-6 bg-white rounded-lg shadow-md mt-2">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add New Blog</h2>
      
      <form className="space-y-5">
        
        {/* Title Field */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter blog title"
          />
        </div>

        {/* Summary Field */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Summary</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="A short summary of your blog"
            rows="3"
          ></textarea>
        </div>

        {/* Thumbnail Image Field */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Thumbnail Image</label>
          <input
            type="file"
            className="w-full text-gray-600 bg-white border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Blog Editor Field */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Blog Content</label>
         <TextEdito/>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="button"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>

   
   
   
   
   </>
  )
}

export default Addblog
