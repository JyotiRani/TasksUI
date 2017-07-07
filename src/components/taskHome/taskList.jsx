import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import {Row,Col,FormGroup,FormControl,ControlLabel,Button,Table,Pagination} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {selectTask} from './../../actions/index';

import taskView from './taskView.jsx';

class TaskList extends React.Component{

	constructor(props){
		super(props);

	};
	
	getStatus(statusId) {
		if(statusId == 1)		
			return 'Assigned';
		else if(statusId == 2)
			return 'In-Progress';
		else if(statusId == 3)
			return 'Completed';
		else if(statusId == 4)
			return 'Cancelled';
		else
			return 'Unassigned';
	}
	
	getCompany(companyId) {
		if(companyId == 1) 
			return 'Grenzen'
		else if(companyId == 2)	
			return 'HCL'
	}
	

	render(){
		
		return(
		<div className="myTableData margin-t-10">
			
				
					<Table responsive striped bordered className="margin-0">
						<thead>
						  <tr>
							<th width="10%">Task ID</th>
							<th width="18%">Company</th>
							<th width="20%">Assignment Group</th>
							<th width="20%">Exp. Start date</th>
							<th width="20%">Exp. Target date</th>
							<th width="12%">Status</th>
						  </tr>
					  </thead>
						<tbody>	
						
								{
									this.props.tasks.map(item=>  
										<tr key={item.taskCode}>
										<td><Link to="#" onClick={() =>  this.props.selectTask(item)}>{item.taskCode } </Link></td>
										<td>{item.companyId ? this.getCompany(item.companyId) : ''}</td>										
										<td><Link to="/assignmentGroup">{item.assignedToGroup ?  item.assignedToGroup : ''}</Link></td>
										<td>{item.expectedStartDate}</td>
										<td>{item.expectedDueDate}</td>					
										<td>{this.getStatus(item.statusId)}</td>	
										{/*<td><div className="text-c f-size-14"><LinkContainer to="/editTask" title="Edit Task" onClick={() =>  this.props.selectTask(item)}><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></LinkContainer></div>
										</td> -->*/}
										</tr>
									)
								}									
									
						</tbody>
					  </Table>						
			  
				
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {tasks: state.tasks, isFetching : state.isFetching};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectTask: selectTask}, dispatch);
}

export default connect(mapStateToProps, {selectTask})(TaskList);