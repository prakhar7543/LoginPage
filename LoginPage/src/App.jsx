import React, { useState } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState("");
  let [passKey, setPassKey] = useState("");
  let [errorMessage, setErrorMessage] = useState(false);
  let [success, setSuccess] = useState(false);

  let handleUserChange = (e) => {
    let user = e.target.value;
    setName(user);
  };

  let handlePasswordChange = (e) => {
    let pass = e.target.value;
    setPassKey(pass);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (name === "user" || passKey === "password") {
      setErrorMessage(true);
      setName("");
      setPassKey("");
      setSuccess(false);
    } else {
      setSuccess(true);
      errorMessage(false);
    }
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      {!success ? (
        <div>
          <p>{errorMessage ? "Invalid username or password" : ""}</p>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label htmlFor="username">UserName:</label>
              <input
                type="text"
                id="username"
                value={name}
                placeholder="Username"
                onChange={handleUserChange}
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={passKey}
                placeholder="Password"
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              style={{ backgroundColor: "darkgrey", marginTop: "5px" }}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div>
          <p>Welcome, user!</p>
        </div>
      )}
    </div>
  );
}

export default App;
