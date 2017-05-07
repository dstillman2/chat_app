import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showBackButton } from '../../actions/sidebar.actions';

function Settings(props) {
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
      <ul>
        Settngs
      </ul>
    </div>
  );
}

Settings.propTypes = {
  width: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Settings);
