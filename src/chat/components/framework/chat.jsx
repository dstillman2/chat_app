import React from 'react';
import { connect } from 'react-redux';

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function Chat() {
  // Prior to the repaint, set the focus of the scroll to the bottom of the chat
  // box. Also focus the send input field.
  window.requestAnimationFrame(() => {
    const chatBodyElement = document.querySelector('.chat-body');

    chatBodyElement.scrollTop = chatBodyElement.scrollHeight - chatBodyElement.clientHeight;

    document.querySelector('#send-input').focus();
  });

  return (
    <div id="chat-node">
      <div className="chat-body">
        <div className="message ag-msg">
          <b>Thomas:</b> Hello. Welcome to the DirecTV networking center. How may I help you?
        </div>
        <div className="message ag-msg">
          <b>Thomas:</b> aosief ioasef ioas ejfoiasej fioasje fioasj efioa sjeofai
        </div>
        <div className="message cs-msg">
          <b>You:</b> I need help on something
        </div>
        <div className="message cs-msg">
          <b>You:</b> I need help on something
        </div>
        <div className="message ag-msg">
          <b>Thomas:</b> aosief ioasef ioas ejfoiasej fioasje fioasj efioa sjeofai
        </div>
      </div>
      <div className="chat-footer">
        <textarea
          id="send-input"
          placeholder="Type your message here"
        />
        <button>Send</button>
      </div>
    </div>
  );
}

export default connect()(Chat);
