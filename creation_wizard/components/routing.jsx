import React from 'react';

import routeTo from './util/navigation.routeTo';

function Routing() {
  return (
    <div
      className="testing"
      style={{
        width: 250,
        display: 'inline-block',
        verticalAlign: 'top',
      }}
    >
      <ul>
        <li>
          <a
            href="#navigation"
            onClick={routeTo('navigation', true)}
          >Back</a>
        </li>
      </ul>
    </div>
  );
}

export default Routing;
