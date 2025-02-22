import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./Experience.module.css";
import ExperienceList from "./ExperienceList";

const Experience = ({ experienceDetails, setExperienceDetails }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperienceDetails = [...experienceDetails];
    updatedExperienceDetails[index][name] = value;
    setExperienceDetails(updatedExperienceDetails);
  };

  const deleteExperience = (index) => {
    const updatedExperienceDetails = experienceDetails.filter(
      (_, i) => i !== index
    );
    setExperienceDetails(updatedExperienceDetails);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Experience</h1>
      <ExperienceList
        experienceDetails={experienceDetails}
        handleChange={handleChange}
        deleteExperience={deleteExperience}
      />

      <Button
        text="Add Experience"
        onClick={() =>
          setExperienceDetails([
            ...experienceDetails,
            {
              company: "",
              position: "",
              startDate: "",
              endDate: "",
              description: "",
            },
          ])
        }
      />
    </div>
  );
};

Experience.propTypes = {
  experienceDetails: PropTypes.array.isRequired,
  setExperienceDetails: PropTypes.func.isRequired,
};

export default Experience;
