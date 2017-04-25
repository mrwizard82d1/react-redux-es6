/**
 * Created by SelectInput on 4/25/17.
 */

import React, {PropTypes} from "react";

// Common component to select from `options`
const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  // The video somehow ran *without* `options` being defined. Removing this code allows the system to run *without*
  // defining this property.
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {/* Note that the value is set here rather than on the option.
         See docs: https://facebook.github.io/react/docs/forms.html */}
        <select name={name}
                value={value}
                onChange={onChange}
                className="form-control">
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </select>
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // The video somehow ran with the addition of `.isRequired`; my run failed reporting that `onChange` was required.
  // Removing this requirement allows the code to run *without* supplying this property.
  onChange: PropTypes.func /* .isRequired */,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
