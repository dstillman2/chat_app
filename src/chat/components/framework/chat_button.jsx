import React from 'react';
import { connect } from 'react-redux';

import { openChatWindow } from '../../actions/chat_window';

/**
 * TODO: comment
 * @returns {Element}
 */
function ChatButton(props) {
  let output;

  window.requestAnimationFrame(() => {
    document.querySelector('.btn-open').focus();
  });

  if (props.type === 'resume') {
    output = (
      <button
        className="btn-open resume-chat"
        onClick={() => { props.dispatch(openChatWindow()); }}
        style={{
          position: 'fixed',
          bottom: 5,
          right: 5,
        }}
      >
        Resume Chat
      </button>
    );
  } else {
    output = (
      <button
        className="btn-open chat-button"
        onClick={() => { props.dispatch(openChatWindow()); }}
        style={{
          position: 'fixed',
          bottom: 5,
          right: 5,
        }}
      >
        Start Chat
      </button>
    );
  }

  return output;
}

export default connect()(ChatButton);
