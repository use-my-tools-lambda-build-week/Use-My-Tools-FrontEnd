import { combineReducers } from 'redux';
import { toolsReducers } from './toolsReducer';
import { toolReducers } from './toolReducer';
import { usersReducers } from './usersReducer';
import { userReducers } from './userReducer';

export default combineReducers({
  toolsReducers, toolReducers,
  usersReducers, userReducers,
});