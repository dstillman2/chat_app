function addMessage(value) {
  return {
    category: 'UPDATE_CHAT_MESSAGES',
    type: 'UPDATE_MESSAGE',
    value,
  };
}

export {
  addMessage,
};
