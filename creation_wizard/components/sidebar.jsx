import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getReactComponent from './util/sidebar.routing';
import onTransitionEnd from './util/sidebar.transitionend';

/**
 * Sidebar component
 * @param {object} props
 * @returns {Node} sidebar component
 */
function Sidebar(props) {
  const activeReactElement = getReactComponent(props.activeNode);
  const nextReactElement = getReactComponent(props.nextNode);

  const elems = [
    activeReactElement,
    nextReactElement,
  ];

  let applyCss = {};

  /* If nextNode is present, apply a css transition to the next component. A
   * transform and transition is applied to Element.sidebar-slide. $activeReactElement
   * and $nextReactElement are inline-block components positioned side-by-side.
   * Shifting Element.sidebar-slide will apply the animation effect. Upon
   * completion of the animation, remove nextNode and set $activeReactElement to
   * $nextReactElement.
   */
  if (nextReactElement) {
    applyCss = {
      transform: `translateX(-${props.width}px)`,
      transition: '0.2s ease-in',
    };

    props.element.addEventListener(
      'transitionend',
      onTransitionEnd({
        element: props.element,
        nextNode: '',
        activeNode: props.nextNode,
        priorNode: props.activeNode,
      }),
    );
  }

  return (
    <div id="sidebar">
      <div
        className="sidebar-slide"
        style={applyCss}
      >
        {
          elems
        }
      </div>
    </div>
  );
}

Sidebar.defaultProps = {
  nextNode: null,
  element: null,
};

Sidebar.propTypes = {
  activeNode: PropTypes.string.isRequired,
  nextNode: PropTypes.string,
  width: PropTypes.number.isRequired,
  element: PropTypes.any,
};

export default connect(state => state.sidebar)(Sidebar);
