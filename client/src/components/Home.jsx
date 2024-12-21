import React from 'react'
import { FaLaptopCode, FaClipboardCheck, FaChartLine } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-gray-100">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Your Dream Tech Career Awaits
      </h1>

      {/* Subheading */}
      <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl">
        Leading tech giants are actively hiring. Prepare, excel, and land your dream role.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4 max-w-screen-xl">
        {/* Card 1: Master Technical Skills */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transition transform hover:scale-105">
          <FaLaptopCode className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Master Technical Skills</h3>
          <p className="text-gray-600">Sharpen your coding skills with hands-on practice and real-world projects.</p>
        </div>

        {/* Card 2: Interview Preparation */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transition transform hover:scale-105">
          <FaClipboardCheck className="text-4xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Interview Preparation</h3>
          <p className="text-gray-600">Get ready for interviews with mock interviews, tips, and expert guidance.</p>
        </div>

        {/* Card 3: Career Growth */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transition transform hover:scale-105">
          <FaChartLine className="text-4xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Career Growth</h3>
          <p className="text-gray-600">Learn strategies to grow your career and stand out in the tech industry.</p>
        </div>
      </div>

      {/* Bottom Box */}
      <div className="bg-blue-500 text-white p-8 rounded-lg max-w-lg mx-auto text-center shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
        <p className="text-lg mb-6">Take the first step towards your dream career.</p>
        <button className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition">
          Start Assignment
        </button>
      </div>
    </div>
  )
}

export default Home
