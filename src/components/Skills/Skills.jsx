import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./Skills.module.css";

const Skills = ({ skills, setSkills }) => {
  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const deleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillItem}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor={`skill-${index}`}>
              Skill {index + 1}
            </label>
            <input
              className={styles.input}
              type="text"
              id={`skill-${index}`}
              value={skill}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <button
            className={styles.deleteButton}
            onClick={() => deleteSkill(index)}
          >
            Delete
          </button>
        </div>
      ))}
      <Button text="Add Skill" onClick={() => setSkills([...skills, ""])} />
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSkills: PropTypes.func.isRequired,
};

export default Skills;
