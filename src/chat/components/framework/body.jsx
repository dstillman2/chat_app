import React from 'react';
import PropTypes from 'prop-types';

import Heading from './heading';
import Breadcrumbs from './breadcrumbs';
import Form from './form';
import Chat from './chat';

/**
 * TODO: comment
 * @returns {Node} body
 */
function Body(props) {
  let output;

  if (props.nodeConfig.type === 'survey') {
    output = (
      props.nodeConfig.content.map((field) => {
        switch (field.type) {
          case 'heading':
            return <Heading key={field.id} config={field} />;
          case 'breadcrumbs':
            return <Breadcrumbs key={field.id} config={field} />;
          case 'form':
            return <Form key={field.id} config={field} />;
          default:
            return null;
        }
      })
    );
  } else if (props.nodeConfig.type === 'chat') {
    output = (
      <Chat />
    );
  }

  return (
    <div
      className="ds-body"
    >
      { output }
    </div>
  );
}

Body.defaultProps = {
  nodeConfig: {
    content: [],
  },
};

Body.propTypes = {
  nodeConfig: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string,
  }),
};

export default Body;
