import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,FormGroup,FormControl,ControlLabel,Button,Table,Pagination} from 'react-bootstrap';
import SearchFilter from './../common/searchFilter.jsx';
import TasksList from './taskList.jsx';
import TaskView from './taskView.jsx';
import Sort from './sort.jsx';
import PaginationComp from './pagination.jsx';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {fetchTasks, filterTasksByMultipleValues} from '../../actions/index';
import {bindActionCreators} from 'redux';
var taskService = require('./../../server/tasks.js');

class TasksMain extends React.Component {
	constructor(props){
		super(props);		
	};
	
	componentDidMount() {
	
		this.props.fetchTasks();
	}
	

		
   render() {
   console.log(this.props.isFetching);
   
      return (
	  		<Row className="row-eq-height">
				<Col md={8} sm={12} xs={12}>
					<div className="">
						{/* Page Left Section Start*/}
						
						<div>
							<div className="border-b padding-b-10 margin-0">
								<Row>
									<Col md={7}>
										<SearchFilter />
									</Col>
									<Col md={5}>
										<Sort />
									</Col>
								</Row>
							</div>
								<PaginationComp />
							{this.props.tasks.length > 0 ? <TasksList /> :<p> No Records found! </p>}
						</div>
						{/* Page Left Section End*/}
					</div>

				</Col>
				<Col md={4} className="hidden-sm hidden-xs colRightHeight">
					<div className="">
						{/* Page Right Section Start*/}
						<TaskView />
						{/* Page Right Section End*/}
					</div>
				</Col>     
			</Row>
	
      );
   }
}

function mapStateToProps(state) {
	return {tasks: state.tasks, isFetching : state.isFetching};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchTasks: fetchTasks}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(TasksMain);