import "../styles/Experience.css";

function Experience() {
  const jobs = [
    {
      role: "web developer intern",
      company: "GBTECH corp solutions",
      date: "feb 2025- August 2025",
      points: [
        "Developed a responsive web application using React and CSS",
        "Collaborated with a team of developers to implement new features and fix bugs",
        "Optimized application performance and improved user experience"
      ]
    },
    {
      role: "FULL STACK DEVELOPER INTERN",
      company: "Code-tech Solutions",
      date: "Feb 2024 - Jul 2024",
      points: [
        "Developed a full stack web application using React, Express and MongoDB",
        "Implemented user authentication and role-based access control",
        "Designed RESTful APIs for seamless frontend-backend communication"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2>
        Professional <span>Journey</span>
      </h2>

      <div className="timeline">
        {jobs.map((job, index) => (
          <div className="timeline-card" key={index}>
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <span>{job.date}</span>

            <ul>
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;