import React from 'react';
import { Link } from 'react-router-dom';

const InterviewIndex = () => {
  const roles = [
    { name: "SDE-1", description: "Entry-level software development role." },
    { name: "SDE-2", description: "Mid-level role for experienced developers." },
    { name: "SDE-3", description: "Senior-level role with leadership responsibilities." },
    { name: "Data Analyst", description: "Responsible for analyzing and interpreting complex data to help companies make decisions." },
    { name: "Data Scientist", description: "Uses algorithms and machine learning to analyze complex data sets." },
    { name: "Cybersecurity Engineer", description: "Ensures systems and networks are secure from cyber threats and vulnerabilities." },
    { name: "DevOps Engineer", description: "Focuses on automating and improving the software development and deployment process." },
    { name: "QA Engineer", description: "Ensures the quality of software by writing test cases and identifying issues in software products." },
    { name: "UI/UX Designer", description: "Designs user-friendly interfaces and improves the user experience for applications." },
    { name: "Cloud Engineer", description: "Designs and manages cloud-based infrastructure for deploying applications and services." },
    { name: "Machine Learning Engineer", description: "Builds machine learning models to solve real-world problems through data-driven approaches." },
    { name: "Full Stack Developer", description: "Works on both the front-end and back-end of applications, creating end-to-end solutions." },
  ];

  return (
    <div className="p-8 bg-gray-400">
      <h1 className="text-4xl text-center font-semibold text-gray-100 mb-12">Prepare For Interviews</h1>

      {/* Grid layout for roles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <Link
            key={role.name}
            to={`/interview/${role.name}`}
            className="role-card bg-[#2e3b6b] p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-2xl text-gray-100 mb-4">{role.name}</h3>
            <p className="text-gray-300">{role.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InterviewIndex;
