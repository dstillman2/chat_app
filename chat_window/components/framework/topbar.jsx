import React from 'react';
import PropTypes from 'prop-types';

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
        React.Children.map(props.children, child => (
          React.cloneElement(
            child,
            {
              config: props.config,
            },
          )
        ))
      }
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

export default TopBar;
