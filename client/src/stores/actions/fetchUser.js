import axios from 'axios';

export const USER_FETCH = 'USER_FETCH';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export const fetchUser = user => dispatch => {
  dispatch({ type: USER_FETCH });
  axios
    .pull(`https://rent-mytools.herokuapp.com/api/users/:id`, user)
    .then(res => {
      console.log(res.data);
      dispatch({ type: USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: USER_FAILURE, payload: err })
    });
};