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
            <li><a href="/about">About Us</a></li>
            <li><a href="/story">Our Story</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Talrn Section */}
        <div className="footer-column">
          <h4>Talrn</h4>
          <ul>
            <li><a href="/profiles">View iOS Profiles</a></li>
            <li><a href="/discover">Discover</a></li>
          </ul>
        </div>

        {/* Vendor Section */}
        <div className="footer-column">
          <h4>Vendor</h4>
          <ul>
            <li><a href="/apply-vendor">Apply As Vendor</a></li>
            <li><a href="/vendor-login">Vendor Login</a></li>
            <li><a href="/verify">Get Verified</a></li>
            <li><a href="/jobs">Remote Jobs</a></li>
            <li><a href="/resources">Resources</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-column">
          <h4>Social</h4>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © 2022 - 2025 <span className="brand">Talrn</span> - Labor Omnia Vincit ⚡ by{" "}
          <a href="https://cgadvantage.com" target="_blank" rel="noopener noreferrer">
            CG Advantage
          </a>
        </p>
        <div className="footer-links">
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
