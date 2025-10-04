import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Join from "./components/Join";
import OTPVerify from "./components/OTPVerify";
import Success from "./components/Success";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Join Page */}
        <Route path="/join" element={<Join />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* OTP Verification Page */}
        <Route path="/verify" element={<OTPVerify />} />

        {/* Success Page */}
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
