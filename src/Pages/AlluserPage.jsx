import { Delete } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'

const AlluserPage = () => {

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      blogs: 24,
      profilePhoto: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      blogs: 18,
      profilePhoto: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.j@example.com',
      blogs: 30,
      profilePhoto: 'https://via.placeholder.com/50',
    },
  ];
  
  return (
    <div>
       <div className="container mx-auto p-4">

       <h1 className="text-gray-800 text-sm">Total No of users : <span className="font-semibold text-black">{users?.length}</span></h1>
      <div className="overflow-x-auto dark:bg-[#1E1E2D] bg-white shadow-md rounded-lg mt-4">
        <table className="min-w-full  text-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-bold  tracking-wider">Profile</th>
              <th className="px-4 py-3 text-left text-sm font-bold  tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-sm font-bold  tracking-wider">Total Blogs</th>
              <th className="px-4 py-3 text-left text-sm font-bold  tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 flex items-center space-x-3">
                  <Avatar/>
                  <span className="font-medium">{user.name}</span>
                </td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.blogs}</td>
                <td className="px-4 py-3">
                  <button
                  
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    <Delete/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

      
    </div>
  )
}

export default AlluserPage
