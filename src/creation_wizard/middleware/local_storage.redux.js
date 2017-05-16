// Redux middleware
// If local storage is available, set the store to local storage. If not, skip.
const setLocalStorage = store => next => (action) => {
  next(action);

  if (window.localStorage) {
    const chatWindowConfig = JSON.stringify(store.getState().chatWindow);

    localStorage.setItem('chatWindowConfig', chatWindowConfig);
  }
};

export default setLocalStorage;
