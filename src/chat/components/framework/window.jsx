import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatButton from './chat_button';

import draggable from '../../../lib-shared/func/dragdrop';

// TODO: clean up and remove this flag
let draggableFlag = false;

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function ChatWindow(props) {
  const currentNode = props.settings.nodeId;
  const nodeConfig = props.nodes[currentNode];

  let output;

  window.requestAnimationFrame(() => {
    if (!draggableFlag && props.settings.draggable) {
      draggableFlag = true;
      draggable('ds-chat-window');
    }
  });

  if (props.settings.isVisible) {
    output = (
      <div>
        <div
          id="ds-chat-window"
          style={{
            display: props.settings.isMinimized ? 'none' : 'block',
            width: nodeConfig.width,
            height: nodeConfig.height,
            top: props.settings.top,
            left: props.settings.left,
          }}
        >
          {
            React.Children.map(props.children, child => (
              React.cloneElement(
                child,
                {
                  nodeConfig,
                },
              )
            ))
          }
        </div>
        {
          props.settings.isMinimized && (
            <ChatButton
              type="resume"
            />
          )
        }
      </div>
    );
  } else {
    draggableFlag = false;
    output = (
      <ChatButton
        type="default"
      />
    );
  }

  return output;
}

ChatWindow.defaultProps = {
  nodes: {},
  settings: {},
};

ChatWindow.propTypes = {
  children: PropTypes.node.isRequired,
  nodes: PropTypes.objectOf(PropTypes.any),
  settings: PropTypes.objectOf(PropTypes.any),
};

export default connect(state => state.chatWindow)(ChatWindow);
