import axios from 'axios';

export const TOOL_FETCH = 'TOOL_FETCH';
export const TOOL_SUCCESS = 'TOOL_SUCCESS';
export const TOOL_FAILURE = 'TOOL_FAILURE';

export const fetchTool = tool => dispatch => {
  dispatch({ type: TOOL_FETCH });
  axios
    .get(`https://rent-mytools.herokuapp.com/api/tool/${tool.id}`, tool)
    .then(res => {
      console.log(res.data);
      dispatch({ type: TOOL_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: TOOL_FAILURE, payload: err })
    });
};