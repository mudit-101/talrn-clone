import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./OTPVerify.css";

export default function OTPVerify() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const email = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/verify-otp`, // ✅ uses env variable
        { email, otp }
      );

      if (res.data.success) {
        alert("OTP verified successfully!");
        navigate("/"); // ✅ redirect to home page after success
      } else {
        setError(res.data.message || "Invalid OTP. Try again!");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="form-container">
      <div className="verify-box">
        <h2>Verify OTP</h2>
        <p>
          We’ve sent a 6-digit OTP to <b>{email}</b>
        </p>

        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">Verify</button>
        </form>

        {error && <p className="error">{error}</p>}

        <div className="resend">
          <a href="/login">Resend OTP</a>
        </div>
      </div>
    </div>
  );
}
