import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row,Col,Nav,NavItem,OverlayTrigger,Popover,Button,Media,Image,FormControl,Checkbox,FormGroup,ControlLabel} from 'react-bootstrap';
import {ReadMore} from 'react-read-more';
import {connect} from 'react-redux';
import {fetchActivityLogs, sortActivityLogs, createActivityLog} from '../../actions/index';
import {bindActionCreators} from 'redux';

const MoreArrow = <i title="More" className="fa fa-angle-double-down f-size-15" ></i>;
class PopoverActivityLogData extends React.Component {
	constructor(props){
	super(props);
		this.state = {
			showUserData:false,
			description:'', 
			activityType:''
		};
		this.showUserDetails = this.showUserDetails.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.createActivityLog = this.createActivityLog.bind(this);
		
	};
	showUserDetails(){
		this.setState({showUserData:!this.state.showUserData});
	};	
	
	componentDidMount() {
		console.log(this.props.taskToEdit.taskCode);
		this.props.fetchActivityLogs(this.props.taskToEdit.taskCode);
	}
	
	createActivityLog(values) {
			
			values.taskCode = this.props.taskToEdit.taskCode;
			
		this.props.createActivityLog(values, () => {
			this.props.fetchActivityLogs(this.props.taskToEdit.taskCode);	
		  });
	}

	sortActivityLog(event, order) {			
			this.props.sortActivityLogs(this.props.taskToEdit.taskCode, event);
	}
	
	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : '';
    const name = target.name;

	console.log(name + value)
    this.setState({
      [name]: value
    });
  }

	render(){
	
const renderTextFields = ({input, label, type, className, rows, meta: {touched, error, warning}}) => (
 
 <div>
		<input {...input} placeholder={label} type={type} className={className} rows={rows}/>
      {touched && ((error && <span className='text-help'>{error}</span>) || (warning && <span>{warning}</span>))}
	  </div>
)
	
	
	const required = value => (value ? undefined : 'Required')
		return(
			<div>
			<div className="f-size-18">Activity Log</div>
			<form>
			<div className="bgGray padding-10 tbox">
				<div className="position-re"><Field component={renderTextFields} name="description" type="textarea" className="form-control" rows="2" /></div>
				<div className="btnNew"><a href="#" title="Post" onClick={this.props.handleSubmit(this.createActivityLog.bind(this))}><i className="fa fa-chevron-circle-right "></i></a><Field component={renderTextFields} type="checkbox" name="activityType"></Field>Internal</div>
			</div>
			</form>
			<div className="margin-t-5 padding-b-5 border-b">Filters:<span className="float-r f-size-17"><a href="#" className="black" title="Ascending" onClick={this.sortActivityLog.bind(this,'ASC')} name="ASC"><i className="fa fa-angle-up"></i></a>&nbsp;&nbsp;<a href="#" className="black" title="Descending" onClick={this.sortActivityLog.bind(this,'DESC')} name="DESC"><i className="fa fa-angle-down" ></i></a></span></div>
			{
			this.props.activityLogs.length > 0 ?  
				this.props.activityLogs.map((item, index)=>
				<Media key={index}>
				
				  <Media.Left align="top">
					<Image src="views/images/dheeraj_saraswat.jpg" alt="profile image"/>
				  </Media.Left>
				  <Media.Body >
				  
					<Media.Heading className="blue margin-0">{item.createdDate} - {item.activityType ? 'Internal' : 'External' } - <span className="colorStOrange cursorPoint">{item.createdBy}</span></Media.Heading>
					<div className="black fw-300 cTxt"><ReadMore lines={1} onShowMore={this.props.onChange} text={MoreArrow}>
							{item.description}
						</ReadMore></div>
						
				  </Media.Body>				  
				</Media>
				)
			: <p> No Activity logs yet </p> }	
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {activityLogs: state.activityLogs, taskToEdit: state.selectedTask};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchActivityLogs: fetchActivityLogs, sortActivityLogs: sortActivityLogs, createActivityLog}, dispatch);
}

PopoverActivityLogData = reduxForm({	
  form: 'activityLogForm', // a unique identifier for this form
})(PopoverActivityLogData)

// You have to connect() to any reducers that you wish to connect to yourself
PopoverActivityLogData = connect(
  mapStateToProps,
  {fetchActivityLogs, sortActivityLogs, createActivityLog} // bind account loading action creator
)(PopoverActivityLogData);

export default PopoverActivityLogData;
