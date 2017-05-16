/**
 * Fields reducer - Tracks changes in form fields
 * @returns {Object} state
 */
function fields(state = [], action) {
  switch (action.type) {
    case 'UPDATE_FORM_FIELD':
      return Object.assign({}, state, {
        [action.formFieldId]: {
          value: action.value,
        },
      });
    default:
      return state;
  }
}

export default fields;
