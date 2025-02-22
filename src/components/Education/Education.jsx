import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./Education.module.css";
import EducationList from "./EducationList";

const Education = ({ educationDetails, setEducationDetails }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails[index][name] = value;
    setEducationDetails(updatedEducationDetails);
  };

  const deleteEducation = (index) => {
    const updatedEducationDetails = educationDetails.filter(
      (_, i) => i !== index
    );
    setEducationDetails(updatedEducationDetails);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Education</h1>
      <EducationList
        educationDetails={educationDetails}
        handleChange={handleChange}
        deleteEducation={deleteEducation}
      />

      <Button
        text="Add Education"
        onClick={() =>
          setEducationDetails([
            ...educationDetails,
            {
              degree: "",
              major: "",
              university: "",
              startDate: "",
              endDate: "",
            },
          ])
        }
      />
    </div>
  );
};

Education.propTypes = {
  educationDetails: PropTypes.array.isRequired,
  setEducationDetails: PropTypes.func.isRequired,
};

export default Education; 