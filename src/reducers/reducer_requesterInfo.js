import {FETCH_REQUESTER_INFO_REQUEST, FETCH_REQUESTER_INFO_RECIEVED} from '../actions/index';

export default function(state = {}, action) {
	
  switch (action.type) {
	case FETCH_REQUESTER_INFO_REQUEST:

      return state;
	case FETCH_REQUESTER_INFO_RECIEVED:
	
      return action.payload;
    default:
      return state
  }
}