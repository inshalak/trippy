import { useState } from "react";
import RegisterPage from "./register";
import ItineraryPage from "./itinerary";

function LoginPage(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleShowRegisterForm = () => {
    setShowRegisterForm(true);
  };

  const handleHideRegisterForm = () => {
    setShowRegisterForm(false);
  };

  if (!loggedIn && !showRegisterForm) {
    return (
      <div>
        <h1>Trippy</h1>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" />
          </label>
          <br />
          <div style={{ display: "flex" }}>
            <button type="submit">Log in</button>
            <button onClick={handleShowRegisterForm}>Register</button>
          </div>
        </form>
      </div>
    );
  } else if (!loggedIn && showRegisterForm) {
    return (
      <RegisterPage
        onLogin={handleLogin}
        onHideRegisterForm={handleHideRegisterForm}
      />
    );
  } else {
    return (
      // <div>
      //   <p>You are logged in.</p>
      //   <button onClick={handleLogout}>Log out</button>
      // </div>
      // TODO: This should be a home page
      <ItineraryPage></ItineraryPage>
    );
  }
}

export default LoginPage;
