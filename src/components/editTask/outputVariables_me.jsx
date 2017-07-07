import React from 'react';
import {Row,Col,Table,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchOutputVariables} from '../../actions/index';
import {bindActionCreators} from 'redux';
import { Field, reduxForm } from 'redux-form';

class OutputVariables extends React.Component{

	componentDidMount() {
		console.log(this.props.taskToEdit.workItemId);
		this.props.fetchOutputVariables(this.props.taskToEdit.taskCode);
	}

	render(){
		return(
		<div className="rPageSec">
			<div className="rPageHeading">Output Variables</div>
			
				<Table responsive striped bordered id="master_table">
					<thead>
					  <tr>
						<th width="20%">Task ID</th>
						<th width="40%">Variable</th>
						<th width="30%">Value</th>
						<th width="10%">Action</th>
					  </tr>
					</thead>
					<tbody>
					{this.props.outputVariables.length > 0 ?  
					  <tr>
						<td>T00010</td>
						<td>Server IP</td>
						<td>10.10.10.10</td>
						<td className="text-c"><i title="Add Variables" className="fa fa-plus cursorPoint"></i></td>
						</tr>
					:<p> No Outputs defined yet! </p>
					}	
					</tbody>
				</Table>		
				<Row><Col md={12}><Button bsStyle="primary" title="Save Variables">Save</Button></Col></Row>
		</div>
		);
	}
}


function mapStateToProps(state) {
	return {outputVariables: state.outputVariables, loading : state.loading, taskToEdit: state.selectedTask};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchOutputVariables: fetchOutputVariables}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(OutputVariables);