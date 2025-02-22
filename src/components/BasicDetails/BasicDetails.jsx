import PropTypes from "prop-types";
import styles from "./BasicDetails.module.css";
import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";

const BasicDetails = ({ basicDetails, setBasicDetails }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Basic Details</h1>
      <div className={styles.inputGroup}>
        <Name
          name={basicDetails.name}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, name: e.target.value })
          }
        />
        <Email
          email={basicDetails.email}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, email: e.target.value })
          }
        />
        <Phone
          phone={basicDetails.phone}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, phone: e.target.value })
          }
        />
      </div>
    </div>
  );
};

BasicDetails.propTypes = {
  basicDetails: PropTypes.object.isRequired,
  setBasicDetails: PropTypes.func.isRequired,
};

export default BasicDetails;
