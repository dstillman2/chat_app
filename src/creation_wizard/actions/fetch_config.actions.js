import sendAjaxRequest from '../../lib/func/xml_http_request';

import { openChatWindow } from '../../chat/actions/chat_window';

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
      path: 'http://localhost:3000/config-d0c5781a-dc4d-456c-a75c-e526cff95935.js',

      method: 'GET',

      onSuccess: (response) => {
        dispatch(addChatWindowConfig(response));
        dispatch(openChatWindow());
      },

      onFailure: () => {
        throw new Error('Fatal: cannot fetch config file');
      },
    });
  };
}

export {
  fetchConfigFile,
  addChatWindowConfig,
};
