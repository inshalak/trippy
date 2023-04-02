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
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginPage;
