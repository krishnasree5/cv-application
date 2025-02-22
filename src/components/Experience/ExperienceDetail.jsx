import PropTypes from "prop-types";
import styles from "./Experience.module.css";

const ExperienceDetail = ({
  experienceDetail,
  handleChange,
  deleteExperience,
  index,
}) => {
  return (
    <div className={styles.experienceItem}>
      <h3 className={styles.subtitle}>Experience {index + 1}</h3>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`company-${index}`}>
          Company
        </label>
        <input
          className={styles.input}
          type="text"
          id={`company-${index}`}
          name="company"
          value={experienceDetail.company}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`position-${index}`}>
          Position
        </label>
        <input
          className={styles.input}
          type="text"
          id={`position-${index}`}
          name="position"
          value={experienceDetail.position}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`startDate-${index}`}>
          Start Date
        </label>
        <input
          className={styles.input}
          type="date"
          id={`startDate-${index}`}
          name="startDate"
          value={experienceDetail.startDate}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`endDate-${index}`}>
          End Date
        </label>
        <input
          className={styles.input}
          type="date"
          id={`endDate-${index}`}
          name="endDate"
          value={experienceDetail.endDate}
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
          value={experienceDetail.description}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <button
        className={styles.deleteButton}
        onClick={() => deleteExperience(index)}
      >
        Delete
      </button>
    </div>
  );
};

ExperienceDetail.propTypes = {
  experienceDetail: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ExperienceDetail; 