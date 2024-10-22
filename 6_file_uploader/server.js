// Import required modules
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

// Set up Express app
const app = express();
app.use(cors());

// Configure Multer for file uploads
const upload = multer({ dest: "uploads/" });

// Create an upload route
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  res.send(`File uploaded successfully: ${req.file.originalname}`);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
