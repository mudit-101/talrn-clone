import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Find & Hire iOS Developers with Ease</h1>
        <p>
          Bring the right talent to your team effortlessly with Talrn.
          Hire pre-vetted remote iOS developers with strong technical &
          communication skills within 48 hours.
        </p>
        <div className="email-box">
          <input type="email" placeholder="Your work email" />
          <button className="btn">Hire iOS Dev</button>
        </div>
        <small>
          Looking for remote iOS dev jobs? <a href="#">Apply here</a>
        </small>
      </div>
    </section>
  );
}
