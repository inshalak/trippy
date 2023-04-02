import React, { useState } from "react";
import './login.css';


function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // handle login logic here
  }

  return (
    <><h1>Trippy</h1><form onSubmit={handleSubmit}>
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
          <ul>
            <li><button type="submit">Log in</button> <button type="register">Register</button></li>
            
          </ul>
          
      </form></>
  );
}

export default LoginPage;
