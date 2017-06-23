// @flow
import { updateChatWindowPosition } from '../../chat/actions/chat_window';

let isInitiated = false;

// Create and inject an element with the same width and height as the chat
// window. This is the border they see when they are dragging the window.
const createBorderDrag = function createBorderDrag(
  left: string,
  top: string,
  width: string,
  height: string,
): Element {
  const body = document.querySelector('body');
  const elem = document.createElement('div');

  elem.id = 'drag-border';
  elem.style.position = 'fixed';
  elem.style.left = left;
  elem.style.top = top;
  elem.style.width = `${width}px`;
  elem.style.height = `${height}px`;
  elem.style.zIndex = 1000000;
  elem.style.border = '6px solid #333';

  body.appendChild(elem);

  return elem;
};

const dragAndDrop = function dragAndDrop(dispatch) {
  const chatWin = document.getElementById('ds-chat-window');
  const topbar = document.getElementById('move-cursor-box');

  if (!topbar) return;

  let borderElem = null;
  let positionLeft = '';
  let positionTop = '';

  topbar.addEventListener('mousedown', (mouseDownEvt) => {
    mouseDownEvt.stopPropagation();
    mouseDownEvt.preventDefault();

    // Get topbar position relative to viewport
    const topBarPosition = topbar.getBoundingClientRect();

    // Get distance to top left corner of the chatWindow relative to where the
    // mouse clicked
    const topbarDeltaX = mouseDownEvt.clientX - topBarPosition.left;
    const topbarDeltaY = mouseDownEvt.clientY - topBarPosition.top;

    let flag = false;
    let borderDragFlag = false;

    document.onmousemove = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      // Reduce opacity
      chatWin.style.opacity = '0.6';

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
        // throttle the number of times paint is required to move the drag border
        // to a different location in the viewport.
        if (!borderDragFlag) {
          borderDragFlag = true;
          window.requestAnimationFrame(() => {
            if (borderElem) {
              borderElem.style.left = positionLeft;
              borderElem.style.top = positionTop;
            }

            borderDragFlag = false;
          });
        }
      } else {
        borderElem = createBorderDrag(
          positionLeft,
          positionTop,
          chatWinDimensions.width,
          chatWinDimensions.height,
        );
      }

      // The onmouseup listener removes the drag border, restores opacity and removes
      // the onmousemove callback.
      const mouseUpEvent = () => {
        chatWin.style.opacity = 1;

        if (borderElem) {
          borderElem.parentElement.removeChild(borderElem);

          borderElem = null;
        }

        dispatch(updateChatWindowPosition({
          top: positionTop,
          left: positionLeft,
        }));

        document.onmousemove = () => {};
        document.removeEventListener('mouseup', mouseUpEvent);
      };

      if (!flag) {
        flag = true;
        document.addEventListener('mouseup', mouseUpEvent);
      }
    };
  });

  if (isInitiated) return;

  // on window resize, check that the chat window remains within bounds
  window.addEventListener('resize', () => {
    const chatWinDimensions = chatWin.getBoundingClientRect();
    const docWidth = document.body.clientWidth;
    const docHeight = document.body.clientHeight;

    if (chatWinDimensions.left - docWidth < 0) {
      chatWin.style.left = '';
    }

    if (chatWinDimensions.top - docHeight < 0) {
      chatWin.style.top = '';
    }

    isInitiated = true;
  });
};

export default dragAndDrop;

export { createBorderDrag };
