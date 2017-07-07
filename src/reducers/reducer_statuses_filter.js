import {STATUSES_SELECTED_FILTER} from '../actions/index';

export default function(state = null, action){
	switch(action.type) {
		case STATUSES_SELECTED_FILTER:
			return action.payload;
		default:
			return state;
		
	}
  
}