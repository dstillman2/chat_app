import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showBackButton } from '../../actions/sidebar.actions';

function Themes(props) {
  window.requestAnimationFrame(() => {
    props.dispatch(showBackButton('navigation'));
  });

  return (
    <div
      className="navigation"
      style={{ width: props.width }}
    >
      <div className="logo">
        <img alt="" src="./static/img/logo.png" />
      </div>
      <h5>Themes</h5>
      <ul>
        <li className="active">
          <a href="#default">Default</a>
        </li>
      </ul>
    </div>
  );
}

Themes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default connect()(Themes);
