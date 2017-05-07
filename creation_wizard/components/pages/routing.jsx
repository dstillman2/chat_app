import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showBackButton } from '../../actions/sidebar.actions';

function Routing(props) {
  window.requestAnimationFrame(() => {
    props.dispatch(showBackButton('navigation'));
  });

  return (
    <div
      className="routing"
      style={{ width: props.width }}
    >
      <h5>Routing</h5>
      <ul>
        Routing Here
      </ul>
    </div>
  );
}

Routing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default connect()(Routing);
