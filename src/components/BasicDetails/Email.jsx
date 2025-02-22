import PropTypes from "prop-types";

const Email = ({ email, onChange }) => {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
      />
    </div>
  );
};

Email.propTypes = {
  email: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Email;