import axios from 'axios';

export const ADD_TOOL = 'ADD_TOOL';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const addTools = () => dispatch => {
  dispatch({ type: ADD_TOOL });
  axios
    .push(`https://rent-mytools.herokuapp.com/api/tools`)
    .then()
    .catch();
};

