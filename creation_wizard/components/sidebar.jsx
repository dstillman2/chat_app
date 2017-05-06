import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getReactComponent from './util/sidebar.routing';
import {
  onTransitionEndSidebar,
  onTransitionEndMain,
} from './util/sidebar.transitionend';

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
      const deltaMainWidth = nextReactElement.props.width - props.width;

      applyCss = {
        transform: `translateX(-${props.width}px)`,
        transition: '0.2s ease-in',
      };

      props.mainElement.style.transition = '0.2s ease-in';
      props.mainElement.style.transform = `translateX(${deltaMainWidth}px)`;

      props.mainElement.addEventListener('transitionend', onTransitionEndMain({
        sidebarWidth: nextReactElement.props.width,
        element: props.mainElement,
      }));

      props.element.addEventListener('transitionend', onTransitionEndSidebar({
        element: props.element,
        nextNode: props.nextNode,
      }));
  } else if (priorReactElement) {
    const sidebarSlideElement = props.element.children[0];
    const deltaMainWidth = priorReactElement.props.width - props.width;

    applyCss = {
      transform: `translateX(-${priorReactElement.props.width}px)`,
    };

    // Two requestAnimationFrames to execute prior to the second repaint
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        sidebarSlideElement.style.transition = '0.2s ease-in';
        sidebarSlideElement.style.transform = '';
      });
    });

    props.mainElement.style.transition = 'transform 0.2s ease-in';
    props.mainElement.style.transform = `translateX(${deltaMainWidth}px)`;
    props.mainElement.style.right = `${deltaMainWidth}px`;

    props.mainElement.addEventListener('transitionend', onTransitionEndMain({
      sidebarWidth: priorReactElement.props.width,
      element: props.mainElement,
    }));

    props.element.addEventListener('transitionend', onTransitionEndSidebar({
      element: props.element,
      priorNode: props.priorNode,
      sidebarWidth: priorReactElement.props.width,
    }));
  }

  return (
    <div id="sidebar" style={{ width: props.width }}>
      <div
        className="sidebar-slide"
        style={applyCss}
      >
        {elems}
      </div>
      <div
        className="backButton"
      >
        <button className="ds-button">{'<'} Back</button>
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

const mapStateToProps = (state) => {
  return Object.assign({}, state.sidebar, { mainElement: state.main.element });
};

export default connect(mapStateToProps)(Sidebar);
