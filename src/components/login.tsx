import React, { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5000";
const USER_LOGIN_URL = BASE_URL + '/login/login';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch(USER_LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token);
        window.location.href = "/Home"; 
        console.log("data",data)
      } else {
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };



  return (
    <div className="login-container">
      <div className="header">
        <img src="/main-logo.svg" alt="Go Monday Logo" className="logo" />
        <div className="secure-server">
          <i className="fas fa-lock"></i> Secure Server
        </div>
      </div>
      <div className="login-content">
        <h2 style={{ color: "#20c997", marginLeft: "-700px" }}>SIGN IN</h2>
        <p style={{ fontSize: "25px", marginLeft: "-630px" }}>Welcome back!</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group-wrapper">
            <div className="form-group">
              <label>Email*</label>
              <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>*error</label>
            </div>
            <div className="form-group">
              <label>Password*</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>*error</label>
            </div>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="login-links">
        <a href="#">
          If you don't have an account,{" "}
          <Link to="/Register">create one here .</Link>
        </a>
        <a href="#">
          <Link to="/forget-password">Forget Your Password</Link>
        </a>
      </div>
    </div>
  );
}

export default Login;
