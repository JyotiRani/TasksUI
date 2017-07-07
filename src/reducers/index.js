import { combineReducers } from 'redux';
import tasksReducer from './reducer_tasks';
import taskReducer from './reducer_selected_task';
import {reducer as formReducer} from 'redux-form';
import formOptionReducer from './reducer_selected_options';
import inputVariablesReducer from './reducer_input_variables';
import outputVariablesReducer from './reducer_output_variables';
import activityLogsReducer from './reducer_activityLog';
import auditLogsReducer from './reducer_audit';
import ServicesReducer from './reducer_services_list';
import RequestersListReducer from './reducer_requesters_list';
import RequesterInfoReducer from './reducer_requesterInfo';
import CompaniesFilterReducer from './reducer_companies_filter';
import AssignmentFilterReducer from './reducer_assignment_filter';
import StatusFilterReducer from './reducer_statuses_filter';
import AssignmentsListReducer from './reducer_assignmentsList';

const rootReducer = combineReducers({
	tasks: tasksReducer,
	isFetching: tasksReducer,
	selectedTask: taskReducer,
	selectedOption: formOptionReducer,
	form: formReducer,	
	inputVariables: inputVariablesReducer,
	outputVariables: outputVariablesReducer,
	activityLogs: activityLogsReducer,
	auditLogs: auditLogsReducer,
	services: ServicesReducer,
	requesters: RequestersListReducer,
	requesterInfo: RequesterInfoReducer,
	companiesSelectedFilter: CompaniesFilterReducer,
	assignmentSelectedFilter: AssignmentFilterReducer,
	statusSelectedFilter: StatusFilterReducer,
	assignmentsList: AssignmentsListReducer
	
});

export default rootReducer;
