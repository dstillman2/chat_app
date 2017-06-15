// TODO: Need to select all tabbable elements.
// Find all focusable elements and add tabindex -1 to enable circular tabbing
// within the chat window.

let modifiedElems = null;

function enableCircularTabbing() {
  modifiedElems = document.querySelectorAll('button:not(.dsChat), a:not(.dsChat)');

  modifiedElems.forEach((elem) => {
    elem.tabIndex = -1;
  });
}

function disableCircularTabbing() {
  modifiedElems.forEach((elem) => {
    elem.tabIndex = '';
  });
}

export {
  enableCircularTabbing,
  disableCircularTabbing,
};
