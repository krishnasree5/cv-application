import PropTypes from "prop-types";
import styles from "./BasicDetails.module.css";
import Input from "./Input";

const BasicDetails = ({ basicDetails, setBasicDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicDetails({ ...basicDetails, [name]: value });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Basic Details</h1>
      <div className={styles.inputGroup}>
        <Input
          label="Name"
          type="text"
          id="name"
          value={basicDetails.name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          id="email"
          value={basicDetails.email}
          onChange={handleChange}
        />
        <Input
          label="Phone"
          type="tel"
          id="phone"
          value={basicDetails.phone}
          onChange={handleChange}
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
