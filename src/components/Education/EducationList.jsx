import PropTypes from "prop-types";
import EducationDetail from "./EducationDetail";

const EducationList = ({ educationDetails, handleChange, deleteEducation }) => {
  return (
    <>
      {educationDetails.map((educationDetail, index) => (
        <EducationDetail
          key={index}
          educationDetail={educationDetail}
          handleChange={handleChange}
          deleteEducation={deleteEducation}
          index={index}
        />
      ))}
    </>
  );
};

EducationList.propTypes = {
  educationDetails: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default EducationList; 