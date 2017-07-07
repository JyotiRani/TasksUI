import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,FormGroup,FormControl,ControlLabel,Button,Table,Pagination} from 'react-bootstrap';
import {sortTasks} from '../../actions/index';
import {connect} from 'react-redux';

class SortTasks extends React.Component {
	constructor(props){
	super(props);
	};
	
	handleChange(event) {
		let fieldName = event.target.name;
		let fleldVal = event.target.value;	
		
     this.props.sortTasks(fleldVal);
  }
	
   render() {
      return (

			<div className="text-r myFields">
				<ControlLabel className="display-inline">Sort</ControlLabel>
				<FormControl className="myControl mySort" componentClass="select" name="sortField" onChange={this.handleChange.bind(this)}>
					<option value="taskCode">Task ID</option>
					<option value="companyId">Company</option>
					<option value="statusId">Status</option>
					<option value="assignedToGroup">Assignment Group</option>
					<option value="expectedStartDate">Expected Start Date</option>
				</FormControl>	
			</div>
			
		);
	}
}

export default connect(null,{sortTasks})(SortTasks);
