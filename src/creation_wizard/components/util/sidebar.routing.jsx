import React from 'react';

import Navigation from '../pages/navigation';
import Routing from '../pages/routing';
import Themes from '../pages/themes';
import Settings from '../pages/settings';

/**
 * Takes a string and returns a React component
 */
function getElement(elemStr) {
  let elem;

  switch (elemStr) {
    case 'navigation':
      elem = <Navigation key="navigation" width={250} />;
      break;
    case 'routing':
      elem = <Routing key="routing" width={550} />;
      break;
    case 'themes':
      elem = <Themes key="themes" width={250} />;
      break;
    case 'settings':
      elem = <Settings key="settings" width={250} />;
      break;
    default:
      elem = null;
  }

  return elem;
}

export default getElement;
