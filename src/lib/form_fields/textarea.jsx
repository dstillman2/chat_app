import React from 'react';
import PropTypes from 'prop-types';

/**
 * Textarea component. Source of truth is stored in the main store.
 */
function TextArea(props) {
  const uniqueIdentifier = props.config.id || Math.random().toString();

  return (
    <div className="form-group">
      {
        props.label && (
          <label htmlFor={this.uniqueIdentifier}>
            {props.label}
          </label>
        )
      }
      <textarea
        className="form-control"
        id={props.id}
        key={uniqueIdentifier}
        name={props.config.name}
        rows={props.config.rows}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.config.placeholder}
        maxLength={props.config.maxLength}
      />
    </div>
  );
}

TextArea.propTypes = {
  config: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.number,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
  }).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
