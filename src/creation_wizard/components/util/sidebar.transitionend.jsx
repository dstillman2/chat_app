import store from '../../store';
import { setNodes, setWidth } from '../../actions/sidebar.actions';

const onTransitionEndSidebar = ({ element, nextNode, priorNode }) => {
  const currentTime = new Date();

  function listener() {
    const firedTime = new Date();
    element.removeEventListener('transitionend', listener);

    if (firedTime - currentTime < 150) {
      setTimeout(() => {
        store.dispatch(setNodes({
          nextNode: null,
          activeNode: nextNode || priorNode,
        }));
      }, 200);
    } else {
      store.dispatch(setNodes({
        nextNode: null,
        activeNode: nextNode || priorNode,
      }));
    }
  }

  return listener;
};

const onTransitionEndMain = ({ element, sidebarWidth }) => {
  function listener() {
    element.removeEventListener('transitionend', listener);

    element.style.left = sidebarWidth;
    element.style.transition = '';
    element.style.transform = '';

    store.dispatch(setWidth(sidebarWidth));
  }

  return listener;
};

export {
  onTransitionEndSidebar,
  onTransitionEndMain,
};
