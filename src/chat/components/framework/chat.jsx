import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setOnChangeFormField,
  getValue,
} from '../../func/form_field_func';

import TextArea from '../../../lib/form_fields/textarea';
import socketIO from '../../func/chat.socket';

/**
 * Parent component containing all chat framework nodes
 * @returns {Node} main chat element
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

  // Initialize socket connection
  socketIO.initialize(props.dispatch, props.agentGroupId);

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
          value={getValue(props.fields, 'send-input')}
          onChange={setOnChangeFormField(
            props.dispatch,
            'send-input',
          )}
          config={{
            placeholder: 'Type your message here',
          }}
        />
        <button
          onClick={() => {
            const input = props.fields['send-input'];
            if (input && input.value) {
              socketIO.sendClientMessage(props.dispatch, input.value);
            }
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

Chat.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fields: PropTypes.objectOf(PropTypes.any).isRequired,
  messages: PropTypes.arrayOf(PropTypes.any).isRequired,
  agentGroupId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  if (state.chatWindow && state.chatWindow.messages) {
    return {
      messages: state.chatWindow.messages,
      fields: state.chatWindow.fields,
      agentGroupId: state.chatWindow.nodes[state.chatWindow.settings.nodeId].agentGroup,
    };
  }

  return {
    fields: state.fields,
    messages: state.messages,
    agentGroupId: state.nodes[state.settings.nodeId].agentGroup,
  };
};

export default connect(mapStateToProps)(Chat);
