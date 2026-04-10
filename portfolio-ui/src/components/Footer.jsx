import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Raakesh K</h2>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/Raakesh-K/"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/raakesh191203/"><FaLinkedin /></a>
          <a href="mailto:raakesh191203@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 Raakesh K. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;