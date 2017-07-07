import React from 'react';
import {Row,Col,Media,Image,FormGroup,ControlLabel,FormControl,Radio,ButtonToolbar,Button} from 'react-bootstrap';

class AssignmentGroup extends React.Component{
	constructor(props){
	super(props);
		this.state = {
			showResults:true,
			showWriteData:false
		};
	};
	writeReviewFun(){
		this.setState({showResults:true});
		this.setState({showWriteData:false});
	};
	
	viewReviewFun(){
		this.setState({showResults:false});
		this.setState({showWriteData:true});
	};
	render(){
		return(
		<div className="rPageSec">
			<div className="rPageHeading"><div className="float-r cursorPoint f-size-16 margin-t-5">{this.state.showResults ? <span title="New Activity Log" onClick={this.viewReviewFun.bind(this)}><i className="fa fa-pencil-square-o"></i></span> : null}{this.state.showWriteData ? <span title="View Activity Log" onClick={this.writeReviewFun.bind(this)}><i className="fa fa-file-text-o"></i></span> : null}</div>Activity Log</div>		
			
			{this.state.showResults ? <WriteForm  /> : null}
			{this.state.showWriteData ? <WriteReviewSec /> : null}
		</div>
		);
	}
}
class WriteForm extends React.Component{
	constructor(props){
	super(props);
		this.state = {
			showUserData:false
		};
	};
	showUserDetails(){
		this.setState({showUserData:!this.state.showUserData});
	};	
	render(){
		return(
			<div className="myActLog">
					<Media>
					  <Media.Body>
						<Media.Heading className="blue margin-0">Mar 03, 2017 at 12:05:10 AM - Internal - <span className="colorStOrange cursorPoint" onClick={this.showUserDetails.bind(this)}>Rahul Kandhari</span></Media.Heading>
						<div className="black fw-300 cTxt">Status modified from A to B</div>
					  </Media.Body>
					  {this.state.showUserData ? <div className="bgGray proData"><div className="leftSec"><Image className="cursorPoint userImg" src="views/images/rahul.jpg" alt="profile image" /></div><div className="rigSec"><div className="f-size-12">Rahul Kandhari</div><div>Company: <b>Hcl</b>, Department: <b>Hcl-DryIce</b>, Location: <b>Noida</b>, Mobile: <b>#9810493151</b>, Email: <b>rahulka@hcl.com</b></div></div></div> : null}
					</Media>
					<Media>
					  <Media.Body>
						<Media.Heading className="blue margin-0">Mar 03, 2017 at 12:05:10 AM - External - <span className="colorStOrange cursorPoint">Rahul Kandhari</span></Media.Heading>
						<div className="black fw-300 cTxt">Priority modified from B to C</div>
					  </Media.Body>
					</Media>
					<Media>
					  <Media.Body>
						<Media.Heading className="blue margin-0">Mar 03, 2017 at 12:05:10 AM - Internal - <span className="colorStOrange cursorPoint">Rahul Kandhari</span></Media.Heading>
						<div className="black fw-300 cTxt">Service modified from C to D</div>
					  </Media.Body>
					</Media>
					<Media>
					  <Media.Body>
						<Media.Heading className="blue margin-0">Mar 03, 2017 at 12:05:10 AM - Internal - <span className="colorStOrange cursorPoint">Rahul Kandhari</span></Media.Heading>
						<div className="black fw-300 cTxt">Impacted User modified from D to E</div>
					  </Media.Body>
					</Media>
			</div>	
		)
	}
}

class WriteReviewSec extends React.Component{
	render(){
		return(
			<div>
				<FormGroup controlId="formControlsTextarea">
				  <ControlLabel>Activity Details</ControlLabel>
				  <FormControl componentClass="textarea" rows="4" />
				</FormGroup>
				
				<FormGroup>
					  <Radio name="radioGroup" inline defaultChecked>
						Internal
					  </Radio>
					  {' '}
					  <Radio name="radioGroup" inline>
						External
					  </Radio>
				</FormGroup>
				<ButtonToolbar><Button bsStyle="primary">Save</Button></ButtonToolbar>
			</div>
		)
	}
}

export default AssignmentGroup;