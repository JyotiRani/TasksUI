import {FETCH_TASKS_RECIEVED, FETCH_TASKS, FETCH_TASKS_ERROR} from '../actions';

const loading = (state = false, action) => {
	switch (action.type) {
	case FETCH_TASKS:
		return true
	case FETCH_TASKS_RECIEVED:
		return false
	case FETCH_TASKS_ERROR:
		return false
	default:
		return state
	}
}

export default loading

