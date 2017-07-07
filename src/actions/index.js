import axios from 'axios';

export const FETCH_TASKS_REQUEST = 'fetch_tasks_request';
export const FETCH_TASKS_RECIEVED = "fetch_tasks_recieved";
export const FETCH_TASKS_ERROR = "fetch_tasks_error";
export const TASK_SELECTED = 'task_selected';
export const CREATE_TASK = 'create_task';
export const UPDATE_TASK = 'update_task';
export const CREATE_ACTIVITY_LOG = 'create_activity_log';
export const CREATE_OUTPUT_VAR = 'create_output_var';
export const FORM_OPTION_SELECTED = "form_option_selected";
export const FETCH_INPUT_VARIABLES_REQUEST = "fetch_input_variables_req";
export const FETCH_INPUT_VARIABLES_RECIEVED = "fetch_input_variables_res";
export const FETCH_OUTPUT_VARIABLES_REQUEST = "fetch_output_variables_req";
export const FETCH_OUTPUT_VARIABLES_RECIEVED = "fetch_output_variables_res";
export const FETCH_ACTIVITY_LOG_RECIEVED = "fetch_activity_log_res";
export const FETCH_ACTIVITY_LOG_REQUEST = "fetch_activity_log_req";
export const FETCH_AUDIT_LOG_RECIEVED = "fetch_audit_log_res";
export const FETCH_AUDIT_LOG_REQUEST = "fetch_audit_log_req";
export const FETCH_REQUESTERS_REQUEST = "fetch_requesters_req";
export const FETCH_REQUESTERS_RECIEVED = "fetch_requesters_res";
export const FETCH_REQUESTER_INFO_REQUEST = "fetch_requester_info_req";
export const FETCH_REQUESTER_INFO_RECIEVED = "fetch_requester_info_res";
export const FETCH_SERVICES_REQUEST = "fetch_services_req";
export const FETCH_SERVICES_RECIEVED = "fetch_services_res";
export const FETCH_ASSIGNMENTS_REQUEST = "fetch_assgnments_req";
export const FETCH_ASSIGNMENTS_RECIEVED = "fetch_assgnments_res";
export const COMPANIES_SELECTED_FILTER = "companies_filter";
export const ASSIGNMENT_SELECTED_FILTER = "assignment_filter";
export const STATUSES_SELECTED_FILTER = "status_filter";

export function selectTask(task) {
	
	return {
		type: TASK_SELECTED,
		payload: task
	};
}

function requestTasks() {
	console.log('request tasks action called');
	return {
		type: FETCH_TASKS_REQUEST		
	};
}

function recieveTasks(json) {
	console.log('recieve task action called');	
	return {
    type: FETCH_TASKS_RECIEVED,  
	isFetching: false,	
    payload: json
  };	
}

export function sortTasks(field) {	
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	let queryParam = '?filter[order]=' + field + ' ASC';

	return function (dispatch) {
		dispatch(requestTasks())
		return axios.get('https://tasksrestnew.mybluemix.net/api/tasks' + queryParam)
		.then(response => dispatch(recieveTasks(response.data)))      
  };	
}

export function selectCompaniesFilter(values) {
	return {
		type: COMPANIES_SELECTED_FILTER,
		payload: values
	};
	
}
export function selectAssignmentFilter(values) {
	return {
		type: ASSIGNMENT_SELECTED_FILTER,
		payload: values
	};
	
}
export function selectStatusesFilter(values) {

	return {
		type: STATUSES_SELECTED_FILTER,
		payload: values
	};
	
}

export function filterTasksByParam(paramname, paramval) {
	
	console.log(paramname + paramval);
	let query = [{"field": paramname, "value" : paramval}];
	console.log(query);
}

export function filterTasksByMultipleValues(filter) {
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	//expects filter param to be like ?filter[statusId][inq]=1&filter[statusId][inq]=2
  return function (dispatch) {	
    dispatch(requestTasks())
    return axios.get('https://tasksrestnew.mybluemix.net/api/tasks' + filter)
      .then(response => dispatch(recieveTasks(response.data)))      

};	
	
}

export function filterTasks(filter) {
	// expect json with key as column name to sort by and value as value to be used for filter e.g. [{"field": "taskCode", "value" : "tsk01"}, {"field": "statusId", "value" : }]
  let queryParam = '?';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  if(filter && filter.length > 1) {
		for (let i in filter) {
			queryParam += 'filter[where][and][' + i + '][' + filter[i].field + ']=' + filter[i].value + '&';
		}	    
  } else if (filter.length == 1 && filter[0].value != '') {
		queryParam += 'filter[where][' + filter[0].field + ']=' + filter[0].value;
  }    	
  
  return function (dispatch) {	  
	dispatch(requestTasks())
		return axios.get('https://tasksrestnew.mybluemix.net/api/tasks' + queryParam)
		.then(response => dispatch(recieveTasks(response.data)))      

	};
}

export function fetchTasks() {
	console.log('fetch tasks action called');
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  return function (dispatch) {	 
    dispatch(requestTasks())
    return axios.get('https://tasksrestnew.mybluemix.net/api/tasks?filter[limit]=10')
      .then(response => dispatch(recieveTasks(response.data)))      
  };
  
	
	/*

	axios.get()
	.then(function (response) {
    console.log(response);
	
		return {
		type: FETCH_TASKS_RECIEVED,
		payload: response.data,
		loading: false
	};

  })
  .catch(function (error) {
    console.log(error);
		return {
		type: FETCH_TASKS_ERROR,
		error: error,
		payload: null
	};
	
  });

		return {
		type: FETCH_TASKS,
		loading: true,
		payload: null
	};

	return {
		type: FETCH_TASKS,
		payload: taskService.getAll('filters')
	}; */
}

export function createTask(values, callback) {
axios.defaults.baseURL = 'https://api.us.apiconnect.ibmcloud.com/hcl-exploration-dev/sb/api/tasks';
axios.defaults.headers.common['X-IBM-Client-Id'] = 'b56cce80-a3fc-4194-87d7-edddb4d3bd28';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	
	const request = axios.post('',values)
	.then(function (response) {
		console.log(response);
		callback(response.data.taskCode);
	})
	.catch(function (error) {
		console.log(error);
		callback();
	});
	
	return {
		type: CREATE_TASK,
		payload: request
	};
}

export function updateTask(values, callback) {

axios.defaults.baseURL = 'https://api.us.apiconnect.ibmcloud.com/hcl-exploration-dev/sb/api/tasks';
axios.defaults.headers.common['X-IBM-Client-Id'] = 'b56cce80-a3fc-4194-87d7-edddb4d3bd28';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	
	const request = axios.patch(values.taskCode,values)
	.then(function (response) {
		console.log(response);
		callback();
	})
	.catch(function (error) {
		console.log(error);
		callback();
	});
	
	return {
		type: UPDATE_TASK,
		payload: request
	};
}

export function selectFormOption(option) {	
	return {
		type: FORM_OPTION_SELECTED,
		payload: option
	};	
}

function requestInputVariables() {
	console.log('request input action called');
	return {
		type: FETCH_INPUT_VARIABLES_REQUEST,
		loading: true
	};
}

function recieveInputVariables(json) {
	
	let outputs = [];
	for (let i in json)	 {
		let taskOutputs = json[i].outputs;
		
		if (taskOutputs.length > 0) {
			for (let j in taskOutputs) {						
				outputs.push(taskOutputs[j]);	
			}
		}		
	}
	console.log(outputs)
	
  return {
    type: FETCH_INPUT_VARIABLES_RECIEVED,  
	loading: false,	
    payload: outputs
  };	
}

export function fetchInputVariables(workItemId) {
	//Need workItemId, sequenceNumber of current task as inputs and then query for workitemid, status=complete, seqnum <= current, include fields = outputs
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	console.log('fetch input variables action called');
  let queryStr = '?filter[where][and][0][workItemId]=' + workItemId +'&filter[where][and][1][statusId]=3&filter[include]=outputs';
  return function (dispatch) {	
    dispatch(requestInputVariables())
    return axios.get('https://tasksrestnew.mybluemix.net/api/tasks' + queryStr)
      .then(response => dispatch(recieveInputVariables(response.data)))      
  };
}

export function fetchOutputVariables(taskCode) {
	console.log('fetch output called');
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_OUTPUT_VARIABLES_REQUEST))
    return axios.get('https://tasksrestnew.mybluemix.net/api/taskOutputs?filter[where][taskCode]=' + taskCode)
      .then(response => dispatch(responseRecieved(FETCH_OUTPUT_VARIABLES_RECIEVED, response.data)))      
  };
	
	
}
	
function fetchRequest(reqType) {	
	return {
		type: reqType,
		loading: true
	};
}

function responseRecieved(resType, json) {
	
	console.log(json);
	JSON.stringify(json, null, 2)
	
  return {
    type: resType,  
	loading: false,	
    payload: json
  };	
}

export function sortActivityLogs(taskCode, order) {
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_ACTIVITY_LOG_REQUEST))
    return axios.get('https://tasksrestnew.mybluemix.net/api/activityLogs?filter[where][taskCode]=' + taskCode + '&filter[order]=createdDate ' + order) 
      .then(response => dispatch(responseRecieved(FETCH_ACTIVITY_LOG_RECIEVED, response.data)))      
  };	
	
}

export function sortAuditLogs(taskCode, order){
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_AUDIT_LOG_REQUEST))
    return axios.get('https://tasksrestnew.mybluemix.net/api/auditLogs?filter[where][taskCode]=' + taskCode + '&filter[order]=updatedOn ' + order)
      .then(response => dispatch(responseRecieved(FETCH_AUDIT_LOG_RECIEVED, response.data)))      
  };
	
	
}

export function fetchActivityLogs(taskCode) {
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_ACTIVITY_LOG_REQUEST))
    return axios.get('https://tasksrestnew.mybluemix.net/api/activityLogs?filter[where][taskCode]=' + taskCode)
      .then(response => dispatch(responseRecieved(FETCH_ACTIVITY_LOG_RECIEVED, response.data)))      
  };
}

export function createActivityLog(values, callback) {
axios.defaults.baseURL = 'https://api.us.apiconnect.ibmcloud.com/hcl-exploration-dev/sb/api/activityLogs';
axios.defaults.headers.common['X-IBM-Client-Id'] = 'b56cce80-a3fc-4194-87d7-edddb4d3bd28';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//taskService.create(values)

	if(values.activityType && values.activityType == true) {
			values.activityType = 1;
	}
	
	const request = axios.post('',values)
	.then(function (response) {
		console.log(response);
		callback();
	})
	.catch(function (error) {
		console.log(error);
		callback();
	});
	
	return {
		type: CREATE_ACTIVITY_LOG,
		payload: request
	};	
}

export function createOutputVariables(values, callback) {
axios.defaults.baseURL = 'https://api.us.apiconnect.ibmcloud.com/hcl-exploration-dev/sb/api/taskOutputs';
axios.defaults.headers.common['X-IBM-Client-Id'] = 'b56cce80-a3fc-4194-87d7-edddb4d3bd28';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//taskService.create(values)
	
	const request = axios.post('',values)
	.then(function (response) {
		console.log(response);
		callback();
	})
	.catch(function (error) {
		console.log(error);
		callback();
	});
	
	return {
		type: CREATE_OUTPUT_VAR,
		payload: request
	};	
	
}
	
export function fetchAuditLogs(taskCode) {
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_AUDIT_LOG_REQUEST))
    return axios.get('https://tasksrestnew.mybluemix.net/api/auditLogs?filter[where][taskCode]=' + taskCode)
      .then(response => dispatch(responseRecieved(FETCH_AUDIT_LOG_RECIEVED, response.data)))      
  };
}

export function fetchRequestersList(companyId) {
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	
	let company = companyId ? companyId : 'Grenzen Inc.';
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_REQUESTERS_REQUEST))
    return axios.get('https://xsm-f.mybluemix.net/api/companies/' + company + '/users')
      .then(response => dispatch(responseRecieved(FETCH_REQUESTERS_RECIEVED, response.data)))      
  };	
}

export function fetchRequesterInfo(userid) {
	
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_REQUESTER_INFO_REQUEST))
    return axios.get('https://xsm-f.mybluemix.net/api/users/' + userid)
      .then(response => dispatch(responseRecieved(FETCH_REQUESTER_INFO_RECIEVED, response.data)))      
  };	
}

export function fetchServiceList(companyId) {
	
	let company = companyId ? companyId : 'Grenzen Inc.';
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';	
	
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_SERVICES_REQUEST))
    return axios.get('https://xsm-f.mybluemix.net/api/companies/' + company + '/offerings')
      .then(response => dispatch(responseRecieved(FETCH_SERVICES_RECIEVED, response.data)))      
  };	
}

export function fetchAssignmentsList(offeringId, companyId, eventName) {
	
	let company = companyId ? companyId : 'Grenzen Inc';
	let url = 'http://xsm-assignment-engine.mybluemix.net/api/assignments/byId?companyName=Grenzen%20Inc&applicationName=XSM&moduleName=Task&eventName=Create%20Task&Offering=582';
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	//let url = 'http://xsm-assignment-engine.mybluemix.net/api/assignments/byId?applicationName=XSM&moduleName=Break-fix&companyName=' + company + '&Offering=' + offeringId + '&eventName=' + 'Break-Fix Create';
	
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_ASSIGNMENTS_REQUEST))
    return axios.get(url)
      .then(response => dispatch(responseRecieved(FETCH_ASSIGNMENTS_RECIEVED, response.data)))
		
  };	
}

