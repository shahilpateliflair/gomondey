import React, { useState } from "react";
import "../css/Register.css";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5000";
const USER_REGISTER_URL = BASE_URL + "/register/register";

function Register() {
  const [progress, setProgress] = useState(50);
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [currentStep, setNextStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const categories = [
    "Get a New Job",
    "Developed and renewed",
    "Personal marketing",
    "Start and develop my business",
    "Help, I don't know what I want",
    "Work in Sweden (in English)",
  ];

  const handleIconClick = (iconIndex: number) => {
    setSelectedIcon(iconIndex);
  };

  const handleNextClick = () => {
    if (selectedIcon !== null) {
      setNextStep(2);
      setProgress(100);
    }
  };

  const handlePreviousClick = () => {
    setNextStep(1);
    setProgress(50);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
   

    try {
      const category = selectedIcon !== null ? categories[selectedIcon] : "";
      const response = await fetch(USER_REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, category }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        window.location.href = "/login";
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      {currentStep === 1 && (
        <div>
          <div className="login-container">
            <div className="header">
              <img src="/main-logo.svg" alt="Go Monday Logo" className="logo" />
              <div className="secure-server">
                <i className="fas fa-lock"></i> Secure Server
              </div>
            </div>
            <div>
              <p className="percent">STAGE 1 / 2</p>
              <progress id="progress-bar" value={progress} max={100}></progress>

              <h3 style={{ marginLeft: -600 }}>What is your focus?{"\n"}</h3>
              <p style={{ marginLeft: -300, fontWeight: "bold" }}>
                You can change your mind and switch whenever you want later.
              </p>

              <div className="icon-container">
                {[
                  { iconClass: "fas fa-shopping-bag", text: "Get a New Job" },
                  {
                    iconClass: "fa-solid fa-location-dot",
                    text: "Developed and renewed",
                  },
                  { iconClass: "fa-solid fa-tag", text: "Personal marketing" },
                  {
                    iconClass: "fa-regular fa-paper-plane",
                    text: "Start and develop my business",
                  },
                  {
                    iconClass: "fa-regular fa-circle-question",
                    text: "Help, I don't know what I want",
                  },
                  {
                    iconClass: "fa-regular fa-flag",
                    text: "Work in Sweden (in English)",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleIconClick(index)}
                    className={selectedIcon === index ? "selected" : ""}
                  >
                    <div className="icon-round">
                      <i className={item.iconClass}></i>
                    </div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {selectedIcon !== null && (
            <div>
              <button
                className="btn"
                style={{ background: "#ff486c", marginTop: 15 }}
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {currentStep === 2 && (
        <div className="register-content">
          <div className="header">
            <img src="/main-logo.svg" alt="Go Monday Logo" className="logo" />
            <div className="secure-server">
              <i className="fas fa-lock"></i> Secure Server
            </div>
          </div>

          <div>
            <p className="percent">STAGE 2 / 2</p>
            <progress id="progress-bar" value={progress} max={100}></progress>

            <div className="login-content">
              <form onSubmit={handleSubmit}>
                <div style={{ marginLeft: -417 }} className="form-group1">
                  <label>Your Email Address*</label>
                  <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <label className="error">{error}</label>}
                </div>

                <div className="form-group-wrapper">
                  <div className="form-group">
                    <label>Choose a Password*</label>
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <label className="error">{error}</label>}
                  </div>
                  <div className="form-group">
                    <label>Confirm password*</label>
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <label className="error">{error}</label>}
                  </div>
                </div>

                <div className="checkboxes">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>
                      I have read and agree to the terms and conditions and how Go
                      Monday processes my data (GDPR).
                    </span>
                  </label>
                </div>

                <div className="btns">
                  <button onClick={handlePreviousClick}><i className="fa fa-arrow-left"> </i> Previous</button>
                  <button type="submit">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
