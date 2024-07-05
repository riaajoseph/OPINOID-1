import React, { useState } from "react";
import "./styles/LoginRegister.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase"; // Ensure the path to firebase.js is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginRegister = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const authInstance = getAuth(app);
  const navigate = useNavigate(); // Initialize useNavigate

  const showRegisterForm = () => {
    setIsRegister(true);
  };

  const showLoginForm = () => {
    setIsRegister(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(authInstance, email, password);
      alert("Login successful");
      navigate("/"); // Navigate to the homepage
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(authInstance, email, password);
      alert("Registration successful");
      navigate("/"); // Optionally navigate to the homepage or login page after registration
    } catch (error) {
      alert("Error registering: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="form-container-login-register">
        <div className="container-login-register">
          <div className={`form-box ${isRegister ? "hidden" : ""}`}>
            <form onSubmit={handleLogin}>
              <h1>Login</h1>
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <button
                  type="button"
                  onClick={() => console.log("Forgot password clicked")}
                >
                  Forgot password?
                </button>
              </div>
              <div className="submit-button-login">
                <button type="submit">Login</button>
              </div>
              <div className="register-link">
                <p>
                  Don't have an account?{" "}
                  <button type="button" onClick={showRegisterForm}>
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
          <div className={`form-box ${isRegister ? "" : "hidden"}`}>
            <form onSubmit={handleRegister}>
              <h1>Registration</h1>
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-box">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> I agree to the terms & conditions
                </label>
              </div>
              <div className="submit-button-login">
                <button type="submit">Register</button>
              </div>
              <div className="register-link">
                <p>
                  Already have an account?{" "}
                  <button type="button" onClick={showLoginForm}>
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
