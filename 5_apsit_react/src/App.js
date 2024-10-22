import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Home Component
function Home() {
  return (
    <div>
      <h2>Welcome to the world of Technocrats @ APSIT!</h2>
    </div>
  );
}

// About Component
function About() {
  return (
    <div>
      <h2>
        APSIT: An institute that groom’s industry-ready futuristic technocrats!
      </h2>
      <p>
        Read more about us at:{" "}
        <a href="https://www.apsit.edu.in" target="_blank" rel="noreferrer">
          https://www.apsit.edu.in
        </a>
      </p>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div>
      <h2>You can find us here:</h2>
      <p>
        A. P. Shah Institute of Technology <br />
        Survey No. 12, 13, Opp. Hypercity Mall, <br />
        Kasarvadavali, Ghodbunder Road, <br />
        Thane West, Thane, Maharashtra, India 400615
      </p>
    </div>
  );
}

// Navbar Component
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
