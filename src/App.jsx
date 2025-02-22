import styles from "./App.module.css";
import { useState } from "react";
import BasicDetails from "./components/BasicDetails/BasicDetails";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";

function App() {
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationDetails, setEducationDetails] = useState([]);

  const [experienceDetails, setExperienceDetails] = useState([]);

  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState([]);

  const clearResume = () => {
    setBasicDetails({
      name: "",
      email: "",
      phone: "",
    });
    setEducationDetails([]);
    setExperienceDetails([]);
    setSkills([]);
    setProjects([]);
    setAchievements([]);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.formSection}>
        <button className={styles.clearButton} onClick={clearResume}>
          Clear Resume
        </button>
        <BasicDetails
          basicDetails={basicDetails}
          setBasicDetails={setBasicDetails}
        />
        <Education
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
        <Experience
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
        <Skills skills={skills} setSkills={setSkills} />
        <Projects projects={projects} setProjects={setProjects} />
        <Achievements
          achievements={achievements}
          setAchievements={setAchievements}
        />
      </div>

      <div className={styles.previewSection}>
        <div className={styles.resumeHeader}>
          <h1>{basicDetails.name || "John Doe"}</h1>
          <p>{basicDetails.email || "email@example.com"}</p>
          <p>{basicDetails.phone || "+91 9876543210"}</p>
        </div>

        {educationDetails.length > 0 && (
          <div className={styles.resumeSection}>
            <h2>Education</h2>
            {educationDetails.map((edu, index) => (
              <div key={index} className={styles.resumeItem}>
                <h3>
                  {edu.degree} in {edu.major}
                </h3>
                <h4>{edu.university}</h4>
                <div className={styles.dateRange}>
                  {edu.startDate} to {edu.endDate}
                </div>
              </div>
            ))}
          </div>
        )}

        {experienceDetails.length > 0 && (
          <div className={styles.resumeSection}>
            <h2>Experience</h2>
            {experienceDetails.map((exp, index) => (
              <div key={index} className={styles.resumeItem}>
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <div className={styles.dateRange}>
                  {exp.startDate} to {exp.endDate}
                </div>
                <p className={styles.description}>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {skills.length > 0 && (
          <div className={styles.resumeSection}>
            <h2>Skills</h2>
            <div className={styles.resumeItem}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {projects.length > 0 && (
          <div className={styles.resumeSection}>
            <h2>Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className={styles.resumeItem}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <p className={styles.technologies}>
                  Technologies: {project.technologies}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {achievements.length > 0 && (
          <div className={styles.resumeSection}>
            <h2>Achievements</h2>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.resumeItem}>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
