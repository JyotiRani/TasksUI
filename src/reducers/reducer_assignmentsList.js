import {FETCH_ASSIGNMENTS_REQUEST, FETCH_ASSIGNMENTS_RECIEVED} from '../actions/index';

export default function(state = {}, action) {	
  switch (action.type) {
    case FETCH_ASSIGNMENTS_REQUEST:
      return state;
    case FETCH_ASSIGNMENTS_RECIEVED:
      return action.payload;
    default:
      return state
  }
}