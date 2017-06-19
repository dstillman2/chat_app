import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import routeTo from '../util/navigation.routeTo';
import { hideBackButton } from '../../actions/sidebar.actions';

function Navigation(props) {
  if (!props.isTransitioning) {
    window.requestAnimationFrame(() => {
      props.dispatch(hideBackButton());
    });
  }

  const checkIsTransitioning = (fn) => {
    if (!props.isTransitioning) {
      return fn;
    }

    return null;
  };

  return (
    <div
      className="navigation"
      style={{ width: props.width }}
    >
      <div className="logo">
        <img alt="" src="../static/img/logo.png" />
      </div>
      <ul>
        <li>
          <a href="#chat-routing" onClick={checkIsTransitioning(routeTo('routing'))}>
            Routing
          </a>
        </li>
        <li>
          <a href="#themes" onClick={checkIsTransitioning(routeTo('themes'))}>
            Themes
          </a>
        </li>
        <li>
          <a href="#settings" onClick={checkIsTransitioning(routeTo('settings'))}>
            Settings
          </a>
        </li>
        <li>
          <a href="#embed" onClick={checkIsTransitioning(routeTo('embed'))}>
            Embed
          </a>
        </li>
      </ul>
    </div>
  );
}

Navigation.defaultProps = {
  isTransitioning: false,
};

Navigation.propTypes = {
  isTransitioning: PropTypes.bool,
  width: PropTypes.number.isRequired,
};

const mapStateToProps = state => (
  {
    isTransitioning: state.sidebar.isTransitioning,
  }
);

export default connect(mapStateToProps)(Navigation);
