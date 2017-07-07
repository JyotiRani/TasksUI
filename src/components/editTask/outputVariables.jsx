import React from 'react';
import {Row,Col,Table,Button,FormControl} from 'react-bootstrap';
import OnClickOutside from 'react-onclickoutside';
import {connect} from 'react-redux';
import {fetchOutputVariables, createOutputVariables} from '../../actions/index';
import {bindActionCreators} from 'redux';
import { Field, reduxForm } from 'redux-form';
var keyFieldId = 1;
var valueFieldId: 1

class OutputVariables extends React.Component {

	componentDidMount() {		
		this.props.fetchOutputVariables(this.props.taskToEdit.taskCode);
	}

	constructor(props){
	super(props);
		this.state = {
			numChildren: 0,
			btnShowHide: false,
			updateCount:0			
		};
	};
	addRowsFun(){
		this.setState({numChildren: this.state.numChildren + 1});
		this.setState({btnShowHide:true});
		this.setState({updateCount:this.state.updateCount+1})
		keyFieldId = keyFieldId + 1;
		valueFieldId = valueFieldId + 1;
	};
	minusRowsFun(){
		this.setState({numChildren: this.state.numChildren - 1});
		this.setState({btnShowHide:false});
		this.setState({updateCount:this.state.updateCount-1})
		keyFieldId = keyFieldId - 1;
		valueFieldId = valueFieldId - 1;
	};	

	showResults(values) {
//	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	values.taskCode = this.props.taskToEdit.taskCode;
  alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  
  this.props.createOutputVariables(values, () => {
	this.props.fetchOutputVariables(this.props.taskToEdit.taskCode);
  });
 
}
	
	render() {
		var children = [];		
		var outputs = [{"output_key":"test","output_value":"done","taskCode":"TSK001","visibility":null}]
		for (var i = 0; i <= this.state.numChildren; i += 1){
			if(i==0){
			console.log('inside if i=0');
			console.log(this.props.outputVariables.length);
				if (this.props.outputVariables.length > 0) {
				
					for (var j=0; j < this.props.outputVariables.length; j++)	 {
						var item = this.props.outputVariables[j];
						children.push( <ChildRows taskId = {item.taskCode} variable = {item.output_key} value = {item.output_value} actionIcon = {<i onClick={this.addRowsFun.bind(this)} title='Add Variable' className='fa fa-plus cursorPoint'></i>} key={i+j} /> ); 
					}
					
					console.log(children.length);
				} else {
				const taskId = <FormControl component="input" type="text" className="myInputFel form-control" value={this.props.taskToEdit.taskCode} readonly name="taskCode" />, variable = <Field component="input" type="text" className="myInputFel form-control" name="output_key" id={i}/>, value = <Field component="input" type="text" className="myInputFel form-control" name="output_value" id={valueFieldId}/>, actionIcon = <i onClick={this.addRowsFun.bind(this)} title='Add Variable' className='fa fa-plus cursorPoint'></i>;
				children.push( <ChildRows taskId = {taskId} variable = {variable} value = {value} actionIcon = {actionIcon} key={i} /> );
				}
 
			}else{
				const taskId = <FormControl component="input" type="text" className="myInputFel form-control" value={this.props.taskToEdit.taskCode} readonly name="taskCode" />, variable = <Field component="input" type="text" className="myInputFel form-control" name="output_key" id={i}/>, value = <Field component="input" type="text" className="myInputFel form-control" name="output_value" id={valueFieldId}/>, actionIcon = <i onClick={this.minusRowsFun.bind(this)} title='Remove Variable' className='fa fa-minus cursorPoint'></i>;
				children.push( <ChildRows taskId = {taskId} variable = {variable} value = {value} actionIcon = {actionIcon} key={i} /> );
			}
		};
		return (
			<div className="rPageSec"><div className="rPageHeading">Output Variables</div><Table responsive striped bordered id="master_table"><thead><tr><th width="20%">Task ID</th><th width="40%">Variable</th><th width="30%">Value</th><th width="10%">Action</th></tr></thead><tbody>{children}</tbody></Table><Row><Col md={12}><Button bsStyle="primary" title="Save Variables" onClick={this.props.handleSubmit(this.showResults.bind(this))}>Save</Button></Col></Row></div>
		);
	}
};
class ChildRows extends React.Component{
	render() {		
		return(<tr id={this.props.key}><td>{this.props.taskId}</td><td>{this.props.variable}</td><td>{this.props.value}</td><td className="text-c">{this.props.actionIcon}</td></tr>);
	}
};



function mapStateToProps(state) {
	return {outputVariables: state.outputVariables, loading : state.loading, taskToEdit: state.selectedTask};
}

OutputVariables = reduxForm({	
  form: 'outputVariablesForm' // a unique identifier for this form
})(OutputVariables);

// You have to connect() to any reducers that you wish to connect to yourself
OutputVariables = connect(
  mapStateToProps,
  {fetchOutputVariables, createOutputVariables} // bind account loading action creator
)(OutputVariables);

export default OutputVariables;
