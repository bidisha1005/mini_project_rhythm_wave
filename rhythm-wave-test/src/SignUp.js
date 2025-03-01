import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/users/signup", {
        username,
        email,
        password,
      });
      console.log("Sign-Up successful:", response.data);
      alert("Sign-Up Successful! Redirecting to login...");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="background"></div>
      <div className="logo-container">
        <img src="../logo.png" alt="Logo" className="logo" />
      </div>
      <div className="signup-container">
        <div className="signup-box">
          <h1>Sign Up</h1>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <form id="signupForm" onSubmit={handleSignUp}>
            <div className="input-group">
              <input type="text" name="username" placeholder="Username" required />
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <input type="password" name="password" placeholder="Password" required />
            </div>
            <div className="input-group">
              <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
            </div>
            <button type="submit" className="btn-signup">
              Sign Up
            </button>
          </form>
          <div className="social-signup">Or Sign Up Using</div>
          <div className="social-icons">
            <button
              className="facebook"
              title="Sign Up with Facebook"
              onClick={() => alert("Sign Up with Facebook clicked!")}
            >
              Sign Up
            </button>
            <button
              className="google"
              title="Sign Up with Google"
              onClick={() => alert("Sign Up with Google clicked!")}
            >
              Sign Up
            </button>
            <button
              className="twitter"
              title="Sign Up with Twitter"
              onClick={() => alert("Sign Up with Twitter clicked!")}
            >
              Sign Up
            </button>
          </div>
          <div className="login">
            Already have an account? <Link to="/login">Login now!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
