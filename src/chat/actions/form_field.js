// @flow

// Define action format
type Action = {
  type: string,
  formFieldId: number,
  value: string,
};

/**
 * Action creator
 * Update form field value
 */
function updateFormField(formFieldId: number, value: string): Action {
  return {
    category: 'UPDATE_CHAT_FIELDS',
    type: 'UPDATE_FORM_FIELD',
    formFieldId,
    value,
  };
}

export default updateFormField;
