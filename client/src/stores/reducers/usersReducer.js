import { USERS_FETCH, USERS_SUCCESS, USERS_FAILURE } from '../actions';

const iniState = {
  fetchingUsers: false,
  users: [],
  error: null
};

export const usersReducers = (state = iniState, action) => {
  switch(action.type) {
    case USERS_FETCH:
      return {
        ...state,
        fetchingUsers: true
      };
    case USERS_SUCCESS:
      return {
        ...state,
        users: [ ...action.payload ],
        fetchingUsers: false
      };
    case USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload,
      };
    default:
      return state;
  };
};