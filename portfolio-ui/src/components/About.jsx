import "../styles/About.css";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

function About() {
  const infoCards = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Chennai, Tamil Nadu, India"
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      value: "B.E Computer Science — Tagore Engineering College"
    },
    {
      icon: <FaBriefcase />,
      title: "Aspiring MERN Stack Developer",
      value: "Passionate about building dynamic web applications and seamless user experiences."
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "raakesh191203@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 6385137291"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-left">
        <span className="section-tag">WHO I AM</span>

        <h2>
         Aspiring <span>MERN Stack Developer</span>
        </h2>

        <p>
          I'm a passionate MERN Stack Developer with a strong foundation in web development and a keen interest in building dynamic web applications. With experience in both frontend and backend technologies, I thrive on creating seamless user experiences and efficient server-side solutions. I'm eager to contribute my skills to innovative projects and collaborate with like-minded professionals in the tech industry.
        </p>

        <p>
          My technical toolkit includes proficiency in MongoDB, Express.js, React, and Node.js, allowing me to develop full-stack applications that are both robust and user-friendly. I have a solid understanding of RESTful API design, database management, and responsive web design principles. I'm committed to continuous learning and staying updated with the latest trends in web development to deliver cutting-edge solutions.
        </p>

        <div className="tags">
          <span>MERN Stack</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
          <span>Responsive Design</span>
        </div>
      </div>

      <div className="about-right">
        {infoCards.map((card, index) => (
          <div className="info-card" key={index}>
            <div className="icon">{card.icon}</div>
            <div>
              <h4>{card.title}</h4>
              <p>{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;