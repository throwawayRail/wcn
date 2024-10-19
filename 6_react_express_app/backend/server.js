const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// API route example
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// For the home page
app.get("/api/homeMessage", (req, res) => {
  res.json({ message: "The backend knows you're on the home page!" });
});

// For the about page
app.get("/api/aboutMessage", (req, res) => {
  res.json({ message: "The backend knows you're on the about page!" });
});
// Catch-all handler for any requests not matching the above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
