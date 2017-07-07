import {FETCH_ACTIVITY_LOG_REQUEST, FETCH_ACTIVITY_LOG_RECIEVED} from '../actions/index';

export default function(state = {}, action) {	
  switch (action.type) {
    case FETCH_ACTIVITY_LOG_REQUEST:
      return state;
    case FETCH_ACTIVITY_LOG_RECIEVED:
      return action.payload;
    default:
      return state
  }
}