import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {Row,Col,FormGroup,FormControl,ControlLabel, Grid, PageHeader,Nav,NavItem,ListGroup,ListGroupItem,Alert} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {DateField,DatePicker,TransitionView,Calendar} from 'react-date-picker';
import {connect } from 'react-redux';
import {updateTask, selectFormOption, fetchRequestersList, fetchRequesterInfo, fetchServiceList, fetchAssignmentsList} from '../../actions/index';
import RightSection from './processHierarchy.jsx';
import InputVariables from './inputVariables.jsx';
import OutputVariables from './outputVariables.jsx';
import OnClickOutside from 'react-onclickoutside';

class LeftSectionPage extends React.Component {
  constructor(props) {
    super(props);
	this.state = {
			searchResultsDiv:false,
			actualStart: '',
			actualEnd: ''
		};
  };

	updateTaskData(values) {
//	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	
  if(values.statusId && values.statusId == 2) 
	values.actualStartDate = new Date();
  else if (values.statusId && values.statusId == 3)	
	values.actualEndDate = new Date();
  else  {
    values.actualStartDate = null;
	values.actualEndDate = null;
  }
  
	
  alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  this.props.updateTask(values, () => {
	alert('Updated successfully');	
  });
}


	searchResults(event){
		this.setState({searchResultsDiv:true});
	};	
	callbackFun(id){
		this.setState({searchResultsDiv:id});
	}

	componentDidMount() {

	  this.props.fetchServiceList('');		
	 this.props.fetchRequestersList('');	
	}
	
	handleStatusChange(event) {
		if (event.target.value && event.target.value == 2) {
			this.setState({actualStart: new Date()});
		}
		if (event.target.value && (event.target.value == 3 || event.target.value == 4)) {
			this.setState({actualEnd: new Date()});
		}		
	}
	handleOfferingChange(event) {
		//alert(event.target.value);
		this.props.fetchAssignmentsList(event.target.value, null, 'Create Task');
	}	

   render() {

const renderSelectField = ({ input, label, type, disabled, meta: { touched, error, warning }, children }) => (
    <div>
	{disabled ?  
      <select {...input} className="form-control" disabled>
        {children}
      </select>
	 : 
		<select {...input} className="form-control">
        {children}
      </select>
	 } 
      {touched && ((error && <span className='red'>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>

)

const renderDateTimeFields = ({input, label, type, className, value, disabled, rows, meta: {touched, error, warning}}) => (
 
 <div>
 {disabled ? 
				<DateField disabled dateFormat="MM-DD-YYYY HH:mm:ss" updateOnDateClick={true} forceValidDate={false} {...input} className="form-control" value={value}><DatePicker navigation={true} locale="en" forceValidDate={true} highlightWeekends={true} highlightToday={true} cancelButton={false} clearButton={false} weekNumbers={false} weekStartDay={1} selected={value} /></DateField>
			: 	
				<DateField dateFormat="MM-DD-YYYY HH:mm:ss" updateOnDateClick={true} forceValidDate={false} {...input} className="form-control" value={value}><DatePicker navigation={true} locale="en" forceValidDate={true} highlightWeekends={true} highlightToday={true} cancelButton={false} clearButton={false} weekNumbers={false} weekStartDay={1} selected={value} /></DateField>
 }

      {touched && ((error && <span className='red'>{error}</span>) || (warning && <span>{warning}</span>))}
	  </div>
)
   
const renderTextFields = ({input, label, type, className, meta: {touched, error, warning}}) => (
 
 <div>
		<input {...input} placeholder={label} type={type} className={className}/>
      {touched && ((error && <span className='red'>{error}</span>) || (warning && <span>{warning}</span>))}
	  </div>
)

const renderTextAreaFields = ({input, label, rows, className, meta: {touched, error, warning}}) => (
 
 <div>
		<textarea {...input} placeholder={label} className={className} rows="9" disabled/>
      {touched && ((error && <span className='red'>{error}</span>) || (warning && <span>{warning}</span>))}
	  </div>
)

const { handleSubmit, pristine, reset, submitting } = this.props;
const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength300 = maxLength(300)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
  
  
  
const INPUTVARIABLES = 'inputVariables';
const OUTPUTVARIABLES = 'outputVariables';
const PROCESSDGM = 'processdgm';  

function getRightSectionContent(option)  {
	
  switch(option) {
		case INPUTVARIABLES:
			return <InputVariables />;
		case OUTPUTVARIABLES:
			return <OutputVariables />;
		default:
			return <RightSection />;
 } 		
}
  
   
      return (
	  <Grid className="midInnerAll" bsClass="">
		<form >
		
		{/* App Heading Section Start*/}
		<Row>
			<Col md={7} sm={7}>
				<PageHeader bsClass="" className="sPageHeading1 margin-b-10">Edit Task <div className="order position-re">{this.props.initialValues.taskCode}</div></PageHeader>
			</Col>
			<Col md={5} sm={5} className="hidden-xs">
			  <div className="status myStatus margin-b-10">
				<Nav bsClass="">
					<LinkContainer title="Save" to="/"><NavItem eventKey={1} onClick={handleSubmit(this.updateTaskData.bind(this))}><span className="sAction bgBtn15 save"></span></NavItem></LinkContainer>
					<LinkContainer title="Close" to="/"><NavItem eventKey={2}><span className="sAction bgBtn17 bclose"></span></NavItem></LinkContainer>
				</Nav>
			  </div>			
			  <div className="status myStatusGap border-r margin-b-10 margin-r-10 padding-r-10">
				<Nav bsClass="">
					<NavItem title="Input Variables" eventKey={1} name="inputVariables" onClick={() =>  this.props.selectFormOption(INPUTVARIABLES)}><span className="sAction bgBtn11 invar"></span></NavItem>
					<NavItem title="Output Variables" eventKey={2} name="outputVariables" onClick={() =>  this.props.selectFormOption(OUTPUTVARIABLES)}><span className="sAction bgBtn14 outvar"></span></NavItem>
					<NavItem title="Process Diagram" eventKey={3} name="processDiagram" onClick={() =>  this.props.selectFormOption(PROCESSDGM)}><span className="sAction bgBtn17 chart"></span></NavItem>
				</Nav>
			  </div>			  
			</Col>
		</Row>

			{/* App Heading Section end*/}
		
			<Row className="row-eq-height">
				<Col md={8} sm={12} xs={12}>
					<div className="">
		{/* Page Left Section Start*/}
	
		
		
		<div>
				  <Row>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Company</ControlLabel>
							<Field name="companyId" component="select" className="form-control" disabled>									
								<option value="1">Grenzen Inc.</option>								
							</Field>								
						</FormGroup>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Service</ControlLabel>
							<Field disabled name="serviceId" type="text" component={renderSelectField} className="form-control"  onChange={this.handleOfferingChange.bind(this)} validate={required}>
								<option value="">Select...</option>
								{this.props.services.length > 0 ?
									this.props.services.map((item, index) => 									
									 <option value={item.OFFERINGID}>{item.OFFERINGNAME}</option>
								)	
								: ''
								}
							</Field>								
						</FormGroup>

						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Requester</ControlLabel>
							<div className="position-re"><Field disabled name="requesterId" type="text" component={renderSelectField}  className="form-control" validate={required}>
								<option value="">Select...</option>
								{this.props.requesters.length > 0 ?
									this.props.requesters.map(item => 
									<option value={item.USERID}>{item.FULLNAME}</option>
								)	
								: ''
								}						
							</Field>
							<span className="clickInfo1"></span></div>
						</FormGroup>
					</Col>
					<Col md={6}>
  						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Description</ControlLabel>
						  <Field name="description" component={renderTextAreaFields} type="textarea"  className="form-control" validate={[required, maxLength300]}/>
						</FormGroup>
					</Col>		
				  </Row>				  
				  <Row>				  
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Task Sequence</ControlLabel>
						  <Field name="sequenceNumber" component={renderTextFields} type="text" placeholder="SequenceNumber"  className="form-control" validate={[required, number]}/>						  
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Status</ControlLabel>
							<Field name="statusId" type="text" component={renderSelectField} className="form-control">							
								<option value="">Unassigned</option>
								<option value="1">Assigned</option>
								<option value="2">In Progress</option>
								<option value="3">Completed</option>
								<option value="4">Cancelled</option>
							</Field>	
						</FormGroup>
					</Col>				  
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Assignee Group</ControlLabel>
						  <div className="position-re"><Field name="assignedToGroupId" type="text" component={renderSelectField}  className="form-control" validate={required}>
								<option value="">Select...</option>
								{this.props.assignmentsList.length > 0 ?
									this.props.assignmentsList.map(item => 
									<option value={item.assignmentGroupId}>{item.assignmentGroupName}</option>
								)	
								: ''
								}						
							</Field>
						</div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Assigned To</ControlLabel>
							<div className="position-re"><Field name="assignedTo" component={renderTextFields} type="text" placeholder="AssignedTo"  className="form-control" /><span className="clickInfo1"></span></div>
						</FormGroup>
					</Col>					
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span>Expected Start Date</ControlLabel>
							<div className="dateTimeSdiv">
								<Field component={renderDateTimeFields} name="expectedStartDate" validate={required}> </Field>
							</div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Target Date</ControlLabel>
							<div className="dateTimeSdiv">
								<Field component={renderDateTimeFields} name="expectedDueDate" validate={required}> </Field>
							</div>

						</FormGroup>
					</Col>					
				  </Row>				  
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass="">Actual Start Date</ControlLabel>
							<div className="dateTimeSdiv">
								<Field component={renderDateTimeFields} name="actualStartDate" value={this.state.actualStart} disabled> </Field>
							</div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Actual End Date</ControlLabel>
							<div className="dateTimeSdiv">
								<Field component={renderDateTimeFields} name="actualEndDate" value={this.state.actualEnd} disabled> </Field>
							</div>

						</FormGroup>
					</Col>					
				  </Row>				  
		  
		</div>

						{/* Page Left Section End*/}
					</div>
				</Col>
				<Col md={4} className="hidden-sm hidden-xs colRightHeight">
					<div className="">
						{/* Page Right Section Start*/}
						{ getRightSectionContent(this.props.selectedOption)}
						{/* Page Right Section End*/}
					</div>
				</Col>     
			</Row>
		</form>
		</Grid>  


      );
   }
}


class ServiceSearch extends React.Component {
	handleClickOutside(){
		this.props.fun(false);
	}
	render(){
		return(
			<div className="searchResultDiv">				
				<ListGroup bsClass="" className="searchListR">
					<ListGroupItem bsClass="">
						<div className="one"><span className="name">Amazon EC2 (t2.micro)</span></div>
						<div className="two"><span className="email">It</span>, <span className="com">Cloud</span></div>
					</ListGroupItem>
					<ListGroupItem bsClass="">
						<div className="one"><span className="name">Hostgator VPS</span></div>
						<div className="two"><span className="email">It</span>, <span className="com">Cloud</span></div>
					</ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}

ServiceSearch = OnClickOutside(ServiceSearch);

const selector = formValueSelector('editTaskForm');
function mapStateToProps(state) {
	return {initialValues: state.selectedTask, 
	selectedOption: state.selectedOption,
	requesters: state.requesters,
	services: state.services,
	requesterInfo: state.requesterInfo,
	assignmentsList: state.assignmentsList,
	companyId: selector(state, 'companyId'),
	statusId: selector(state, 'statusId')
	};
}
function validate(values) {
	//console.log(values);
	const errors = {};
	if(!values.taskCode) {
		errors.taskCode = 'Enter a unique task Id';
	}
	if(!values.sequenceNumber) {
		errors.sequenceNumber = 'Assign a valid sequence number to this task';
	}
	return errors;
}

LeftSectionPage = reduxForm({
	validate,
  form: 'editTaskForm', // a unique identifier for this form
})(LeftSectionPage);

// You have to connect() to any reducers that you wish to connect to yourself
LeftSectionPage = connect(
  mapStateToProps,
  {updateTask, selectFormOption, fetchRequestersList, fetchRequesterInfo, fetchServiceList, fetchAssignmentsList} // bind account loading action creator
)(LeftSectionPage);

export default LeftSectionPage;