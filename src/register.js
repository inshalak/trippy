import React, { useState } from "react";
import './register.css';
import { useNavigate } from "react-router-dom";
import LoginPage from "./login";

function RegisterPage() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleFullNameChange(event) {
    setFullName(event.target.value);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // handle registration logic here
  }

  function handleBackButton(event) {
  }

  return (
    <div>
      <h1>Trippy</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button onClick={handleBackButton}>Back</button>
        <br></br>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
