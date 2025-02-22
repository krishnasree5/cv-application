import PropTypes from "prop-types";
import styles from "./Projects.module.css";

const ProjectDetail = ({ project, handleChange, deleteProject, index }) => {
  return (
    <div className={styles.projectItem}>
      <h3 className={styles.subtitle}>Project {index + 1}</h3>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`title-${index}`}>
          Title
        </label>
        <input
          className={styles.input}
          type="text"
          id={`title-${index}`}
          name="title"
          value={project.title}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`description-${index}`}>
          Description
        </label>
        <textarea
          className={styles.textarea}
          id={`description-${index}`}
          name="description"
          value={project.description}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`technologies-${index}`}>
          Technologies Used
        </label>
        <input
          className={styles.input}
          type="text"
          id={`technologies-${index}`}
          name="technologies"
          value={project.technologies}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`link-${index}`}>
          Project Link
        </label>
        <input
          className={styles.input}
          type="url"
          id={`link-${index}`}
          name="link"
          value={project.link}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <button
        className={styles.deleteButton}
        onClick={() => deleteProject(index)}
      >
        Delete
      </button>
    </div>
  );
};

ProjectDetail.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectDetail; 