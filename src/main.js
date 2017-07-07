import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import {Route,BrowserRouter, Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

import TaskHome from './components/taskHome.jsx';
import NewTask from './components/newTask.jsx';
import EditTask from './components/editTask.jsx';
import TaskView from './components/taskView.jsx';
import AssignmentGroup from './components/assignmentGroup.jsx';
import InputVariables from './components/newTask/inputVariables.jsx';
import OutputVariables from './components/newTask/outputVariables.jsx';
import ActivityLog from './components/newTask/activityLog.jsx';
import Audit from './components/newTask/audit.jsx';
 
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter >
		<div>
		<Switch>
			<Route path="/task/inputVariables" component={InputVariables}/>
			<Route path="/newTask" component={NewTask}/>
			<Route path="/editTask" component={EditTask}/>
			<Route path="/taskView" component={TaskView}/>	
			<Route path="/" component={TaskHome}/>					
			<Route path="/assignmentGroup" component={AssignmentGroup}/>
			
		</Switch>	
		</div>	
		</BrowserRouter>
	</Provider>, document.getElementById('mainApp')
);

//store.dispatch(fetchTasks());

