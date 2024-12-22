import React from 'react'

const Career = () => {
  return (
    <div className="career-container p-8 bg-gray-400 ">
      <h1 className="text-4xl text-center text-gray-100 mb-12">Career Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="career-card bg-[#2e3b6b] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-gray-100 mb-3">Job Applications</h3>
          <p className="text-gray-300">View your applications and their statuses.</p>
        </div>
        
        <div className="career-card bg-[#2e3b6b] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-gray-100 mb-3">Interview Schedule</h3>
          <p className="text-gray-300">Keep track of your upcoming interviews.</p>
        </div>
        
        <div className="career-card bg-[#2e3b6b] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-gray-100 mb-3">Skill Development</h3>
          <p className="text-gray-300">Explore courses and resources to enhance your skills.</p>
        </div>
      </div>
    </div>
  )
}

export default Career