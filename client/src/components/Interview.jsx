import React, { useState, useEffect } from "react";

// Define role-specific questions
const interviewQuestions = {
  "SDE-1": [
    "Tell me about yourself.",
    "Why do you want to be a software developer?",
    "How would you solve this algorithmic problem?",
    "What are your strengths and weaknesses?",
    "Explain a time when you had to debug a challenging issue.",
    "What is OOP and why is it important?",
    "What are your thoughts on Agile development?"
  ],
  "Data Analyst": [
    "Tell me about yourself.",
    "How would you analyze a dataset with missing values?",
    "What are the most important skills for a data analyst?",
    "Can you explain the difference between mean, median, and mode?",
    "What is the process of ETL?",
    "Have you used SQL for data analysis? Give an example.",
    "How do you visualize data effectively?"
  ],
  "Cybersecurity Engineer": [
    "Tell me about yourself.",
    "What is the difference between symmetric and asymmetric encryption?",
    "Explain how a man-in-the-middle attack works.",
    "How would you secure a network from external threats?",
    "What is a firewall and how does it work?",
    "What is penetration testing?",
    "How would you handle a security breach?"
  ],
  "DevOps Engineer": [
    "Tell me about yourself.",
    "What is CI/CD and how do you implement it?",
    "Explain the concept of containerization.",
    "What tools have you used for automation?",
    "How do you monitor a production system?",
    "What is infrastructure as code?",
    "What is the most challenging part of working with DevOps?"
  ],
  "UI/UX Designer": [
    "Tell me about yourself.",
    "What is your design process?",
    "How do you balance user needs with business goals?",
    "Explain how you conduct user testing.",
    "How would you improve the user interface of a product?",
    "What tools do you use for wireframing and prototyping?",
    "Can you explain the difference between UI and UX?"
  ]
};

const Interview = ({ selectedRole }) => {
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [videoStream, setVideoStream] = useState(null);
  const [sessionTime, setSessionTime] = useState(0); // Total interview time
  const [timeLeft, setTimeLeft] = useState(60); // Timer per question
  const [notes, setNotes] = useState("");

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setVideoStream(stream);
      setIsWebcamOn(true);
    } catch (err) {
      console.error("Error accessing webcam/mic", err);
      alert("Failed to access webcam and mic.");
    }
  };

  const stopWebcam = () => {
    if (videoStream) {
      videoStream.getTracks().forEach((track) => track.stop());
    }
    setIsWebcamOn(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < interviewQuestions[selectedRole]?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(60);
    }
  };

  const handleSubmit = () => {
    alert(`Interview submitted! Notes: ${notes}`);
    stopWebcam();
  };

  useEffect(() => {
    if (isWebcamOn) {
      const sessionTimer = setInterval(() => {
        setSessionTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(sessionTimer);
    }
  }, [isWebcamOn]);

  useEffect(() => {
    if (timeLeft > 0) {
      const questionTimer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(questionTimer);
    }
  }, [timeLeft]);

  useEffect(() => {
    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [videoStream]);

  // Fallback for undefined selectedRole
  const currentQuestions = interviewQuestions[selectedRole] || [];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  return (
    <div className="flex h-screen">
      {/* Webcam Section */}
      <div className="flex-1 bg-gray-900 flex flex-col items-center justify-center">
        <div className="text-center text-white mb-6">
          <h2 className="text-3xl font-semibold">Interview Video Panel</h2>
          <p className="text-sm mt-2">Session Time: {Math.floor(sessionTime / 60)}m {sessionTime % 60}s</p>
        </div>
        {!isWebcamOn ? (
          <button
            onClick={startWebcam}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg"
          >
            Turn On Webcam
          </button>
        ) : (
          <div className="relative w-full h-4/5 bg-black rounded-lg overflow-hidden">
            <video
              autoPlay
              muted
              ref={(video) => {
                if (video && videoStream) {
                  video.srcObject = videoStream;
                }
              }}
              className="w-full h-full object-cover"
            ></video>
            <p className="absolute bottom-4 left-4 text-white text-lg">
              Current Question: {currentQuestion}
            </p>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="w-80 bg-gray-800 p-6 flex flex-col justify-between">
        {/* Questions Section */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Questions</h3>
          <p className="text-white text-lg mb-4">{currentQuestion}</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{
                width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`,
              }}
            ></div>
          </div>

          {/* Timer */}
          <p className="text-sm text-gray-400 mb-4">Time left for this question: {timeLeft}s</p>

          <textarea
            className="w-full p-2 rounded-md bg-gray-700 text-white mb-4"
            placeholder="Write notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <div className="flex space-x-2">
            {currentQuestionIndex < currentQuestions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Submit Interview
              </button>
            )}
          </div>
        </div>

        {/* Webcam Controls */}
        {isWebcamOn && (
          <button
            onClick={stopWebcam}
            className="w-full mt-6 px-4 py-2 bg-gray-700 text-white rounded-md"
          >
            Turn Off Webcam
          </button>
        )}
      </div>
    </div>
  );
};

export default Interview;
