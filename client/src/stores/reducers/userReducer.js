import { USER_FETCH, USER_SUCCESS, USER_FAILURE } from '../actions';

const iniState = {
  fetchingUser: false,
  user: [],
  error: null
};

export const userReducers = (state = iniState, action) => {
  switch(action.type) {
    case USER_FETCH:
      return {
        ...state,
        fetchingUser: true
      };
    case USER_SUCCESS:
      return {
        ...state,
        user: [ ...action.payload ],
        fetchingUser: false
      };
    case USER_FAILURE:
      return {
        ...state,
        fetchingUser: false,
        error: action.payload,
      };
    default:
      return state;
  };
};