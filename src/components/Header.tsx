import React, { useState, useEffect } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "./List";
import { useSidebar } from "./Sidebar";

function Header() {
  const { toggleSidebar } = useSidebar();
  const [isHoveredCreateAccount, setIsHoveredCreateAccount] = useState(false);
  const [isHoveredSignIn, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [isCustomizeContentOpen, setIsCustomizeContentOpen] = useState(false);
  const [showCategoryBox, setShowCategoryBox] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false); // State for showing change password form
  const [userEmail, setUserEmail] = useState("");

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

       // Fetch user profile after logging in
    if (token) {
      getUserProfile();
    }
  }, []);


  const getUserProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/profile/getprofile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUserEmail(response.data.email);
   
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
   const handleToggleSlider = () => {
    // Toggle sidebar and other logic
    toggleSidebar();
    setIsSliderOpen(!isSliderOpen);
    setShowCategoryBox(!isSliderOpen);
    if (!isSliderOpen) {
      setIsCustomizeContentOpen(false);
      setShowSend(false);
      setShowSettings(false);
    } else {
      setIsCustomizeContentOpen(false);
      setShowSend(false);
      setShowSettings(false);
    }
  };
  

  const handleCustomizeContentClick = () => {
    setIsCustomizeContentOpen(true);
    setShowCategoryBox(true);
    setShowSend(false); // Hide the form
    setShowSettings(false);

    setIsSliderOpen(true);
  };

  const handleAskUsClick = () => {
    setIsCustomizeContentOpen(true);
    setShowSend(true);
    setShowCategoryBox(false);
    setShowSettings(false);
   
    setIsSliderOpen(true);
  };

  const handleSettingsClick = () => {
    setIsCustomizeContentOpen(true);
    setShowSend(false);
    setShowSettings(true); 
    setShowCategoryBox(false);
    setShowChangePassword(true); 
    setIsSliderOpen(true);
  };
 

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted!");
  };

  const categories = [
    { iconClass: "fas fa-shopping-bag", text: "Get a New Job" },
    { iconClass: "fa-solid fa-location-dot", text: "Developed and renewed" },
    { iconClass: "fa-solid fa-tag", text: "Personal marketing" },
    {
      iconClass: "fa-regular fa-paper-plane",
      text: "Start and develop my business",
    },
    {
      iconClass: "fa-regular fa-circle-question",
      text: "Help, I don't know what I want",
    },
    { iconClass: "fa-regular fa-flag", text: "Work in Sweden (in English)" },
  ];

  const handleIconClick = (iconIndex: number) => {
    setSelectedIcon(iconIndex);
  };

  return (
    <div className="main-header">
      <div className="header">
        <Link to={"/"}>
          <img
            src="/main-logo.svg"
            alt="Go Monday Logo"
            width="100"
            height="56"
          />
        </Link>

        <div className="content"  style={{color:"black",fontSize:"25px"}}>
          <p>Guides & Articles</p>
         <Link to={"/Counseling"} className="link-style"><p>Counseling</p> </Link> 
          <Link to={'/Order'} className="link-style"><p>My orders</p></Link>
        </div>
        <div className="account">
          {isLoggedIn ? (
            <p onClick={handleToggleSlider}>My Account</p>
          ) : (
            <>
              <Link to={"/Register"} style={{ textDecoration: "none" }}>
                <p
                  style={{
                    color: isHoveredCreateAccount ? "#ff486c" : "black",
                  }}
                  onMouseEnter={() => setIsHoveredCreateAccount(true)}
                  onMouseLeave={() => setIsHoveredCreateAccount(false)}
                >
                  Create Account
                </p>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <p
                  className="login"
                  style={{ color: isHoveredSignIn ? "#ff486c" : "black" }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <i className="fa-solid fa-user"></i> Sign in
                </p>
              </Link>
            </>
          )}
        </div>
      </div>
     
      {/* Add the slider component */}
      <div className={`account-slider ${isSliderOpen ? "open" : ""}`}>
        {/* Add your slider content here */}
        <button className="close-btn" onClick={handleToggleSlider}>
          <i className="fa fa-window-close" aria-hidden="true"></i>
        </button>

        <div>
          <div className="user-info">
            <div className="user-icon">
              <i className="fa-solid fa-user"></i>
            </div>
            <p className="user-email">{userEmail}</p>
          </div>
        </div>
        <div className="content-section">
          {isCustomizeContentOpen ? (
            <div>
              {showSend ? (
                <div className="contact-container">
                  <h2>Get in touch</h2>
                  <p>
                    Do you have a question, or just want to chat a bit? You are
                    always welcome to contact us. Use the form here, or write to
                    hello@gomonday.se
                  </p>
                  {showSend && (
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <label>Your Name </label>
                      <input type="text" placeholder="Your Name" />
                      <label>Message</label>
                      <textarea placeholder="Your message"></textarea>
                      <button>Send</button>
                    </form>
                  )}
                </div>
                        ) : showSettings ? (
                          <div className="settings-container">
                            <h2>Settings</h2>
                           
                            {showChangePassword && (
                              <form className="contact-form" onSubmit={handleSubmit}>
                              <label>Old password </label>
                              <input type="text" placeholder=" Your Old password " />
                              <label>New password </label>
                              <input type="text" placeholder="Your New password " />
                              <label>Confirm password</label>
                              <input type="text" placeholder="Your Confirm password" />
                              <button>Send</button>
                            </form>
                            )}
                          </div>
                        ) : (
          
              
            
                <div className="icon-container">
                  {categories.map((item, index) => (
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
              )
              
              }
            </div>
          ) : (
            <div>
              <div
                className="content-item"
                onClick={handleCustomizeContentClick}
              >
                <i className="fa fa-filter"></i>
                <p>Customize your content</p>
                <i className="fa fa-arrow-right"></i>
              </div>
              <div className="content-item" onClick={handleAskUsClick}>
                <i className="fa fa-address-book" aria-hidden="true"></i>
                <p>Ask us</p>
                <i className="fa fa-arrow-right"></i>
              </div>
              <div className="content-item" onClick={handleSettingsClick}>
                <i className="fa fa-gear"></i>
                <p>Settings</p>
                <i className="fa fa-arrow-right"></i>
              </div>
              <div className="slider-footer">
                <p className="first-para">Activate partner code</p>
                <p className="second-para">
                  If you have a code so, you can activate it below
                </p>
                <button className="activate-btn">Activate a code</button>
              </div>
              <Link to={"Main"} className="logout-button" onClick={handleLogout}>
                <button>
                  <i className="fa fa-gift"></i> Log Out
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    
    </div>
  );
}

export default Header;
