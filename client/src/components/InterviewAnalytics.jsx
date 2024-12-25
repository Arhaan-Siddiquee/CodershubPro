import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { FaSun, FaMoon } from "react-icons/fa"; // Import React icons for light/dark mode

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const InterviewAnalytics = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme
  const [themeClass, setThemeClass] = useState("bg-gray-900 text-white"); // Conditional theme class

  // Dummy data for metrics
  const analyticsData = {
    grammaticalErrorRate: 12,  // in percentage
    clarityScore: 8,           // out of 10
    phoneticAccuracy: 85,      // in percentage
    pauseDuration: [1.2, 2.5, 0.8, 1.7, 1.3], // in seconds
    speakingPace: 125,         // words per minute
    fillerWordsCount: 5,       // total filler words detected
    pausePatterns: [3, 1, 4, 2, 1],  // number of pauses per question
    wordClarity: 9,            // out of 10
    transcriptionText: "This is the transcribed text from the interview.",
  };

  // Chart data for Pause Duration (Bar Chart)
  const pauseDurationData = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
    datasets: [
      {
        label: "Pause Duration (in sec)",
        data: analyticsData.pauseDuration,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart data for Pause Patterns (Bar Chart)
  const pausePatternsData = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
    datasets: [
      {
        label: "Number of Pauses",
        data: analyticsData.pausePatterns,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart data for Speaking Pace (Line Chart)
  const speakingPaceData = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
    datasets: [
      {
        label: "Speaking Pace (WPM)",
        data: [120, 130, 125, 140, 135],  // Example WPM values
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      },
    ],
  };

  // Function to handle download of feedback as JSON
  const downloadFeedback = () => {
    const data = {
      ...analyticsData,
      timestamp: new Date().toISOString(),
    };

    const fileBlob = new Blob([JSON.stringify(data)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(fileBlob);
    link.download = "interview-feedback.json";
    link.click();
  };

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Set the theme class based on the current mode
    if (isDarkMode) {
      setThemeClass("bg-gray-900 text-white");
    } else {
      setThemeClass("bg-white text-black");
    }
  }, [isDarkMode]);

  return (
    <div className={`flex flex-col items-center p-6 ${themeClass}`}>
      <div className="absolute top-4 right-4">
        <button onClick={toggleTheme} className="text-xl">
          {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>

      <h2 className="text-3xl font-semibold mb-6">Interview Analytics</h2>

      {/* Analytics Section */}
      <div className="w-full max-w-4xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-2">Grammatical Error Rate</h3>
            <p>{analyticsData.grammaticalErrorRate}%</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-2">Clarity Score</h3>
            <p>{analyticsData.clarityScore}/10</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-2">Phonetic Accuracy</h3>
            <p>{analyticsData.phoneticAccuracy}%</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-2">Word Clarity</h3>
            <p>{analyticsData.wordClarity}/10</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="w-full max-w-4xl mb-6">
        <h3 className="text-xl font-semibold mb-4">Pause Duration (Bar Chart)</h3>
        <Bar data={pauseDurationData} options={{ responsive: true, plugins: { legend: { position: "top" }, title: { display: true, text: "Pause Duration by Question" } } }} />

        <h3 className="text-xl font-semibold mb-4 mt-8">Pause Patterns (Bar Chart)</h3>
        <Bar data={pausePatternsData} options={{ responsive: true, plugins: { legend: { position: "top" }, title: { display: true, text: "Pause Patterns by Question" } } }} />

        <h3 className="text-xl font-semibold mb-4 mt-8">Speaking Pace (Line Chart)</h3>
        <Line data={speakingPaceData} options={{ responsive: true, plugins: { legend: { position: "top" }, title: { display: true, text: "Speaking Pace Over Questions" } } }} />
      </div>

      {/* Transcription Text */}
      <div className="w-full max-w-4xl mb-6 bg-gray-800 p-4 rounded-lg text-white">
        <h3 className="text-xl font-semibold mb-2">Transcription Text</h3>
        <p>{analyticsData.transcriptionText}</p>
      </div>

      {/* Download Feedback Button */}
      <button
        onClick={downloadFeedback}
        className="w-full max-w-xs px-6 py-3 bg-blue-600 text-white rounded-lg mt-6"
      >
        Download Feedback
      </button>
    </div>
  );
};

export default InterviewAnalytics;
