import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setOnChangeFormField,
  getValue,
} from '../../func/form_field_func';

import Textbox from '../../../lib/form_fields/textbox';

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function Form(props) {
  const fields = props.fields;

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
                  onChange={setOnChangeFormField(
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
  fields: PropTypes.objectOf(PropTypes.any).isRequired,
  config: PropTypes.shape({
    fields: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = (state) => {
  if (state.chatWindow && state.chatWindow.fields) {
    return { fields: state.chatWindow.fields };
  }

  return { fields: state.fields };
};

export default connect(mapStateToProps)(Form);
