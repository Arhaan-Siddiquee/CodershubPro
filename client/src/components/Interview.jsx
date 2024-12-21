import React, { useState, useEffect } from 'react';

// Sample questions (this could be dynamically fetched or set based on your needs)
const interviewQuestions = [
  "Tell me about yourself.",
  "Why do you want to work here?",
  "What are your strengths and weaknesses?",
  "Where do you see yourself in 5 years?",
  "Why should we hire you?"
];

const Interview = () => {
  const [isWebcamOn, setIsWebcamOn] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [videoStream, setVideoStream] = useState(null);

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

  const handleStartInterview = () => {
    if (!isWebcamOn) {
      startWebcam(); // Start webcam if not already on
    }
    setCurrentQuestionIndex(0); // Start the first question
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < interviewQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to next question
    }
  };

  const handlePreview = () => {
    if (!isWebcamOn) {
      startWebcam(); // Start webcam for preview
    }
    setCurrentQuestionIndex(0); // Start with the first question for preview
  };

  const handleSubmit = () => {
    alert("Interview submitted!");
    stopWebcam(); // Stop webcam when interview is submitted
  };

  useEffect(() => {
    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [videoStream]);

  return (
    <div className="flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Left side - Video Panel */}
      <div className="lg:w-2/3 bg-gray-900 p-4 rounded-lg">
        <div className="text-center text-white mb-4">
          <h2 className="text-2xl font-semibold">Interview Video Panel</h2>
          {!isWebcamOn ? (
            <div>
              <p className="mb-2">Please open your webcam and microphone.</p>
              <button
                onClick={startWebcam}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Turn On Webcam
              </button>
            </div>
          ) : (
            <div>
              <video
                autoPlay
                muted
                ref={(video) => {
                  if (video && videoStream) {
                    video.srcObject = videoStream;
                  }
                }}
                className="w-full h-64 object-cover rounded-md"
              />
              <p className="mt-4 text-white">{interviewQuestions[currentQuestionIndex]}</p>
            </div>
          )}
        </div>
      </div>

      {/* Right side - Interview Questions and Controls */}
      <div className="lg:w-1/3 bg-gray-800 p-6 rounded-lg">
        <div className="text-white mb-4">
          <h2 className="text-2xl font-semibold mb-4">Interview Questions</h2>
          <p className="text-lg mb-4">
            {interviewQuestions[currentQuestionIndex]}
          </p>

          <div className="flex space-x-4">
            <button
              onClick={handleStartInterview}
              className="px-4 py-2 bg-green-600 text-white rounded-md w-full"
            >
              Start Interview
            </button>
            <button
              onClick={handlePreview}
              className="px-4 py-2 bg-yellow-600 text-white rounded-md w-full"
            >
              Preview
            </button>
          </div>

          <div className="mt-4">
            {currentQuestionIndex < interviewQuestions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 bg-blue-600 text-white rounded-md w-full"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-red-600 text-white rounded-md w-full"
              >
                Submit Interview
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
