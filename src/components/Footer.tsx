import React from "react";
import "../css/footer.css";
function Footer() {
  return (
    <div className="footer-content">
      <div className="footer-section">
        <h1>GO MONDAY</h1>
        <ul className="footer-list">
          <li>About us</li>
          <li>Our references</li>
          <li>That's how we work</li>
          <li>Contact Us</li>
          <li>Press & media</li>
          <li>Work with us</li>
          <li>All about work</li>
          <li>For partners and companies</li>
        </ul>
      </div>

      <div className="footer-section">
        <h1>TERMS</h1>
        <ul className="terms-list">
          <li>Terms of Use</li>
          <li>Integrity</li>
        </ul>
      </div>

      <div className="footer-section">
        <h1>FOLLOW US</h1>
        <ul className="icon-ul">
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
        </ul>
        <ul className="icon-ul">
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i className="fa-solid fa-podcast"></i>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h1>YOU ARE SAFE WITH US</h1>
        <ul className="icon-ul">
          <li>
            <i className="fa-brands fa-cc-visa"></i>
          </li>
          <li>
            <i className="fa-brands fa-cc-mastercard"></i>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          English © 2024, Next Big Thing AB
        </p>
      </div>
    </div>
  );
}
export default Footer;
