import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setNode from '../../actions/set_node';

/**
 * Parent component containing all chat framework nodes
 * @returns {Element} main chat element
 */
function Breadcrumbs(props) {
  return (
    <div
      className="breadcrumbs"
    >
      {
        props.config.links.map((item) => {
          const onClick = (e) => {
            e.preventDefault();

            props.dispatch(setNode(item.linkTo));
          };

          return (
            <li
              role="button"
              key={item.name}
              tabIndex="0"
              onClick={onClick}
            >
              {item.name}
            </li>
          );
        })
      }
    </div>
  );
}

Breadcrumbs.propTypes = {
  config: PropTypes.shape({
    links: PropTypes.array.isRequired,
  }).isRequired,
};

export default connect()(Breadcrumbs);
