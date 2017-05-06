import React from 'react';
import PropTypes from 'prop-types';

import onButtonClick from '../util/button.onclick';

function Button(props) {
  return (
    <button
      className="ds-btn"
      onClick={(e) => { onButtonClick(e, props.onClick); }}
    >
      <div className="btn-animation" />
      {props.name}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default Button;
