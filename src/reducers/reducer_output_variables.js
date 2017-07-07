import {FETCH_OUTPUT_VARIABLES_REQUEST, FETCH_OUTPUT_VARIABLES_RECIEVED} from '../actions/index';

export default function(state = {}, action) {
	
  switch (action.type) {
    case FETCH_OUTPUT_VARIABLES_REQUEST:

      return state;
    case FETCH_OUTPUT_VARIABLES_RECIEVED:
	
      return action.payload;
    default:
      return state
  }
}