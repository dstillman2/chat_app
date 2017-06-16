// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import updateFormField from '../../actions/form_field';

import Textbox from '../../../lib-shared/form_fields/textbox';

// Update the form field state when the field has changed.
const createOnChangeFunc = (dispatch: () => void, formFieldId: number) => (
  (e: any) => {
    e.preventDefault();

    const value: string = e.target.value;

    dispatch(updateFormField(formFieldId, value));
  }
);

// If existing value exists, return that value, else return empty string.
const getValue = (fieldsList: any, fieldId: number) => {
  const fieldParam = fieldsList[fieldId];

  return fieldParam ? fieldParam.value : '';
};

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function Form(props) {
  const fields = props.chatWindow && props.chatWindow.fields ? (
    props.chatWindow.fields
  ) : (
    props.fields
  );

  return (
    <div
      className="form"
    >
      {
        props.config.fields.map((field) => {
          switch (field.type) {
            case 'textbox':
              return (
                <Textbox
                  id={field.id}
                  key={field.label}
                  value={getValue(fields, field.id)}
                  config={field}
                  onChange={createOnChangeFunc(
                    props.dispatch,
                    field.id,
                  )}
                />
              );
            default:
              return null;
          }
        })
      }
    </div>
  );
}

Form.propTypes = {
  config: PropTypes.shape({
    fields: PropTypes.array,
  }).isRequired,
};

export default connect(state => state)(Form);

export { createOnChangeFunc, getValue };
