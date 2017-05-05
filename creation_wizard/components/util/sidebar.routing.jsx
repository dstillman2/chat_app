import React from 'react';

import Navigation from '../navigation';
import Routing from '../routing';
import Style from '../style';
import Settings from '../settings';

/**
 * Takes a string and returns a React component
 */
function getElement(elemStr) {
  let elem;

  switch (elemStr) {
    case 'navigation':
      elem = <Navigation key="navigation" />;
      break;
    case 'routing':
      elem = <Routing key="routing" />;
      break;
    case 'style':
      elem = <Style key="style" />;
      break;
    case 'settings':
      elem = <Settings key="settings" />;
      break;
    default:
      elem = null;
  }

  return elem;
}

export default getElement;
