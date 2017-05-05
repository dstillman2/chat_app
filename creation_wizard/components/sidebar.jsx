import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getReactComponent from './util/sidebar.routing';
import onTransitionEnd from './util/sidebar.transitionend';

/**
 * Sidebar component
 *
 * If nextNode is present, apply a css transition to the next component. A
 * transform and transition is applied to Element.sidebar-slide. $activeReactElement
 * and $nextReactElement are inline-block components positioned side-by-side.
 * Shifting Element.sidebar-slide will apply the animation effect. Upon
 * completion of the animation, remove nextNode and set $activeReactElement to
 * $nextReactElement.
 *
 * @param {object} props
 * @returns {Node} sidebar component
 */
function Sidebar(props) {
  if (props.nextNode && props.priorNode) {
    const error = new Error();

    error.message = (
      'Sidebar component: cannot set nextNode and priorNode simultaneously'
    );

    throw error;
  }

  const activeReactElement = getReactComponent(props.activeNode);
  const nextReactElement = getReactComponent(props.nextNode);
  const priorReactElement = getReactComponent(props.priorNode);

  const elems = [
    priorReactElement,
    activeReactElement,
    nextReactElement,
  ];

  let applyCss = {};

  if (nextReactElement) {
    applyCss = {
      transform: `translateX(-${props.width}px)`,
      transition: '0.2s ease-in',
    };

    props.element.addEventListener('transitionend', onTransitionEnd({
      element: props.element,
      nextNode: props.nextNode,
    }));
  }

  if (priorReactElement) {
    const sidebarSlideElement = props.element.children[0];

    applyCss = {
      transform: `translateX(-${props.width}px)`,
    };

    // Two requestAnimationFrames as you want execution prior to the second
    // repaint.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        sidebarSlideElement.style.transition = '0.2s ease-in';
        sidebarSlideElement.style.transform = '';
      });
    });

    props.element.addEventListener('transitionend', onTransitionEnd({
      element: props.element,
      priorNode: props.priorNode,
    }));
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
  nextNode: '',
  priorNode: '',
  element: null,
};

Sidebar.propTypes = {
  activeNode: PropTypes.string.isRequired,
  nextNode: PropTypes.string,
  priorNode: PropTypes.string,
  width: PropTypes.number.isRequired,
  element: PropTypes.any,
};

export default connect(state => state.sidebar)(Sidebar);
