const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // ✅ Load .env variables

const app = express();

// ✅ FIX: Explicitly allow your frontend origin
app.use(
  cors({
    origin: [
      "http://localhost:3000", // for local testing
      "https://talrn-clone-liard.vercel.app", // your Vercel frontend URL
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Temporary in-memory OTP store with expiry
let otpStore = {};

// ✅ Generate OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// ✅ Login route – send OTP to email
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email & Password required" });
  }

  const otp = generateOtp();
  otpStore[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 }; // 5 min expiry

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Login System" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP for Login",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    console.log(`✅ OTP sent to ${email}: ${otp}`);
    res.json({ success: true, message: "OTP sent to email!" });
  } catch (err) {
    console.error("❌ Email error:", err);
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

  if (Date.now() > expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ success: false, message: "OTP expired" });
  }

  if (storedOtp === otp) {
    delete otpStore[email];
    return res.json({ success: true, message: "OTP verified successfully!" });
  }

  res.status(400).json({ success: false, message: "Invalid OTP" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
