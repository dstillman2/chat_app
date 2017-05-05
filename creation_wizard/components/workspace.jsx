import React from 'react';
import PropTypes from 'prop-types';

function Workspace(props) {
  return (
    <div id="workspace">
      {props.children}
    </div>
  );
}

Workspace.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Workspace;
