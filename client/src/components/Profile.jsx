import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing React Icons

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Example user data
  const userData = {
    email: 'user@example.com',
    name: 'John Doe',
    age: 30,
    education: 'Bachelor of Science in Computer Science',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    experience: 5,
    achievements: ['Built a full-stack app', 'Contributed to open-source projects'],
  };

  const experienceData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Experience Growth',
        data: [1, 2, 3, 4, 5, 6],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const skillsData = {
    labels: userData.skills,
    datasets: [
      {
        label: 'Skill Proficiency',
        data: [90, 80, 75, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const username = 'AdityaKumarSingh7209';

    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setLeetcodeStats(data);
        } else {
          setError('Failed to load data');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`p-4 grid grid-cols-1 md:grid-cols-2 gap-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Dark Mode Toggle Button */}
      <div className="col-span-full mb-4 flex justify-end">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Profile Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
        <div className="space-y-2">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Education:</strong> {userData.education}</p>
          <p><strong>Skills:</strong> {userData.skills.join(', ')}</p>
          <p><strong>Experience:</strong> {userData.experience} years</p>
          <p><strong>Achievements:</strong></p>
          <ul className="list-disc pl-4 text-sm">
            {userData.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* LeetCode Statistics Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
        <h3 className="text-lg font-semibold mb-4">LeetCode Stats</h3>
        <p><strong>Total Questions:</strong> {leetcodeStats.totalQuestions}</p>
        <p><strong>Total Solved:</strong> {leetcodeStats.totalSolved}</p>
        <p><strong>easySolved:</strong> {leetcodeStats.easySolved}</p>
        <p><strong>mediumSolved:</strong> {leetcodeStats.mediumSolved}</p>
        <p><strong>hardSolved:</strong> {leetcodeStats.hardSolved}</p>
        <p><strong>Acceptance Rate:</strong> {leetcodeStats.acceptanceRate}%</p>
        <p><strong>Ranking:</strong> {leetcodeStats.ranking}</p>
        <p><strong>Contribution Points:</strong> {leetcodeStats.contributionPoints}</p>
        <p><strong>Reputation:</strong> {leetcodeStats.reputation}</p>
      </div>

      {/* Experience Growth Chart */}
      <div className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
        <h3 className="text-lg font-semibold mb-4">Experience Growth</h3>
        <Line data={experienceData} options={{ responsive: true }} />
      </div>

      {/* Skills Proficiency Chart */}
      <div className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
        <h3 className="text-lg font-semibold mb-4">Skills Proficiency</h3>
        <Bar data={skillsData} options={{ responsive: true }} />
      </div>

      {/* GitHub Activity Graph */}
      <div className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white col-span-full">
        <h3 className="text-lg font-semibold mb-4">GitHub Activity Graph</h3>
        <a href="https://github.com/ashutosh00710/github-readme-activity-graph" target="_blank" rel="noopener noreferrer">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Axestein&bg_color=1a1417&color=4c9e8a&line=3dbdae&point=6ea4dd&area=true&hide_border=true"
            alt="GitHub Activity Graph"
            className="w-full h-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default Profile;
