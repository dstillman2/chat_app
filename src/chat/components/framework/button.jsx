import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setNode } from '../../actions/set_node';
/**
 * Button component
 * @returns {Element}
 */
function Button(props) {
  return (
    <button
      className="dsChat button-routing"
      onClick={() => { props.dispatch(setNode(props.linkToNode)); }}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  linkToNode: PropTypes.number.isRequired,
};

export default connect()(Button);
