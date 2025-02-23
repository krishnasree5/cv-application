import PropTypes from "prop-types";
import styles from "./BasicDetails.module.css";
import Input from "./Input";

const BasicDetails = ({ basicDetails, setBasicDetails }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Basic Details</h1>
      <div className={styles.inputGroup}>
        <Input
          label="Name"
          type="text"
          id="name"
          value={basicDetails.name}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, name: e.target.value })
          }
        />
        <Input
          label="Email"
          type="email"
          id="email"
          value={basicDetails.email}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, email: e.target.value })
          }
        />
        <Input
          label="Phone"
          type="tel"
          id="phone"
          value={basicDetails.phone}
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
