import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., validate credentials, make API request)

    // Simulating successful login for demonstration purposes
    setSuccessMessage("Login successful!");

    // Clear form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default LoginForm;
