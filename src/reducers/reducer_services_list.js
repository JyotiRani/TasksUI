import {FETCH_SERVICES_REQUEST, FETCH_SERVICES_RECIEVED} from '../actions/index';

export default function(state = {}, action) {
	
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:

      return state;
    
	case FETCH_SERVICES_RECIEVED:
	
      return action.payload;
    default:
      return state
  }
}