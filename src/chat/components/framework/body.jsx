import React from 'react';
import PropTypes from 'prop-types';

import Heading from './heading';
import Breadcrumbs from './breadcrumbs';
import Form from './form';

/**
 * TODO: comment
 * @returns {Element} main chat element
 */
function Body(props) {
  return (
    <div
      className="ds-body"
    >
      {
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
      }
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
  }),
};

export default Body;
