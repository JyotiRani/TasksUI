import React from 'react';
import {Row,Col,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import {DateField,DatePicker,TransitionView,Calendar} from 'react-date-picker';

class LeftSectionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		taskData: {}	
	};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

	var newState = {}
	newState[name] = value;
    this.setState({
      taskData: newState
    });
  };

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  };
  
  	componentWillMount(){	
		if (this.props.data) {
			this.setState({				  
				  taskData: this.props.data
			});		
		}
	};


   render() {
      return (

		<div>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Task #</ControlLabel>
						  <FormControl type="text" name="taskCode" value={this.state.taskData.taskCode} onChange={this.handleChange}/>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Parent WorkItem</ControlLabel>
							<FormControl type="text" name="workItemId" value={this.state.taskData.workItemId} onChange={this.handleChange}/>
						</FormGroup>
					</Col>		
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Status</ControlLabel>
							<FormControl className="myControl mySort" componentClass="select" name="statusId" value={this.state.taskData.statusId} onChange={this.handleChange}>
								<option value="">Unassigned</option>
								<option value="0">Assigned</option>
								<option value="1">In Progress</option>
								<option value="2">Completed</option>
								<option value="3">Cancelled</option>
							</FormControl>	
						</FormGroup>
					</Col>				  
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Requester</ControlLabel>
							<div className="position-re"><FormControl type="text" name="createdBy" value={this.state.taskData.createdBy} onChange={this.handleChange}/><span className="clickInfo1"></span></div>
						</FormGroup>
					</Col>		
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Task Sequence</ControlLabel>
						  <FormControl type="text" name="sequenceNumber" value={this.state.taskData.sequenceNumber} onChange={this.handleChange}/>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Task Type</ControlLabel>
							<FormControl className="myControl mySort" componentClass="select" name="sequenceType" value={this.state.taskData.sequenceType} onChange={this.handleChange}> 								
								<option value="1">Parallel</option>
								<option value="2">Sequential</option>
							</FormControl>	
						</FormGroup>
					</Col>		
				  </Row>				  
				  <Row>
					<Col md={12}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Description</ControlLabel>
						  <FormControl componentClass="textarea" className="" rows="2" name="description" value={this.state.taskData.description} onChange={this.handleChange}/>
						</FormGroup>
					</Col>					
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Target Date</ControlLabel>
							<div className="dateTimeSdiv">
								<DateField name="dueDate"  dateFormat="MM-DD-YYYY HH:mm:ss" updateOnDateClick={true} forceValidDate={true} defaultValue={1493105086058} onChange={this.handleChange}><DatePicker navigation={true} locale="en" forceValidDate={true} highlightWeekends={true} highlightToday={true} cancelButton={false} clearButton={false} weekNumbers={false} weekStartDay={1} /></DateField>
							</div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Start Date</ControlLabel>
							<div className="dateTimeSdiv">
								<DateField name="startDate"  dateFormat="MM-DD-YYYY HH:mm:ss" updateOnDateClick={true} forceValidDate={true} defaultValue={1493105086058} onChange={this.handleChange}><DatePicker navigation={true} locale="en" forceValidDate={true} highlightWeekends={true} highlightToday={true} cancelButton={false} clearButton={false} weekNumbers={false} weekStartDay={1} /></DateField>
							</div>

						</FormGroup>
					</Col>					
				  </Row>				  
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Assignment Group</ControlLabel>
						  <div className="position-re"><FormControl type="text" name="assignedToGroup" value={this.state.taskData.assignedToGroup} onChange={this.handleChange}/><span className="clickInfo1"></span></div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Assigned To</ControlLabel>
							<div className="position-re"><FormControl type="text" name="assignedTo" value={this.state.taskData.assignedTo} onChange={this.handleChange}/><span className="clickInfo1"></span></div>
						</FormGroup>
					</Col>					
				  </Row>
		</div>


      );
   }
}

export default LeftSectionPage;