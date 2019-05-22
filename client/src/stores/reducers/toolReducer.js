import { TOOL_FETCH, TOOL_SUCCESS, TOOL_FAILURE } from '../actions';

const iniState = {
  fetchingTool: false,
  tool: [],
  error: null
};

export const toolReducers = (state = iniState, action) => {
  switch(action.type) {
    case TOOL_FETCH:
      return {
        ...state,
        fetchingTool: true
      };
    case TOOL_SUCCESS:
      return {
        ...state,
        tool: [ ...action.payload ],
        fetchingTool: false
      };
    case TOOL_FAILURE:
      return {
        ...state,
        fetchingTool: false,
        error: action.payload,
      };
    default:
      return state;
  };
};