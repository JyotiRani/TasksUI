import React from 'react';
import {Row,Col,Nav,NavItem,OverlayTrigger,Popover,Button,Media,Image,FormControl,Checkbox,FormGroup,ControlLabel} from 'react-bootstrap';
import {ReadMore} from 'react-read-more';
import {connect} from 'react-redux';
import {fetchAuditLogs, sortAuditLogs} from '../../actions/index';
import {bindActionCreators} from 'redux';


const MoreArrow = <i title="More" className="fa fa-angle-double-down f-size-15" ></i>;

class PopoverAuditLogData extends React.Component {
	constructor(props){
	super(props);
		this.state = {
			showUserData:false
		};
		this.showUserDetails = this.showUserDetails.bind(this);
	};
	showUserDetails(){
		this.setState({showUserData:!this.state.showUserData});
	};	

	componentDidMount() {
		console.log(this.props.taskToEdit.taskCode);
		this.props.fetchAuditLogs(this.props.taskToEdit.taskCode);
	}
	
	createActivityLog(event) {
			console.log('create activity logs');
	}

	sortAuditLogs(event, order) {			
			this.props.sortAuditLogs(this.props.taskToEdit.taskCode, event);
	}
	
	
	render(){
		return(
			<div>
			<div className="f-size-18 margin-b-5">Audit Log</div>
			
			<div className="bgGray padding-5">Filters:<span className="float-r f-size-17"><a href="#" className="black" title="Ascending" onClick={this.sortAuditLogs.bind(this,'ASC')}><i className="fa fa-angle-up"></i></a>&nbsp;&nbsp;<a href="#" className="black" title="Descending" onClick={this.sortAuditLogs.bind(this,'DESC')}><i className="fa fa-angle-down" ></i></a></span></div>
			{
				this.props.auditLogs.length > 0 ?  
					this.props.auditLogs.map((item, index)=>
				<Media key={index}>
				  <Media.Body>
					<Media.Heading className="blue margin-0">{item.updatedOn} - <span className="colorStOrange cursorPoint">{item.updatedBy}</span></Media.Heading>
					<div className="black fw-300 cTxt">{item.fieldName} modified from '{item.oldValue}' to '{item.newValue}'</div>
				  </Media.Body>
				</Media>
			)
			: <p>No Audit Logs yet!</p>
			}
			
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {auditLogs: state.auditLogs, taskToEdit: state.selectedTask};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchAuditLogs: fetchAuditLogs, sortAuditLogs: sortAuditLogs}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PopoverAuditLogData);