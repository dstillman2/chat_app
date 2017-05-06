import React from 'react';

import routeTo from './util/navigation.routeTo';

function Routing(props) {
  return (
    <div
      className="routing"
      style={{ width: props.width }}
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
