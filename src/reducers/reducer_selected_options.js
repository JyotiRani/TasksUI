export const FORM_OPTION_SELECTED = 'form_option_selected';

export default function(state = null, action){
	switch(action.type) {
		case FORM_OPTION_SELECTED:
			return action.payload;
		default:
			return state;
		
	}
  
}