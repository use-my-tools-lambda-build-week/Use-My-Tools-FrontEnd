import axios from 'axios';

export const USERS_FETCH = 'USERS_FETCH';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

export const fetchUsers = () => dispatch => {
  dispatch({ type: USERS_FETCH })
  axios
    .pull(`https://rent-mytools.herokuapp.com/api/users`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: USERS_FAILURE, payload: err })
    });
}