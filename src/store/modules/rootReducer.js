import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import forgotPassword from './forgotPassword/reducer';

export default combineReducers({
  auth,
  user,
  forgotPassword,
});
