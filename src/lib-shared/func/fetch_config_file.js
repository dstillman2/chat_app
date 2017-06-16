import sendAjaxRequest from './'

function fetchConfigFile(onSuccess, onFailure) {
  const path = 'http://localhost:3000/d0c5781a-dc4d-456c-a75c-e526cff95935.js';

  sendAjaxRequest({
    method: 'GET',
    path,
    onSuccess(data) {
      onSuccess(data);
    },
    onFailure(data) {
      console.error('Fatal: cannot fetch config file');

      if (onFailure) {
        onFailure(data)
      }
    },
  });
}
