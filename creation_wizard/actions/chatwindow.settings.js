const updateTitle = value => ({
  type: 'UPDATE_CHAT_SETTINGS',
  subType: 'UPDATE_TITLE',
  value,
});

const disableDragAndDrop = () => ({
  type: 'UPDATE_CHAT_SETTINGS',
  subType: 'DISABLE_DRAG_AND_DROP',
});

export {
  updateTitle,
  disableDragAndDrop,
};
