import sendAjaxRequest from '../../lib-shared/func/xml_http_request';

function addChatWindowConfig(config) {
  return {
    category: 'ADD_CONFIG',
    type: 'ADD_CONFIG_FILE',
    config,
  };
}

function fetchConfigFile() {
  return (dispatch) => {
    sendAjaxRequest({
      path: 'http://localhost:3000/d0c5781a-dc4d-456c-a75c-e526cff95935.js',

      method: 'GET',

      onSuccess: (response) => {
        dispatch(addChatWindowConfig(response));
      },

      onFailure: () => {
        console.error('Fatal: cannot fetch config file');
      },
    });
  };
}

export {
  fetchConfigFile,
  addChatWindowConfig,
};
