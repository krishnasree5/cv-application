import PropTypes from "prop-types";

const Phone = ({ phone, onChange }) => {
  return (
    <div>
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
    </div>
  );
};

Phone.propTypes = {
  phone: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Phone;
