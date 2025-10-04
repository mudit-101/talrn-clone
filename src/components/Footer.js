import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Information Section */}
        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Talrn Section */}
        <div className="footer-column">
          <h4>Talrn</h4>
          <ul>
            <li>View iOS Profiles</li>
            <li>Discover</li>
          </ul>
        </div>

        {/* Vendor Section */}
        <div className="footer-column">
          <h4>Vendor</h4>
          <ul>
            <li>Apply As Vendor</li>
            <li>Vendor Login</li>
            <li>Get Verified</li>
            <li>Remote Jobs</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-column">
          <h4>Social</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © 2022 - 2025 <span className="brand">Talrn</span> - Labor Omnia Vincit ⚡ by{" "}
          <a href="#">CG Advantage</a>
        </p>
        <div className="footer-links">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
