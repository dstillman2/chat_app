import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  closeChatWindow,
  minimizeChatWindow,
} from '../../actions/chat_window';

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function TopBar(props) {
  return (
    <div
      className="topbar"
    >
      {
        props.settings.draggable && (
          <div id="move-cursor-box" />
        )
      }
      <div
        style={{
          float: 'left',
        }}
      >
        {props.settings.title}
      </div>
      <div className="ui-btns">
        <button
          className="dsChat title-btn"
          onClick={() => props.dispatch(minimizeChatWindow())}
        >
          -
        </button>
        <button
          className="dsChat title-btn"
          onClick={() => props.dispatch(closeChatWindow())}
        >
          x
        </button>
      </div>
    </div>
  );
}

TopBar.defaultProps = {
  children: [],
  config: {},
};

TopBar.propTypes = {
  settings: PropTypes.shape({
    title: PropTypes.string,
    draggable: PropTypes.bool,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  // Store is structured differently when the chat window is visible in the
  // creation wizard. Return the appropriate parameters.
  if (state.chatWindow && state.chatWindow.settings) {
    return state.chatWindow;
  }

  return state;
};

export default connect(mapStateToProps)(TopBar);
