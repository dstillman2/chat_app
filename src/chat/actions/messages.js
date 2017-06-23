import sendAjaxRequest from '../../lib/func/xml_http_request';

function addMessage(value) {
  return {
    category: 'UPDATE_CHAT_MESSAGES',
    type: 'UPDATE_MESSAGE',
    value,
  };
}

function fetchChatRoomId({ data, onSuccess, onFailure }) {
  return (dispatch, state) => {
    if (!state().connect) {
      return;
    }

    sendAjaxRequest({
      path: 'http://localhost:3000/chat/connect',

      method: 'POST',

      data: {
        configId: state().connect.clientId,

        agentGroupId: data.agentGroupId,
      },

      onSuccess: (response) => {
        onSuccess(response);
      },

      onFailure: () => {
        onFailure();
      },
    });
  };
}

export {
  addMessage,
  fetchChatRoomId,
};
