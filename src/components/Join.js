import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-otp", { email });
      localStorage.setItem("userEmail", email);
      navigate("/verify");
    } catch {
      alert("Error sending OTP");
    }
  };

  return (
    <div className="form-container">
      <h2>Join Talrn Clone</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Send OTP</button>
      </form>
    </div>
  );
}
