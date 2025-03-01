import React, { useState } from "react";
import styles from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setErrorMessage(""); // Reset error message

    try {
      // Make a POST request to the login API
      const response = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });

      console.log("Login successful:", response.data);

      // Store the JWT token in localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to homepage after successful login
      navigate("/homepage");
    } catch (error) {
      if (error.response) {
        // Display the specific error message from the backend
        setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
      } else {
        // General error message if no response is received
        setErrorMessage("Network error. Please check your connection.");
      }
    }
  };

  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.logoContainer}>
        <img src="../logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1>Login</h1>

          {/* Show the error message */}
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" name="password" placeholder="Password" required />
            </div>
            <button type="submit" className={styles.btnLogin}>
              Login
            </button>
          </form>

          <div className={styles.socialLogin}>Or Login with</div>

          <div className={styles.socialIcons}>
            <button
              className={styles.facebook}
              title="Login with Facebook"
              onClick={() => alert("Login with Facebook clicked!")}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button
              className={styles.google}
              title="Login with Google"
              onClick={() => alert("Login with Google clicked!")}
            >
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button
              className={styles.twitter}
              title="Login with Twitter"
              onClick={() => alert("Login with Twitter clicked!")}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </button>
          </div>

          <div className={styles.signup}>
            Don't have an account? <Link to="/signup">Sign up now!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
