import "../styles/Projects.css";
import project1 from "../assets/projects1.png";
import project2 from "../assets/projects2.png";
import project3 from "../assets/projects3.png";
import project4 from "../assets/projects4.png"; 
import project5 from "../assets/projects5.png";

function Projects() {
  const projects = [
  {
    title: "Migrant job portal",
    image: project1,
    desc: "Migrant job portal with authentication, role-based access and search.",
    tech: ["SQL", "React", "JWT", "REST API", "Python", "Machine Learning"],
    demoLink: "https://github.com/Raakesh-K/MigrantJobPortal.git"
  },
  {
    title: "Netflix Clone Web Application",
    image: project2,
    desc: "Responsive Netflix clone with movie browsing, search and playback.",
    tech: ["React", "Express", "MongoDB", "JWT", "REST API"],
    demoLink: "https://netflix-clone-git-main-raakeshs-projects-3fddb79d.vercel.app/"
  },
  {
    title: "Full Stack Automation Application",
    image: project3,
    desc: "Full stack automation application with user authentication, task management and real-time updates.",
    tech: ["React", "Express", "MongoDB", "JWT", "REST API"],
    demoLink: "https://github.com/yourusername/automation-app"
  },
  {
    title: "Social Media React App",
    image: project4,
    desc: "Social media React app with user authentication, post creation, and real-time updates.",
    tech: ["React", "JSON Server", "JWT", "REST API"],
    demoLink: "https://social-mediaapp-react.netlify.app/"
  },
  {
    title: "BLOG CMS Full Stack Application",
    image: project5,
    desc: "BLOG CMS full stack application using MEAN stack.",
    tech: ["Angular", "Express", "MongoDB", "JWT", "REST API"],
    demoLink: "https://github.com/yourusername/blog-cms"
  }
];

  return (
    <section className="projects" id="projects">
      <h2>
        Featured <span>Projects</span>
      </h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                  
                ))}
                <button className="view-btn">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;