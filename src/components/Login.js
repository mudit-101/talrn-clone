import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Use backend URL from env OR fallback to localhost for dev
  const API_BASE_URL =
    process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_BASE_URL}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // ✅ Needed when backend uses CORS credentials
        }
      );

      if (res.data.success) {
        localStorage.setItem("userEmail", email);
        alert("✅ OTP sent to your email!");
        navigate("/verify");
      } else {
        alert(res.data.message || "❌ Failed to send OTP");
      }
    } catch (err) {
      console.error("❌ Error during login:", err);
      alert("Something went wrong! Check your backend or network connection.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Sign in to start your session</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Continue</button>

        <p className="forgot">Forgot password?</p>

        <div className="extra-links">
          <p>
            Don’t have an account? <a href="/join">Sign up</a>
          </p>
          <p>
            Please <a href="/contact">Contact us</a> if you require any
            assistance
          </p>
        </div>
      </form>
    </div>
  );
}
