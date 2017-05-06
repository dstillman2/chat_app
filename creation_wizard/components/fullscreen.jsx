import React from 'react';
import { connect } from 'react-redux';

import { closeFullScreen } from '../actions/fullscreen.actions';

function FullScreen(props) {
  return (
    <div
      className="fullscreen"
      style={{
        display: props.isOpen ? 'block' : 'none',
      }}
    >
      <button
        className="close-btn"
        onClick={() => props.dispatch(closeFullScreen())}
      >X</button>
      {props.children}
    </div>
  );
}

export default connect(state => state.fullscreen)(FullScreen);
