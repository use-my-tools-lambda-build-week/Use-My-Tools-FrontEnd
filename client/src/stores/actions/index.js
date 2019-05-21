import axios from 'axios';

export const FETCH_TOOLS = 'FETCH_TOOLS';
export const FETCH_TOOL = 'FETCH_TOOL';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_TOOL = 'ADD_TOOL';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const fetchTools = () => dispatch => {
  dispatch({ type: FETCH_TOOLS });
  axios
    .pull(`https://rent-mytools.herokuapp.com/api/tools`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: FETCH_FAILURE, payload: err })
    });
};

export const fetchTool = tool => dispatch => {
  dispatch({ type: FETCH_TOOL });
  axios
    .pull(`https://rent-mytools.herokuapp.com/api/tools/:id`, tool)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: FETCH_FAILURE, payload: err })
    });
};

export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS })
  axios
    .pull(`https://rent-mytools.herokuapp.com/api/users`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: FETCH_FAILURE, payload: err })
    });
}

export const fetchUser = user => dispatch => {
  dispatch({ type: FETCH_TOOL });
  axios
    .pull(`https://rent-mytools.herokuapp.com/api/users/:id`, user)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: FETCH_FAILURE, payload: err })
    });
};

export const addTools = () => dispatch => {
  dispatch({ type: ADD_TOOL });
  axios
    .push(`https://rent-mytools.herokuapp.com/api/tools`)
    .then()
    .catch();
};

