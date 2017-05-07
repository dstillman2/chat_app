import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

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
        props.settings.draggable && (<div id="move-cursor-box" />)
      }
      <div>{props.settings.title}</div>
    </div>
  );
}

TopBar.defaultProps = {
  children: [],
  config: {},
};

TopBar.propTypes = {
  children: PropTypes.node,
  config: PropTypes.objectOf(PropTypes.any),
};

export default connect(state => state.chatWindow)(TopBar);
