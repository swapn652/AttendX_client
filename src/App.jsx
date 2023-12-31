import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Webcam from './components/Webcam';
import { Navbar } from './components/Navbar';
import { MainSection } from './components/MainSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TechStackSection } from './components/TechStackSection';
import { Footer } from './components/Footer';
import { Register } from './components/Register';
import { Login } from './components/Login';
import AttendancePage from './components/AttendancePage'; // Import the AttendancePage component
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { LandingPage } from './components/LandingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentRollId, setStudentRollId] = useState('');

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} studentName={studentName} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <AttendancePage studentRollId={studentRollId} />
            ) : (
              <Login
                setStudentName={setStudentName}
                setIsLoggedIn={setIsLoggedIn}
                setStudentRollId={setStudentRollId}
              />
            )
          }
        />
        <Route path="/webcam" element={<Webcam />} />
      </Routes>
    </Router>
  );
}

export default App;
