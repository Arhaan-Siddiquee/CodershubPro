import React from 'react';

const Career = () => {
  return (
    <div className="career-container p-8 bg-gray-400">
      <h1 className="text-4xl text-center text-gray-100 mb-12">Career Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Job Applications Card */}
        <div className="career-card bg-[#2e3b6b] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-gray-100 mb-3">Job Applications</h3>
          <p className="text-gray-300">View your applications and their statuses.</p>
        </div>

        {/* Interview Schedule Card */}
        <div className="career-card bg-[#2e3b6b] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-gray-100 mb-3">Interview Schedule</h3>
          <p className="text-gray-300">Keep track of your upcoming interviews.</p>
        </div>

        {/* Skill Development Card */}
        <div className="career-card bg-[#2e3b6b] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-gray-100 mb-3">Skill Development</h3>
          <p className="text-gray-300">Explore courses and resources to enhance your skills.</p>
        </div>
      </div>

      {/* Additional Features for Career */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        {/* ATS Checker Card */}
        <div className="career-card bg-[#2e3b6b] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-gray-100 mb-3">ATS Checker</h3>
          <p className="text-gray-300 mb-4">Check if your resume passes through Applicant Tracking Systems (ATS).</p>
          <a
            href="https://example.com/ats-checker" // Replace with actual link to ATS checker tool
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use ATS Checker
          </a>
        </div>

        {/* Resume Enhancer Card */}
        <div className="career-card bg-[#2e3b6b] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-gray-100 mb-3">Resume Enhancer</h3>
          <p className="text-gray-300 mb-4">Enhance your resume with tips and suggestions to make it stand out.</p>
          <a
            href="https://example.com/resume-enhancer" // Replace with actual link to Resume Enhancer tool
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use Resume Enhancer
          </a>
        </div>
      </div>

      {/* Internship Platforms Links */}
      <div className="mt-12 bg-[#2e3b6b] p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl text-gray-100 mb-4">Internship Platforms</h3>
        <p className="text-gray-300 mb-4">Apply to internships on the following platforms:</p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>
            <a
              href="https://www.linkedin.com/jobs" // Replace with actual platform links
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Jobs
            </a>
          </li>
          <li>
            <a
              href="https://www.internshala.com" // Replace with actual platform links
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Internshala
            </a>
          </li>
          <li>
            <a
              href="https://www.angel.co" // Replace with actual platform links
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AngelList
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Career;
