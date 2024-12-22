import React, { useState } from 'react';

const Profile = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'} min-h-screen p-4`}>  
      <div className="flex justify-end items-center space-x-4 mb-6">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-500"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-500">
          <i className="fas fa-bell"></i>
        </button>
      </div>

      {/* Achievements Card */}
      <div className="bg-gray-600 p-6 rounded-lg shadow-lg text-center mb-6 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-2">Achievements</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-500 p-4 rounded-lg">🏆 Hackathon Winner</div>
          <div className="bg-gray-500 p-4 rounded-lg">📜 Certified UI/UX Designer</div>
          <div className="bg-gray-500 p-4 rounded-lg">💡 Top Innovator 2024</div>
          <div className="bg-gray-500 p-4 rounded-lg">🎖️ [Badge Placeholder]</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">  
        {/* User Details Card */}
        <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="text-gray-300">@johndoe</p>
          <p className="mt-2">Email: johndoe@example.com</p>
          <p>Bio: A passionate developer and designer.</p>
        </div>

        {/* Additional Info Card */}
        <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-4">Additional Information</h2>
          <p>Contact: +1234567890</p>
          <p>Skills: JavaScript, React, Tailwind</p>
          <p>Recent Activity: Updated profile picture</p>
          <button className="mt-4 bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-400">
            Account Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;