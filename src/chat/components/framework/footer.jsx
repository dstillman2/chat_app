import React from 'react';
import PropTypes from 'prop-types';

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function Footer(props) {
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

Footer.defaultProps = {
  children: [],
  config: {},
};

Footer.propTypes = {
  children: PropTypes.node,
  config: PropTypes.objectOf(PropTypes.any),
};

export default Footer;
