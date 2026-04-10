import "../styles/Nav.css";
import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setDark(!dark);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">RK.</h2>

      <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#contact">CONTACT</a></li>
      </ul>

      <button className="theme-btn" onClick={toggleTheme}>
        {dark ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;