import React from 'react';
import { connect } from 'react-redux';

import routeTo from './util/navigation.routeTo';

function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        <img alt="" src="./static/img/logo.png" />
      </div>
      <ul>
        <li>
          <a href="#chat-routing" onClick={routeTo('routing')}>Chat Routing</a>
        </li>
        <li>
          <a href="#style" onClick={routeTo('style')}>Customize Style</a>
        </li>
        <li>
          <a href="#settings" onClick={routeTo('settings')}>Settings</a>
        </li>
      </ul>
    </div>
  );
}

export default connect()(Navigation);

// on click
// Add new component to sidebar-slide
// slide inner sidebar div component for the width of the front element
