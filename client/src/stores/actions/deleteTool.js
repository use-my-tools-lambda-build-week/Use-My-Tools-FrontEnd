import axios from 'axios';

export const TOOL_DELETE = 'TOOL_DELETE';
export const TDELETE_SUCCESS = 'TDELETE_SUCCESS';
export const TDELETE_FAILURE = 'TDELETE_FAILURE';

export const deleteTool = tool => dispatch => {
  dispatch({ type: TOOL_DELETE });
  axios
    .delete(`http://https://rent-mytools.herokuapp.com/api/tools/${tool.id}`, tool)
    .then(res => {
      console.log('That tool is gone', res.data);
      dispatch({ type: TDELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: TDELETE_FAILURE, payload: err });
    });
};