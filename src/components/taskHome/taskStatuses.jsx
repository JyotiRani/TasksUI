import React from 'react';
import {Table, Popover,ListGroup,ListGroupItem,FormGroup,Checkbox, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {filterTasksByMultipleValues, fetchTasks, selectStatusesFilter} from '../../actions/index';
import {bindActionCreators} from 'redux';
import { Field, reduxForm } from 'redux-form';

class TaskStatusFilter extends React.Component{

	showResults(values) {
//	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
	this.props.selectStatusesFilter(values);
	if(!values.all) {
		var count = 0;
		
		var filterStr = 'filter[where][statusId][inq]=';
		var filter = '';
		if(values.unassigned) {					
			if (count == 0) {
				filter = '?' + filterStr + 'null';
			} else {
				filter = filter + '&' + filterStr + 'null';
			}
			count = count + 1;		
		}
		if(values.assigned) {					
			if (count == 0) {
				filter = '?' + filterStr + '1';
			} else {
				filter = filter + '&' + filterStr + '1';
			}
			count = count + 1;		
		}
		if(values.inprogress) {			
			if (count == 0) {
				filter = '?' + filterStr + '2';
			} else {
				filter = filter + '&' + filterStr + '2';
			}
			count = count + 1;
		}
		if (values.complete) {	
			
			if (count == 0) {
				filter = '?' + filterStr + '3';
			} else {
				filter = filter + '&' + filterStr + '3';
			}
			count = count + 1;		
		}
		if (values.cancel) {
			
			if (count == 0) {
				filter = '?' + filterStr + '4';
			} else {
				filter = filter + '&' + filterStr + '4';
			}
			count = count + 1;		
		}
		if (count == 1) {
			var temp = filter.substr(0, filter.indexOf('[inq]'));
			filter = temp + filter.substr(filter.indexOf('='));
		}
		alert(filter);				
		this.props.filterTasksByMultipleValues(filter);
	} else {	
		this.props.fetchTasks();
	}
}
		constructor(props){
			super(props);
			if(!this.props.initialValues) {
				this.props.selectStatusesFilter({"all" : true})
			}
		}

	render(){
	
	const renderTextFields = ({input, label, id, type, className,  meta: {touched, error, warning}}) => (
 
 <div>
		<input {...input} type={type} id={id} className={className} ></input> {label}
		
      {touched && ((error && <span className='text-help'>{error}</span>) || (warning && <span>{warning}</span>))}
	  </div>
)

		
		const statuses = this.props.statuses;
		return(
				<ListGroup bsClass="">				
					<ListGroupItem bsClass=""><Field label="All" component={renderTextFields} type="checkbox" name="all" ></Field></ListGroupItem>
					<ListGroupItem bsClass=""><Field label="Unassigned" component={renderTextFields} type="checkbox" name="unassigned" ></Field></ListGroupItem>					
					<ListGroupItem bsClass=""><Field label="Assigned" component={renderTextFields} type="checkbox"  name="assigned"></Field></ListGroupItem>
					<ListGroupItem bsClass=""><Field label="In Progress" component={renderTextFields} type="checkbox" name="inprogress" ></Field></ListGroupItem>
					<ListGroupItem bsClass=""><Field label="Completed" component={renderTextFields} type="checkbox"  name="complete" ></Field></ListGroupItem>
					<ListGroupItem bsClass=""><Field label="Cancelled" component={renderTextFields} type="checkbox"  name="cancel" ></Field></ListGroupItem>
				<Button type="button" className="myBtn" onClick={this.props.handleSubmit(this.showResults.bind(this))}>Apply</Button>				
				</ListGroup>
				
			
			);			

	}
}

function mapStateToProps(state) {
	return {initialValues: state.statusSelectedFilter};
}


TaskStatusFilter = reduxForm({	
  form: 'taskStatusFilterForm', // a unique identifier for this form
})(TaskStatusFilter);

// You have to connect() to any reducers that you wish to connect to yourself
TaskStatusFilter = connect(
  mapStateToProps, {filterTasksByMultipleValues, fetchTasks, selectStatusesFilter}
)(TaskStatusFilter);

export default TaskStatusFilter;
