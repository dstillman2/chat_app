import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setOnChangeFormField,
  getValue,
} from '../../func/form_field_func';

import TextArea from '../../../lib/form_fields/textarea';

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function Chat(props) {
  // Prior to the repaint, set the focus of the scroll to the bottom of the chat
  // box. Also focus the send input field.
  window.requestAnimationFrame(() => {
    const chatBodyElement = document.querySelector('.chat-body');

    if (chatBodyElement) {
      chatBodyElement.scrollTop = (
        chatBodyElement.scrollHeight - chatBodyElement.clientHeight
      );

      document.querySelector('#send-input').focus();
    }
  });

  const output = props.messages.map((item) => {
    const elemClassName = item.type === 'agent' ? 'ag-msg' : 'cs-msg';

    return (
      <li key={`${item.id}`} className={`message ${elemClassName}`}>
        <b>{item.name}:</b> {item.message}
      </li>
    );
  });

  return (
    <div id="chat-node">
      <div className="chat-body">
        <ul className="messages">
          {output}
        </ul>
      </div>
      <div className="chat-footer">
        <TextArea
          id="send-input"
          key="send-input"
          value={getValue(props.fields, 'send-input')}
          onChange={setOnChangeFormField(props.dispatch, 'send-input')}
          config={{
            placeholder: 'Type your message here',
          }}
        />
        <button
          onClick={() => sendClientMessage()}
        >Send</button>
      </div>
    </div>
  );
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => {
  if (state.chatWindow && state.chatWindow.messages) {
    return {
      messages: state.chatWindow.messages,
      fields: state.chatWindow.fields,
    };
  }

  return {
    fields: state.fields,
    messages: state.messages,
  };
};

export default connect(mapStateToProps)(Chat);
