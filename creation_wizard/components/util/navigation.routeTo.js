import store from '../../store';
import { setNextNode, setPriorNode } from '../../actions/sidebar.actions';

const routeTo = (routeLocation, isPriorNode) => () => {
  if (isPriorNode) {
    store.dispatch(setPriorNode(routeLocation));
  } else {
    store.dispatch(setNextNode(routeLocation));
  }
};

export default routeTo;
