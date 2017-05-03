function createBorderDrag(left, top, width, height) {
  const elem = document.createElement('div');
  elem.style.position = 'fixed';
  elem.style.left = left;
  elem.style.top = top;
  elem.style.width = width;
  elem.style.height = height;
  elem.style.border = '5px solid #F1F1F1';

  const body = document.querySelector('body');

  body.appendChild(elem);

  return elem;
}

function dragAndDrop() {
  const o = document.getElementsByClassName('topbar')[0];
  const win = document.getElementById('ds-chat-window');
  let isBorder = null;
  let holderLeft = '';
  let holderTop = '';

  o.addEventListener('mousedown', (mouseDownEvt) => {
    // Get topbar position relative to viewport
    const topbar = document.getElementsByClassName('topbar')[0];
    const topBarPosition = topbar.getBoundingClientRect();

    win.style.opacity = '0.6';
    // Get distance to top left corner of the window relative to where the mouse
    // clicked
    const topbarDeltaX = mouseDownEvt.clientX - topBarPosition.left;
    const topbarDeltaY = mouseDownEvt.clientY - topBarPosition.top;

    document.onmousemove = (evt) => {
      const winDimensions = win.getBoundingClientRect();
      const docWidth = document.body.clientWidth;
      const docHeight = document.body.clientHeight;

      // Calculate the left and top position of the main chat window
      let newWindowLeftPosition = evt.clientX - topbarDeltaX;
      let newWindowTopPosition = evt.clientY - topbarDeltaY;

      // Set limitations for the chat window
      if (newWindowLeftPosition < 0) {
        newWindowLeftPosition = 0;
      } else if (newWindowLeftPosition + winDimensions.width > docWidth) {
        newWindowLeftPosition = docWidth - winDimensions.width;
      }

      if (newWindowTopPosition < 0) {
        newWindowTopPosition = 0;
      } else if (newWindowTopPosition + winDimensions.height > docHeight) {
        newWindowTopPosition = docHeight - winDimensions.height;
      }

      holderLeft = `${newWindowLeftPosition}px`;
      holderTop = `${newWindowTopPosition}px`;

      if (isBorder) {
        isBorder.parentElement.removeChild(isBorder);

        isBorder = null;
      }

      isBorder = createBorderDrag(holderLeft, holderTop, winDimensions.width, winDimensions.height);
    };
  });

  document.addEventListener('mouseup', () => {
    const win = document.getElementById('ds-chat-window');

    win.style.opacity = 1;

    if (isBorder) {
      isBorder.parentElement.removeChild(isBorder);
      isBorder = null;
    }

    win.style.left = holderLeft;
    win.style.top = holderTop;
    document.onmousemove = () => {};
  });
}

export default dragAndDrop;
