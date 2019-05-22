import { TOOLS_FETCH, TOOLS_SUCCESS, TOOLS_FAILURE } from '../actions';

const iniState = {
  fetchingTools: false,
  tools: [],
  error: null
};

export const toolsReducers = (state = iniState, action) => {
  switch(action.type) {
    case TOOLS_FETCH:
      return {
        ...state,
        fetchingTools: true
      };
    case TOOLS_SUCCESS:
      return {
        ...state,
        tools: [ ...action.payload ],
        fetchingTools: false
      };
    case TOOLS_FAILURE:
      return {
        ...state,
        fetchingTools: false,
        error: action.payload,
      };
    default:
      return state;
  };
};