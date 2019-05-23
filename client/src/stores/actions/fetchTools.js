import axios from 'axios';

export const TOOLS_FETCH = 'TOOLS_FETCH';
export const TOOLS_SUCCESS = 'TOOLS_SUCCESS';
export const TOOLS_FAILURE = 'TOOLS_FAILURE';

export const fetchTools = () => dispatch => {
  dispatch({ type: TOOLS_FETCH });
  axios
    .get(`https://rent-mytools.herokuapp.com/api/tools/`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: TOOLS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: TOOLS_FAILURE, payload: err });
    });
};