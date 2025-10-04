const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary in-memory OTP store with expiry
let otpStore = {};

// ✅ Generate OTP function
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// ✅ Login route (send OTP to email after login attempt)
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email & Password required" });
  }

  // (Optional) Validate password from DB here
  // if (!checkUserFromDB(email, password)) return res.status(401).json({ success: false, message: "Invalid credentials" });

  const otp = generateOtp();
  otpStore[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 }; // 5 min expiry

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "goyalmudit82@gmail.com",   // 🔹 Your Gmail
        pass: "ywgd nbtw tmxh hwgd",      // 🔹 App Password (NOT your Gmail password)
      },
    });

    await transporter.sendMail({
      from: '"Login System" <goyalmudit82@gmail.com>',
      to: email,
      subject: "Your OTP for Login",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    res.json({ success: true, message: "OTP sent to email!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// ✅ Verify OTP route
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!otpStore[email]) {
    return res.status(400).json({ success: false, message: "OTP not found or expired" });
  }

  const { otp: storedOtp, expiresAt } = otpStore[email];

  // Check OTP & expiry
  if (Date.now() > expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ success: false, message: "OTP expired" });
  }

  if (storedOtp === otp) {
    delete otpStore[email]; // OTP can only be used once
    return res.json({ success: true, message: "OTP verified successfully!" });
  }

  res.status(400).json({ success: false, message: "Invalid OTP" });
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
