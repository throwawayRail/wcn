import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/homeMessage")
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
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
      <h2>{message}</h2>
    </div>
  );
};

export default Home;
