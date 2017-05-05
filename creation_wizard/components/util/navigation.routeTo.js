import store from '../../store';
import { setNextNode } from '../../actions/sidebar.actions';

const routeTo = routeLocation => () => {
  store.dispatch(setNextNode(routeLocation));
};

export default routeTo;
