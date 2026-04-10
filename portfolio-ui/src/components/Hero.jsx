import "../styles/Hero.css";
import profile from "../assets/profile-pic.jpg";


function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="badge">OPEN TO OPPORTUNITIES</span>
        <h1>
          Raakesh <span>K</span>
        </h1>
        <h3>Aspiring Mern Stack Developer</h3>
        <p>
          Passionate about building web applications that solve real-world problems.
        </p>
        <p>
          Skilled in MongoDB, Express.js, React, and Node.js, with a strong foundation in full-stack development.
        </p>

        <div className="hero-buttons">
          <button className="view-work">
           <a href="#projects">View My Work</a>
          </button>
          <button className="outline">
            <a href="#contact">Let's Connect</a>
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Hero;