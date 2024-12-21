import React from 'react'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import { FaHome, FaSuitcase, FaCode, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col justify-between p-4">
      {/* Logo Section */}
      <div className="flex justify-center mb-8">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Logo" 
          className="w-24 h-24 rounded-full"
        />
      </div>

      {/* Navigation Sections */}
      <div className="space-y-6">
        <Link to="/home" className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md cursor-pointer">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </Link>
        <Link to="/Interview" className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md cursor-pointer">
          <FaHome className="text-2xl" />
          <span>Interview</span>
        </Link>
        <Link to="/career" className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md cursor-pointer">
          <FaSuitcase className="text-2xl" />
          <span>Career</span>
        </Link>
        <Link to="/skills" className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md cursor-pointer">
          <FaCode className="text-2xl" />
          <span>Skills</span>
        </Link>
        <Link to="/userprofile" className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md cursor-pointer">
          <FaUserCircle className="text-2xl" />
          <span>UserProfile</span>
        </Link>
      </div>

      {/* Logout Section */}
      <div className="flex items-center space-x-4 mt-auto hover:bg-red-700 p-3 rounded-md cursor-pointer">
        <FaSignOutAlt className="text-2xl" />
        <span>Logout</span>
      </div>
    </div>
  )
}

export default Sidebar
