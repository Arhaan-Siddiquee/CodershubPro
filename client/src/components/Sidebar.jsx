import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaHome, FaSuitcase, FaCode, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import navbarlogo from "../assets/navbarlogo.png";
import { SiGooglemeet } from "react-icons/si";

const Sidebar = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); 

  //to handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Example: Remove user data from localStorage

    // Navigate to the sign-in page
    navigate('/signin');
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col justify-between p-4 sticky top-0 left-0">
      {/* Logo Section */}
      <div className="relative flex justify-center mb-8">
        <img
          src={navbarlogo}
          alt="Logo"
          className="w-48 h-16"
        />
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {/* Navigation Sections */}
      <div className="space-y-6">
        <Link to="/home" className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md cursor-pointer">
          <FaHome className="text-2xl" />
          <span>Home</span>
        </Link>
        <Link to="/Interview" className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md cursor-pointer">
          <SiGooglemeet className="text-2xl" />
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
      <div
        onClick={handleLogout} 
        className="flex items-center space-x-4 mt-auto hover:bg-red-700 p-3 rounded-md cursor-pointer"
      >
        <FaSignOutAlt className="text-2xl" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
