import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./Projects.module.css";
import ProjectList from "./ProjectList";

const Projects = ({ projects, setProjects }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
  };

  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <ProjectList
        projects={projects}
        handleChange={handleChange}
        deleteProject={deleteProject}
      />
      <Button
        text="Add Project"
        onClick={() =>
          setProjects([
            ...projects,
            {
              title: "",
              description: "",
              technologies: "",
              link: "",
            },
          ])
        }
      />
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired,
};

export default Projects;
