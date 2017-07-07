import React from 'react';
import {FormControl,Button,ButtonToolbar} from 'react-bootstrap';
import {filterTasks} from '../../actions/index';
import {connect} from 'react-redux';

class SearchFilter extends React.Component {
	constructor(props){
	super(props);
		this.state = {
			taskVal: ''
		};
	};	
	
	handleChange(event) {
		let fieldName = event.target.name;
		let fleldVal = event.target.value;	
		console.log(fleldVal)
     this.setState({taskVal:fleldVal});
  }
  
  filterTasksbyCode() {
	
	var filterJson = [{"field": "taskCode", "value": this.state.taskVal}];
	this.props.filterTasks(filterJson);
	
  }

	render() {
		return (
			<div className="form-inline myFields position-re"><FormControl className="myControl mySel" componentClass="select" name="filter"><option value="taskCode">Task ID</option></FormControl><FormControl className="myControl myInput mySer" type="text" name="filterText" onChange={this.handleChange.bind(this)}/><Button title="Search Task" bsStyle="primary" className="myBtn" onClick={this.filterTasksbyCode.bind(this)}><i className="fa fa-search"></i></Button></div>
		);
	}
}

export default connect(null,{filterTasks})(SearchFilter);
