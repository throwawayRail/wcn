import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const About = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/aboutMessage")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json(); // Make sure to return the parsed JSON
      })
      .then((data) => {
        setMessage(data.message);
        console.log(message);
      }) // Set the message from the parsed data
      .catch((error) => {
        console.error("There was an issue with the fetch:", error);
      });
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Go to Home</Link>
      <h2>{message}</h2>
    </div>
  );
};

export default About;
