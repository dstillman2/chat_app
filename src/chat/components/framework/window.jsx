import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import draggable from '../../../lib-shared/func/dragdrop';

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function ChatWindow(props) {
  const currentNode = props.settings.nodeId;
  const nodeConfig = props.nodes[currentNode];

  window.requestAnimationFrame(() => {
    if (props.settings.draggable) {
      draggable('ds-chat-window');
    }
  });

  return (
    <div
      id="ds-chat-window"
      style={{
        width: nodeConfig.width,
        height: nodeConfig.height,
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
  );
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
