import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn';
import Index from './pages/Index';
import Profile from './components/Profile';
import Interview from './components/Interview';
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
        {isAuthenticated && <Sidebar />}

        <div className="flex-1 p-0">
          <Routes>
            {/* If not authenticated, redirect to SignIn */}
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signin" />} />
            
            {/* SignUp and SignIn pages */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            {/* Protected Routes */}
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/signin" />} />
            <Route path="/userprofile" element={isAuthenticated ? <Profile /> : <Navigate to="/signin" />} />
            <Route path="/skills" element={isAuthenticated ? <Index /> : <Navigate to="/signin" />} />
            <Route path="/interview" element={isAuthenticated ? <Interview /> : <Navigate to="/signin" />} />
            <Route path="/career" element={isAuthenticated ? <Career /> : <Navigate to="/signin" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
