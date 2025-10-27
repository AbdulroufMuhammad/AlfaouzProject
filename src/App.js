import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './modern-styles.css';
import Dashboard from './components/Dashboard';
import StudentProfile from './components/StudentProfile';
import TutorList from './components/TutorList';
import SessionDuration from './components/SessionDuration';
import Notifications from './components/Notifications';
import AboutAcademy from './components/AboutAcademy';
import BeginSession from './components/BeginSession';
import SelectTutor from './components/SelectTutor';
import LoginPage from './components/LoginPage';
import VideoCall from './components/VideoCall';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (in a real app, we might check a token)
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/" element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isLoggedIn ? <StudentProfile onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/tutors" element={isLoggedIn ? <TutorList onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/session-duration" element={isLoggedIn ? <SessionDuration onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/notifications" element={isLoggedIn ? <Notifications onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/about" element={isLoggedIn ? <AboutAcademy onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/begin-session" element={isLoggedIn ? <BeginSession onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/select-tutor" element={isLoggedIn ? <SelectTutor onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/select-tutor/:tutorId" element={isLoggedIn ? <SelectTutor onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/video-call" element={isLoggedIn ? <VideoCall /> : <Navigate to="/login" />} />
        </Routes>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
