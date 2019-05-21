import React from 'react';

export const FETCH_TOOLS = 'FETCH_TOOLS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchTools = () => dispatch => {
  dispatch({ type: FETCH_TOOLS });
  
}