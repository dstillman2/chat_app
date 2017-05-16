import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import routeTo from '../util/navigation.routeTo';

/**
 * Sidebar back button
 */
function BackButton(props) {
  if (!props.isVisible) {
    return null;
  }

  return (
    <div
      className="backButton"
    >
      <button
        className="ds-button"
        onClick={() => {
          if (!props.shouldStopAction) {
            routeTo(props.routeTo, true)();
          }
        }}
      >
        {'<'} Back
      </button>
    </div>
  );
}

BackButton.defaultProps = {
  isVisible: false,
  routeTo: '',
  shouldStopAction: false,
};

BackButton.propTypes = {
  isVisible: PropTypes.bool,
  shouldStopAction: PropTypes.bool,
  routeTo: PropTypes.string,
};

const mapStateToProps = state => ({
  shouldStopAction: state.sidebar.isTransitioning,
  isVisible: state.sidebar.backButton.isVisible,
  routeTo: state.sidebar.backButton.routeTo,
});

export default connect(mapStateToProps)(BackButton);
