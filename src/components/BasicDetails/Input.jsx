import PropTypes from "prop-types";
import styles from "./BasicDetails.module.css";

const Input = ({ label, type, id, value, onChange }) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input; 