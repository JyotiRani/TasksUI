import {FETCH_INPUT_VARIABLES_REQUEST, FETCH_INPUT_VARIABLES_RECIEVED} from '../actions/index';

export default function(state = {}, action) {
	console.log('input variables reducer called');
  switch (action.type) {
    case FETCH_INPUT_VARIABLES_REQUEST:
	console.log('request input variables reducer called');

      return state;
    case FETCH_INPUT_VARIABLES_RECIEVED:
	console.log(' input variables  receieved reducer called');
      return action.payload;
    default:
      return state
  }
}