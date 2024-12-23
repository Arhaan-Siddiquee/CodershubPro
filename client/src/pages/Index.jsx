import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaCode, FaUsers, FaBrain, FaCalendarCheck } from 'react-icons/fa'; // React Icons

function Index() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Skills Box */}
      <Link
        to="/roadmap"
        className="flex flex-col items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 cursor-pointer transform transition-all duration-300 hover:scale-105"
      >
        <FaCode className="text-5xl mb-6 transition-transform transform group-hover:rotate-12" />
        <h2 className="text-2xl font-semibold text-center mb-3">Skills</h2>
        <p className="text-center text-lg leading-relaxed">
          Enhance your technical skills with a focused roadmap and resources tailored to your growth.
        </p>
      </Link>

      {/* Community Box */}
      <Link
        to="/community"
        className="flex flex-col items-center bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-green-600 hover:via-green-700 hover:to-green-800 cursor-pointer transform transition-all duration-300 hover:scale-105"
      >
        <FaUsers className="text-5xl mb-6 transition-transform transform group-hover:rotate-12" />
        <h2 className="text-2xl font-semibold text-center mb-3">Community</h2>
        <p className="text-center text-lg leading-relaxed">
          Join a network of like-minded professionals and expand your opportunities for collaboration.
        </p>
      </Link>

      {/* Esmoai Box */}
      <Link
        to="/esmoai"
        className="flex flex-col items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white p-8 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 cursor-pointer transform transition-all duration-300 hover:scale-105"
      >
        <FaBrain className="text-5xl mb-6 transition-transform transform group-hover:rotate-12" />
        <h2 className="text-2xl font-semibold text-center mb-3">EsmoAI</h2>
        <p className="text-center text-lg leading-relaxed">
          Harness the power of AI to solve complex problems and automate your daily tasks.
        </p>
      </Link>

      {/* Find Events Box */}
      <Link
        to="/findevents"
        className="flex flex-col items-center bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white p-8 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:via-red-700 hover:to-red-800 cursor-pointer transform transition-all duration-300 hover:scale-105"
      >
        <FaCalendarCheck className="text-5xl mb-6 transition-transform transform group-hover:rotate-12" />
        <h2 className="text-2xl font-semibold text-center mb-3">Find Events</h2>
        <p className="text-center text-lg leading-relaxed">
          Discover upcoming events, conferences, and networking opportunities in your field.
        </p>
      </Link>
    </div>
  );
}

export default Index;
