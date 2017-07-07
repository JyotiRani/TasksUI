import {ASSIGNMENT_SELECTED_FILTER} from '../actions/index';

export default function(state = null, action){
	switch(action.type) {
		case ASSIGNMENT_SELECTED_FILTER:
			return action.payload;
		default:
			return state;
		
	}
  
}