import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import LoginPage from "./login";
import RegisterPage from "./register";
import TripPage from "./trip";  // import your TripPage component

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registering, setRegistering] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleRegister = () => {
    setRegistering(true);
  };

  const handleBackToLogin = () => {
    setRegistering(false);
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          registering
            ? <RegisterPage onBackToLogin={handleBackToLogin} loggedIn={loggedIn} onLogin={handleLogin} />
            : <LoginPage onLogin={handleLogin} onRegister={handleRegister} loggedIn={loggedIn} />
        } />
        <Route path="/trip" element={<TripPage onLogout={handleLogout} loggedIn={loggedIn} />} />
        <Route path="*" element={
          registering
            ? <RegisterPage onBackToLogin={handleBackToLogin} loggedIn={loggedIn} onLogin={handleLogin} />
            : <LoginPage onLogin={handleLogin} onRegister={handleRegister} loggedIn={loggedIn} />
        } />
      </Routes>
    </Router>
  );
}

export default App;
