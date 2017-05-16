import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showBackButton } from '../../actions/sidebar.actions';
import { updateTitle } from '../../actions/chatwindow.settings';
import TextBox from '../../../lib-shared/form_fields/textbox';

function Settings(props) {
  window.requestAnimationFrame(() => {
    props.dispatch(showBackButton('navigation'));
  });

  return (
    <div
      className="navigation"
      style={{ width: props.width }}
    >
      <div className="logo">
        <img alt="" src="./static/img/logo.png" />
      </div>
      <h5>Settings</h5>
      <TextBox
        value={props.settings.title}
        onChange={e => props.dispatch(updateTitle(e.target.value))}
      />
    </div>
  );
}

Settings.defaultProps = {
  settings: {}
}

Settings.propTypes = {
  width: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state.chatWindow)(Settings);
