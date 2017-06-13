import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function Chat() {
  window.requestAnimationFrame(() => {
    const chatBodyElement = document.querySelector('.chat-body');

    chatBodyElement.scrollTop = chatBodyElement.scrollHeight - chatBodyElement.clientHeight;
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
          placeholder="Type your message here"
          />
        <button>Send</button>
      </div>
    </div>
  );
}

export default connect()(Chat);
