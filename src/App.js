import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import LoginPage from "./login";
import RegisterPage from "./register";

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

  if (!loggedIn) {
    if (!registering) {
      return <LoginPage onLogin={handleLogin} onRegister={handleRegister} />;
    } else {
      return <RegisterPage onBackToLogin={handleBackToLogin} />;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
