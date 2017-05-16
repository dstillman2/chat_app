function chatFields(state, action) {
  switch (action.subType) {
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

export default chatFields;
