import React from 'react';
import { connect } from 'react-redux';

import routeTo from '../util/navigation.routeTo';

function Themes(props) {
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
        <li>
          <a href="#chat-routing" onClick={routeTo('routing')}>Default</a>
        </li>
      </ul>
    </div>
  );
}

export default connect()(Themes);

// on click radio button
// dispatch to store to update flag
//
