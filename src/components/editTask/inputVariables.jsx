import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchInputVariables} from '../../actions/index';
import {bindActionCreators} from 'redux';

class InputVariables extends React.Component{

	componentDidMount() {
	console.log(this.props.taskToEdit.workItemId);
		this.props.fetchInputVariables(this.props.taskToEdit.workItemId);
	}

	render(){
		console.log("length of result:" + this.props.inputVariables.length);
		return(		
		
			<div className="rPageSec">
				<div className="rPageHeading">Input Variables</div>
		{this.props.inputVariables.length > 0 ?  
					<Table responsive striped bordered>
						<thead>
						  <tr>
							<th>Task ID</th>
							<th>Variable</th>
							<th>Value</th>
						  </tr>
						</thead>
						<tbody>
						{this.props.inputVariables.map((item, index)=>
						  <tr key={index}>
							<td>{item.taskCode}</td>
							<td>{item.output_key}</td>
							<td>{item.output_value}</td>
							</tr>
						  )
						}
						</tbody>
					</Table>		
		:<p> No inputs defined yet! </p>}
			</div>
		
		);
	}
}


function mapStateToProps(state) {
	return {inputVariables: state.inputVariables, loading : state.loading, taskToEdit: state.selectedTask};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchInputVariables: fetchInputVariables}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(InputVariables);