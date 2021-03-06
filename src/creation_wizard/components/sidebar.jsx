import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getReactComponent from './util/sidebar.routing';
import {
  onTransitionEndSidebar,
  onTransitionEndMain,
} from './util/sidebar.transitionend';
import BackButton from './widgets/sidebar.backbutton';
import { sidebarIsTransitioning } from '../actions/sidebar.actions';

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
  let width = props.width;

  const activeReactElement = getReactComponent(props.activeNode);
  const nextReactElement = getReactComponent(props.nextNode);
  const priorReactElement = getReactComponent(props.priorNode);

  let applyCss = {};

  if (nextReactElement) {
    width = nextReactElement.props.width;

    applyCss = {
      transform: `translateX(-${activeReactElement.props.width}px)`,
      transition: '0.2s linear',
    };
  } else if (priorReactElement) {
    applyCss = {
      transform: `translateX(-${priorReactElement.props.width}px)`,
    };
  }

  const elems = [
    priorReactElement,
    activeReactElement,
    nextReactElement,
  ];

  if (nextReactElement && !props.isTransitioning) {
    const deltaMainWidth = nextReactElement.props.width - props.width;
    const slideElement = props.element.children[0];

    props.mainElement.style.transition = '0.2s linear';
    props.mainElement.style.transform = `translateX(${deltaMainWidth}px)`;

    window.requestAnimationFrame(() => {
      props.dispatch(sidebarIsTransitioning());

      props.mainElement.addEventListener('transitionend', onTransitionEndMain({
        sidebarWidth: nextReactElement.props.width,
        element: props.mainElement,
      }));

      slideElement.addEventListener('transitionend', onTransitionEndSidebar({
        element: slideElement,
        nextNode: props.nextNode,
      }));
    });
  } else if (priorReactElement && !props.isTransitioning) {
    const deltaMainWidth = priorReactElement.props.width - props.width;
    const slideElement = props.element.children[0];

    // Two requestAnimationFrames to execute prior to the second repaint
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        slideElement.style.transition = '0.2s linear';
        slideElement.style.transform = '';
      });
    });

    props.mainElement.style.transition = 'transform 0.2s linear';
    props.mainElement.style.transform = `translateX(${deltaMainWidth}px)`;
    props.mainElement.style.right = `${deltaMainWidth}px`;

    props.mainElement.addEventListener('transitionend', onTransitionEndMain({
      sidebarWidth: priorReactElement.props.width,
      element: props.mainElement,
    }));

    slideElement.addEventListener('transitionend', onTransitionEndSidebar({
      element: slideElement,
      priorNode: props.priorNode,
    }));
  }

  return (
    <div id="sidebar" style={{ width }}>
      <div
        className="sidebar-slide"
        style={applyCss}
      >
        {elems}
      </div>
      <BackButton />
    </div>
  );
}

Sidebar.defaultProps = {
  nextNode: null,
  priorNode: null,
  element: null,
  mainElement: null,
  isTransitioning: false,
};

Sidebar.propTypes = {
  isTransitioning: PropTypes.bool,
  width: PropTypes.number.isRequired,
  priorNode: PropTypes.node,
  nextNode: PropTypes.node,
  activeNode: PropTypes.node.isRequired,
  mainElement: PropTypes.any,
  element: PropTypes.any,
};

const mapStateToProps = state => (
  Object.assign({}, state.sidebar, { mainElement: state.main.element })
);

export default connect(mapStateToProps)(Sidebar);
