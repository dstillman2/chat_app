import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatButton from './chat_button';

import draggable from '../../../lib/func/dragdrop';
import {
  enableCircularTabbing,
  disableCircularTabbing,
} from '../../../lib/func/circular_tabbing';

let isDraggableEnabled = false;
let isCircularTabbingEnabled = false;

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function ChatWindow(props) {
  const currentNode = props.settings.nodeId || props.initialNode;
  const nodeConfig = props.nodes[currentNode];

  let output;

  if (props.settings.isVisible) {
    window.requestAnimationFrame(() => {
      // Enable draggable
      if (props.settings.isDraggable && !isDraggableEnabled) {
        isDraggableEnabled = true;

        draggable(props.dispatch);
      }

      // Enable circular tabbing
      if (props.settings.hasCircularTabbing && !isCircularTabbingEnabled) {
        isCircularTabbingEnabled = true;

        enableCircularTabbing();
      }
    });

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
          <div id="move-cursor-box" />
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
    isDraggableEnabled = false;
    isCircularTabbingEnabled = false;

    if (props.settings.hasCircularTabbing && isCircularTabbingEnabled) {
      disableCircularTabbing();
    }

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

const mapStateToProps = (state) => {
  // Store is structured differently when the chat window is visible in the
  // creation wizard. Return the appropriate parameters.
  if (state.chatWindow && state.chatWindow.settings) {
    return state.chatWindow;
  }

  return state;
};

export default connect(mapStateToProps)(ChatWindow);
