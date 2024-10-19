import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json(); // Make sure to return the parsed JSON
      })
      .then((data) => setMessage(data.message)) // Set the message from the parsed data
      .catch((error) => {
        console.error("There was an issue with the fetch:", error);
      });
  }, []);

  return (
    <Router>
      <div>
        <h1>{message}</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
