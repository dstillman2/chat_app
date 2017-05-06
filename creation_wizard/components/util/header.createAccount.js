import store from '../../store';
import { openFullScreen } from '../../actions/fullscreen.actions';

function onClickCreateAccount() {
  store.dispatch(openFullScreen());
}

export default onClickCreateAccount;
