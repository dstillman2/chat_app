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
          className="title-btn"
          onClick={() => props.dispatch(minimizeChatWindow())}
        >
          -
        </button>
        <button
          className="title-btn"
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
  }).isRequired,
};

export default connect(state => state.chatWindow)(TopBar);
