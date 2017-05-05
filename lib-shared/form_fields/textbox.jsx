import React from 'react';
import PropTypes from 'prop-types';

/**
 * Textbox component. Source of truth is stored in the main store.
 */
function TextBox(props) {
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
      <input
        className="form-control textbox-style"
        id={uniqueIdentifier}
        type={props.config.inputType}
        tabIndex={props.config.tabIndex}
        maxLength={props.config.maxLength}
        value={props.value}
        defaultValue={props.config.defaultValue}
        onChange={props.onChange}
        placeholder={props.config.placeholder}
      />
    </div>
  );
}

TextBox.propTypes = {
  config: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    inputType: PropTypes.string,
    tabIndex: PropTypes.string,
    maxLength: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
  }).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextBox;
