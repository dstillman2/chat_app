import store from '../../store';
import { setNodes, setWidth } from '../../actions/sidebar.actions';

const onTransitionEndSidebar = ({ element, nextNode, priorNode }) => {
  function listener() {
    store.dispatch(setNodes({
      nextNode: null,
      activeNode: nextNode || priorNode,
    }));

    element.style.transition = '';
    element.style.transform = '';

    element.removeEventListener('transitionend', listener);
  }

  return listener;
};

const onTransitionEndMain = ({ element, sidebarWidth }) => {
  function listener() {
    store.dispatch(setWidth(sidebarWidth));

    element.style.left = sidebarWidth;
    element.style.transition = '';
    element.style.transform = '';

    element.removeEventListener('transitionend', listener);
  }

  return listener;
};

export {
  onTransitionEndSidebar,
  onTransitionEndMain,
};
