/**
 * Created by TextInput on 4/25/17.
 */

import React, {PropTypes} from "react";

// Common text input for forms
const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // The video somehow ran with the addition of `.isRequired`; my run failed reporting that `onChange` was required.
  // Removing this requirement allows the code to run *without* supplying this property.
  onChange: PropTypes.func /* .isRequired */,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
