// index.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5050;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service
  auth: {
    user: "phinehasoseitutu1@gmail.com", // Your email
    pass: "rvof dfmm nxxh npay", // Use an app password, not your actual Gmail password
  },
});

// Email route
app.post("/", (req, res) => {
  const { url, contact, imageUrl } = req.body;

  const mailOptions = {
    from: "phinehasoseitutu1@gmail.com",
    to: "sboadu2001@gmail.com", // Corrected recipient email format
    subject: "New Report Submitted",
    html: `
      <h3>New Case of Fire Outbreak</h3>
      <img src="${imageUrl}" alt="Submitted Image" style="max-width:100%;height:auto;">
      <p><strong>Location:</strong> ${url}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Image:</strong></p>
      
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
