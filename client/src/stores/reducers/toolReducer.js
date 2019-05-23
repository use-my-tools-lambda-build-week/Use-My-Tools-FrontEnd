import { TOOL_FETCH, TOOL_SUCCESS, TOOL_FAILURE } from '../actions';

const iniState = {
  fetchingTool: false,
  tools: [],
  tool: [],
  userId: '',
  toolName: '',
  price: '',
  deposits: '',
  description: '',
  imageUrl: '',
  isRented: false,
  renterId: '',
  toolId: '',
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
        tools: [
          {
            tool: [{
              userId: action.payload.userId,
              toolName: action.payload.toolName,
              price: action.payload.price,
              deposits: action.payload.deposits,
              description: action.payload.description,
              imageUrl: action.payload.imageUrl,
              isRented: [
                {renterId: action.payload.renterId, toolId: action.payload.toolId}
              ]
            }]
          }
        ],
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