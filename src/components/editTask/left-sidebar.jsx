import React from 'react';
import {Row,Col,Nav,NavItem,OverlayTrigger,Popover,Button,Media,Image,FormControl,Checkbox,FormGroup,ControlLabel} from 'react-bootstrap';
import {ReadMore} from 'react-read-more';
import OnClickOutside from 'react-onclickoutside';
import PopoverActivityLogData from './activityLog.jsx';
import PopoverAuditLogData from './audit.jsx';

const MoreArrow = <i title="More" className="fa fa-angle-double-down f-size-15" ></i>;

class LeftSidebarMenulist extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			isOpen:true
		}
	};	
	showOverlayValue(){
		{/*console.log(this.refs)
		console.log(this.refs.dheeraj._overlay.props.show);*/}
	};	
	
	handleClickOutside(){
		{/*console.log(this.refs)
		console.log(this.refs.dheeraj._overlay.props.rootClose);*/}
	}	
   render() {
	const popoverActivityLog = (<Popover className="innerBigPopover" id="popoverActivityLog"><PopoverActivityLogData /></Popover>);
	const popoverAuditLog = (<Popover className="innerBigPopover" id="popoverAuditLog"><PopoverAuditLogData /></Popover>);
	
      return (
		<div className="leftNav">
			<Nav bsClass="" className="leftMenu">
				<NavItem href="#" eventKey={1} title="Details"><span className="bgBtn9 lSidebar brkf1"></span></NavItem>
				<OverlayTrigger container={this} trigger="click" rootClose placement="right" overlay={popoverActivityLog}><NavItem href="#" eventKey={2} title="Activity Log"><span className="bgBtn4 lSidebar brkf4"></span></NavItem></OverlayTrigger>
				<OverlayTrigger container={this} trigger="click" rootClose placement="right" overlay={popoverAuditLog}><NavItem href="#" eventKey={3} title="Audit Log"><span className="bgBtn2 lSidebar brkf10"></span></NavItem></OverlayTrigger>
			</Nav>
		</div>
				
      );
   }
}

LeftSidebarMenulist = OnClickOutside(LeftSidebarMenulist);

export default LeftSidebarMenulist;



