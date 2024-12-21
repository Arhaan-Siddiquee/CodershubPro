import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Skills from './components/Skills';
import Career from './components/Career';
import Profile from './components/Profile';
import Interview from './components/Interview';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-8">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/Interview" element={<Interview />} />
            <Route path="/career" element={<Career />} />
            <Route path="/userprofile" element={<Profile />} />
            {/* Default route */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
