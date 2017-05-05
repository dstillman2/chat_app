import store from '../../store';
import { setNodes } from '../../actions/sidebar.actions';

const onTransitionEnd = ({ element, nextNode, priorNode }) =>
  () => {
    store.dispatch(setNodes({
      nextNode: null,
      activeNode: nextNode || priorNode,
    }));

    element.style.transition = '';

    element.removeEventListener('transitionend', onTransitionEnd);
  };

export default onTransitionEnd;
