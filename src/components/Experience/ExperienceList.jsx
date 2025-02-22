import PropTypes from "prop-types";
import ExperienceDetail from "./ExperienceDetail";

const ExperienceList = ({ experienceDetails, handleChange, deleteExperience }) => {
  return (
    <>
      {experienceDetails.map((experienceDetail, index) => (
        <ExperienceDetail
          key={index}
          experienceDetail={experienceDetail}
          handleChange={handleChange}
          deleteExperience={deleteExperience}
          index={index}
        />
      ))}
    </>
  );
};

ExperienceList.propTypes = {
  experienceDetails: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default ExperienceList; 