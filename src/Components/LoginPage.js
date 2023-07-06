import React, { useState } from 'react';
import '../App.css';
import Link from "@mui/material/Link";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform validation
    if (!email || !password) {
      setErrorMessage('Please enter your email and password.');
    } else {
      // Perform login logic
      // ...
    }
  };

  return (
    <div className="container">
      <div className="form">
      <h2>Admin Login</h2>
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
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
        <br/>
        <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
          </Link>
           <br/>
         <p>Forgot Password</p>   
      </form>
    </div>
    </div>
  );
};

export default LoginPage;