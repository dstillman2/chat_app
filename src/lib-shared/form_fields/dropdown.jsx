import React from 'react';
import PropTypes from 'prop-types';

/**
 * Dropdown component. Source of truth is stored in the main store.
 */
function Dropdown(props) {
  const uniqueIdentifier = props.config.id || Math.random().toString();

  return (
    <div className="form-group">
      {
        props.config.label && (
          <label htmlFor={uniqueIdentifier}>
            {props.config.label}
          </label>
        )
      }
      <select
        className="form-control"
        id={uniqueIdentifier}
        name={props.config.name}
        onChange={props.onChange}
        defaultValue={props.config.defaultValue}
      >
        {
          !!props.config.defaultSelected && (
            <option value="" disabled selected>
              {props.config.defaultSelected}]
            </option>
          )
        }
        {
          props.config.options.map(option => (
            <option
              key={option.key}
              value={option.value}
            >
              {option.label}
            </option>
          ))
        }
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  config: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    defaultSelected: PropTypes.string,
    options: PropTypes.array,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
