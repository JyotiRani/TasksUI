export const TASK_SELECTED = 'task_selected';

export default function(state = null, action){
	switch(action.type) {
		case TASK_SELECTED:
			return action.payload;
		default:
			return state;
		
	}
  
}