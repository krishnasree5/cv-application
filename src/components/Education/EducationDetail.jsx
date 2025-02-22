import PropTypes from "prop-types";
import styles from "./Education.module.css";

const EducationDetail = ({
  educationDetail,
  handleChange,
  deleteEducation,
  index,
}) => {
  return (
    <div className={styles.educationItem}>
      <h3 className={styles.subtitle}>Education {index + 1}</h3>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`degree-${index}`}>
          Degree
        </label>
        <input
          className={styles.input}
          type="text"
          id={`degree-${index}`}
          name="degree"
          value={educationDetail.degree}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`major-${index}`}>
          Major
        </label>
        <input
          className={styles.input}
          type="text"
          id={`major-${index}`}
          name="major"
          value={educationDetail.major}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor={`university-${index}`}>
          University
        </label>
        <input
          className={styles.input}
          type="text"
          id={`university-${index}`}
          name="university"
          value={educationDetail.university}
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
          value={educationDetail.startDate}
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
          value={educationDetail.endDate}
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <button
        className={styles.deleteButton}
        onClick={() => deleteEducation(index)}
      >
        Delete
      </button>
    </div>
  );
};

EducationDetail.propTypes = {
  educationDetail: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteEducation: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default EducationDetail; 