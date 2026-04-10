import "../styles/Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <h2>
        Education & <span>Certifications</span>
      </h2>

      <div className="edu-grid">
        <div className="edu-card">
          <h3>B.E Computer Science</h3>
          <p>Tagore Engineering College</p>
          <p> <mark className="edu-date">2018 - 2022</mark></p>
          <p>CGPA: 7.88/10</p>
        </div>

        <div className="edu-card">
          <h3>Jaya Matriculation Hr sec school</h3>
          <p>Higher Secondary</p>
          <p> <mark className="edu-date">2016 - 2018</mark></p>
          <p>Percentage: 82%</p>
        </div>
        
      </div>
    </section>
  );
}

export default Education;