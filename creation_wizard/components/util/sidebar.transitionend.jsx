import store from '../../store';
import { setNodes } from '../../actions/sidebar.actions';

const onTransitionEnd = ({ element, nextNode, activeNode, priorNode }) =>
  () => {
    store.dispatch(setNodes(
      nextNode,
      activeNode,
      priorNode,
    ));

    element.style.transition = '';

    element.removeEventListener('transitionend', onTransitionEnd);
  };

export default onTransitionEnd;
