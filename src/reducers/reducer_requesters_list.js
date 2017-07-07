import {FETCH_REQUESTERS_REQUEST, FETCH_REQUESTERS_RECIEVED} from '../actions/index';

export default function(state = {}, action) {
	
  switch (action.type) {
	case FETCH_REQUESTERS_REQUEST:

      return state;
	case FETCH_REQUESTERS_RECIEVED:
	
      return action.payload;
    default:
      return state
  }
}