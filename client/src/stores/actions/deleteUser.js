import axios from 'axios';

export const USER_DELETE = 'USER_DELETE';
export const UDELETE_SUCCESS = 'UDELETE_SUCCESS';
export const UDELETE_FAILURE = 'UDELETE_SUCCESS';

export const deleteTool = user => dispatch => {
  dispatch({ type: USER_DELETE });
  axios
    .delete(`http://https://rent-mytools.herokuapp.com/api/tools/${user.id}`, user)
    .then(res => {
      console.log('That tool is gone', res.data);
      dispatch({ type: UDELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UDELETE_FAILURE, payload: err });
    });
};