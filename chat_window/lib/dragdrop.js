// @flow

// Create and inject an element with the same width and height as the chat
// window.
const createBorderDrag = function createBorderDrag(
  left: string,
  top: string,
  width: string,
  height: string,
): Element {
  const body = document.querySelector('body');
  const elem = document.createElement('div');

  elem.style.position = 'fixed';
  elem.style.left = left;
  elem.style.top = top;
  elem.style.width = width;
  elem.style.height = height;
  elem.style.border = '5px solid #F1F1F1';

  body.appendChild(elem);

  return elem;
};

const dragAndDrop = function dragAndDrop(elem: string) {
  const chatWin = document.getElementById(elem);
  const topbar = document.getElementsByClassName('topbar')[0];

  let borderElem = null;
  let positionLeft = '';
  let positionTop = '';

  topbar.addEventListener('mousedown', (mouseDownEvt) => {
    // Get topbar position relative to viewport
    const topBarPosition = topbar.getBoundingClientRect();

    // Reduce opacity
    chatWin.style.opacity = '0.6';

    // Get distance to top left corner of the chatWindow relative to where the mouse
    // clicked
    const topbarDeltaX = mouseDownEvt.clientX - topBarPosition.left;
    const topbarDeltaY = mouseDownEvt.clientY - topBarPosition.top;

    document.onmousemove = (evt) => {
      const chatWinDimensions = chatWin.getBoundingClientRect();
      const docWidth = document.body.clientWidth;
      const docHeight = document.body.clientHeight;

      // Calculate the left and top position of the main chat chatWindow
      let newchatWindowLeftPosition = evt.clientX - topbarDeltaX;
      let newchatWindowTopPosition = evt.clientY - topbarDeltaY;

      // Set limitations for the chat chatWindow
      if (newchatWindowLeftPosition < 0) {
        newchatWindowLeftPosition = 0;
      } else if (newchatWindowLeftPosition + chatWinDimensions.width > docWidth) {
        newchatWindowLeftPosition = docWidth - chatWinDimensions.width;
      }

      if (newchatWindowTopPosition < 0) {
        newchatWindowTopPosition = 0;
      } else if (newchatWindowTopPosition + chatWinDimensions.height > docHeight) {
        newchatWindowTopPosition = docHeight - chatWinDimensions.height;
      }

      positionLeft = `${newchatWindowLeftPosition}px`;
      positionTop = `${newchatWindowTopPosition}px`;

      if (borderElem) {
        borderElem.style.left = positionLeft;
        borderElem.style.top = positionTop;
      } else {
        borderElem = createBorderDrag(
          positionLeft,
          positionTop,
          chatWinDimensions.width,
          chatWinDimensions.height,
        );
      }
    };
  });

  // The onmouseup listener removes the drag border, restores opacity and removes
  // the onmousemove callback.
  document.addEventListener('mouseup', () => {
    chatWin.style.opacity = 1;

    if (borderElem) {
      borderElem.parentElement.removeChild(borderElem);

      borderElem = null;
    }

    chatWin.style.left = positionLeft;
    chatWin.style.top = positionTop;
    document.onmousemove = () => {};
  });
};

export default dragAndDrop;

export { createBorderDrag };
