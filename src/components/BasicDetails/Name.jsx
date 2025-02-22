import PropTypes from "prop-types";

const Name = ({ name, onChange }) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onChange}
        />
      </div>
    );
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Name;

