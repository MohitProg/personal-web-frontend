import { Avatar, Modal } from '@mui/material'
import React from 'react'

const EditProfileModal = ({seteditprofile,editprofile}) => {
  return (
   <>
   <Modal open={editprofile}>


   <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">Edit Profile</h2>

        {/* Profile Photo */}
        <div className="flex items-center space-x-4">
         <Avatar  sx={{height:"100px" , width:"100px"}}/>
          <button className="text-sm text-blue-500 hover:underline">Change Photo</button>
        </div>

        {/* Username Field */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-[#5941C6] focus:outline-none"
            placeholder="Enter your username"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-[#5941C6] focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Bio Field */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Bio</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-[#5941C6] focus:outline-none"
            placeholder="A short bio about yourself"
            rows="3"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={()=>seteditprofile(false)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#5941C6] text-white rounded-md hover:bg-[#4f4484]">
            Save
          </button>
        </div>
      </div>
    </div>
   </Modal>
   
   
   
   </>
  )
}

export default EditProfileModal
