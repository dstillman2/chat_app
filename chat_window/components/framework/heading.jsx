import React from 'react';
import PropTypes from 'prop-types';

/**
 * Heading text node component
 * @returns {Element} element with a text node
 */
function Heading(props) {
  return (
    <h3
      className="heading"
    >
      {props.config.textNode}
    </h3>
  );
}

Heading.propTypes = {
  config: PropTypes.shape({
    textNode: PropTypes.string,
  }).isRequired,
};

export default Heading;
