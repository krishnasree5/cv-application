import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./Achievements.module.css";

const Achievements = ({ achievements, setAchievements }) => {
  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedAchievements = [...achievements];
    updatedAchievements[index] = value;
    setAchievements(updatedAchievements);
  };

  const deleteAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Achievements</h1>
      {achievements.map((achievement, index) => (
        <div key={index} className={styles.achievementItem}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor={`achievement-${index}`}>
              Achievement {index + 1}
            </label>
            <textarea
              className={styles.textarea}
              id={`achievement-${index}`}
              value={achievement}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <button
            className={styles.deleteButton}
            onClick={() => deleteAchievement(index)}
          >
            Delete
          </button>
        </div>
      ))}
      <Button
        text="Add Achievement"
        onClick={() => setAchievements([...achievements, ""])}
      />
    </div>
  );
};

Achievements.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  setAchievements: PropTypes.func.isRequired,
};

export default Achievements;
