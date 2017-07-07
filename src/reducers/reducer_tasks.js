import {FETCH_TASKS_REQUEST, FETCH_TASKS_RECIEVED} from '../actions/index';

export default function(state = {}, action) {
	console.log('reducer called');
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
	console.log('request task reducer called');

      return state;
    case FETCH_TASKS_RECIEVED:
	console.log(' task  receieved reducer called');
      return action.payload;
    default:
      return state
  }
}