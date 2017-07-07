import React from 'react';
import {Panel,Nav,NavItem} from 'react-bootstrap';

class RightSidebarMenulist extends React.Component{
	showSubMenu(subMenuNumber){
		switch(subMenuNumber){
			case '1':return(
				<Nav bsClass="">
					<NavItem eventKey={1}><span className="bgBtn1 rSidebar order"/>Track Order</NavItem>
					<NavItem eventKey={2}><span className="bgBtn2 rSidebar history"/>Order History</NavItem>
					<NavItem eventKey={3}><span className="bgBtn10 rSidebar myServices"/>My Services</NavItem>
				</Nav>
			);
			case '2':return(
				<Nav bsClass="">
					<NavItem eventKey={1}><span className="bgBtn1 rSidebar portfolio"/>Portfolio</NavItem>
					<NavItem eventKey={2}><span className="bgBtn2 rSidebar supplier"/>Suppliers</NavItem>
				</Nav>
			);
			case '4':return(
				<Nav bsClass="">
					<NavItem eventKey={1}><span className="bgBtn3 rSidebar dashboard"/>Quick View</NavItem>
					<NavItem eventKey={2}><span className="bgBtn4 rSidebar quickview"/>List View</NavItem>
					<NavItem eventKey={3}><span className="bgBtn5 rSidebar tasklist"/>Create Break-Fix</NavItem>
					<NavItem eventKey={4}><span className="bgBtn6 rSidebar newtask"/>Create Investigation</NavItem>
					<NavItem eventKey={5}><span className="bgBtn7 rSidebar ctchange"/>Create Change</NavItem>
				</Nav>
			);
			case '5':return(
				<Nav bsClass="">
					<NavItem eventKey={1}><span className="bgBtn4 rSidebar publishd"/>Publish</NavItem>
					<NavItem eventKey={2}><span className="bgBtn3 rSidebar reviews"/>Pending Reviews</NavItem>
					<NavItem eventKey={3}><span className="bgBtn8 rSidebar retired"/>Retired</NavItem>
				</Nav>
			);			
			default:return(
				<Nav bsClass="">
					<NavItem eventKey={1}><span className="bgBtn1 rSidebar rCart"/>Cart</NavItem>
					<NavItem eventKey={2}><span className="bgBtn2 rSidebar approvals"/>Approvals</NavItem>
					<NavItem eventKey={3}><span className="bgBtn4 rSidebar rReview"/>Review</NavItem>
					<NavItem eventKey={4}><span className="bgBtn11 rSidebar rWorksp"/>My Workspace</NavItem>
					<NavItem eventKey={5}><span className="bgBtn3 rSidebar rManSer"/>Manage Services</NavItem>
				</Nav>
			);
			{/*default:return(
				<Nav bsClass="">
					<NavItem eventKey={1}><span className="bgBtn1 rSidebar profile"/>My Profile</NavItem>
					<NavItem eventKey={2}><span className="bgBtn3 rSidebar notification"/>Notifications</NavItem>
					<NavItem eventKey={3}><span className="bgBtn2 rSidebar approvals"/>Approvals</NavItem>
					<NavItem eventKey={4}><span className="bgBtn4 rSidebar delegation"/>Delegations</NavItem>
					<NavItem eventKey={5}><span className="bgBtn11 rSidebar manageG"/>Manage Groups</NavItem>
				</Nav>
			);	*/}	
		}
	}
	render() {
		return (
			<div className={this.props.showhideClass ? 'rightNav showNav' : 'rightNav'}>
				<div className="r-nav">
					{this.showSubMenu(this.props.subMenuNumber)}
				</div>
			</div>
		);
	}
}



export default RightSidebarMenulist;
