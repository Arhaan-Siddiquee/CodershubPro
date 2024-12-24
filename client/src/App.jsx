import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn';
import Index from './pages/Index';
import Community from './pages/Community';
import Esmoai from './pages/Esmoai';
import Roadmap from './pages/Roadmap';
import Findevents from './pages/Findevents';
import Profile from './components/Profile';
import Interview from './components/Interview';
import InterviewIndex from './components/InterviewIndex';
import Career from './components/Career';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated by looking for JWT token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar only shows if the user is authenticated */}
        {isAuthenticated && <Sidebar />}

        <div className="flex-1 p-0">
          <Routes>
            {/* If not authenticated, redirect to SignIn */}
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signin" />} />

            {/* SignUp and SignIn pages */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            {/* Protected Routes: Only accessible if the user is authenticated */}
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/signin" />} />
            <Route path="/userprofile" element={isAuthenticated ? <Profile /> : <Navigate to="/signin" />} />

            {/* Main Index and Component Routes */}
            <Route path="/skills" element={isAuthenticated ? <Index /> : <Navigate to="/signin" />} />
            <Route path="/roadmap" element={isAuthenticated ? <Roadmap /> : <Navigate to="/signin" />} />
            <Route path="/community" element={isAuthenticated ? <Community /> : <Navigate to="/signin" />} />
            <Route path="/esmoai" element={isAuthenticated ? <Esmoai /> : <Navigate to="/signin" />} />
            <Route path="/findevents" element={isAuthenticated ? <Findevents /> : <Navigate to="/signin" />} />

            {/* Other routes */}
            <Route path="/interview" element={isAuthenticated ? <Interview /> : <Navigate to="/signin" />} />
            <Route path="/career" element={isAuthenticated ? <Career /> : <Navigate to="/signin" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
