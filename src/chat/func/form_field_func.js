// @flow
import updateFormField from '../actions/form_field';

// Update the form field state when the field has changed.
const setOnChangeFormField = (dispatch: () => void, formFieldId: number) => (
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

export { setOnChangeFormField, getValue };
