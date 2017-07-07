import React from 'react';
import OnClickOutside from 'react-onclickoutside';
import {Form,FormControl,Button,Nav,NavItem} from 'react-bootstrap';

class MobileTaskMainMenu extends React.Component {
	constructor(props) {
	super(props);
		this.state = {
			menuObj:false
		};
	};
	onMenuClick(){
		this.setState({menuObj:!this.state.menuObj});
	}
	handleClickOutside(){
		this.setState({menuObj:false});
	}	
   render() {
      return (
				<div id="mobileMenu" className="hidden-lg hidden-md hidden-sm">
				  <div className="mobileMenuIcon" onClick={this.onMenuClick.bind(this)}><i className="fa fa-bars fa-lg"></i></div>
				  {this.state.menuObj ? <MobileMenuItems /> : null }
				</div>
      );
   }
}

let MobileMenuItems = () => {
	return(
	<div className="mobileMenuResults">
		<Form inline>
			<FormControl type="text" placeholder="Search here..." />
			<Button bsClass="" type="submit"><span className="glyphicon glyphicon-search"></span></Button>
		</Form>
		<Nav bsClass="" className="clearfix">
			<NavItem eventKey={1} href="#"><span className="topNav cart"></span>Cart</NavItem>
			<NavItem eventKey={2} href="#"><span className="topNav myorder"></span>My Orders
				<Nav bsClass="" className="clearfix">
					<NavItem eventKey={2-1} href="#"><i className="fa fa-angle-double-right"></i> Track Order</NavItem>
					<NavItem eventKey={2-2} href="#"><i className="fa fa-angle-double-right"></i> Order History</NavItem>
				</Nav>
			</NavItem>
			<NavItem eventKey={3} href="#"><span className="topNav mngservice"></span>Manage Services
				<Nav bsClass="" className="clearfix">
					<NavItem eventKey={3-1} href="#"><i className="fa fa-angle-double-right"></i> Portfolio</NavItem>
					<NavItem eventKey={3-2} href="#"><i className="fa fa-angle-double-right"></i> Suppliers</NavItem>
				</Nav>
			</NavItem>
			<NavItem eventKey={4} href="#"><span className="topNav getasitn"></span>Self Manage
				<Nav bsClass="" className="clearfix">
					<NavItem eventKey={4-1} href="#"><i className="fa fa-angle-double-right"></i> User Profile</NavItem>
					<NavItem eventKey={4-2} href="#"><i className="fa fa-angle-double-right"></i> Subscriptions</NavItem>
					<NavItem eventKey={4-3} href="#"><i className="fa fa-angle-double-right"></i> Notifications</NavItem>
					<NavItem eventKey={4-4} href="#"><i className="fa fa-angle-double-right"></i> Delegations</NavItem>					
				</Nav>
			</NavItem>
			<NavItem eventKey={5} href="#"><span className="topNav profile"></span>Review</NavItem>
			<NavItem eventKey={6} href="#"><span className="topNav report"></span>My Workspace
				<Nav bsClass="" className="clearfix">
					<NavItem eventKey={6-1} href="#"><i className="fa fa-angle-double-right"></i> Work item
						<Nav bsClass="" className="clearfix">
							<NavItem eventKey={6-1-1} href="#"><i className="fa fa-angle-double-right"></i> Dashboard</NavItem>
							<NavItem eventKey={6-2-2} href="#"><i className="fa fa-angle-double-right"></i> Quick View</NavItem>
							<NavItem eventKey={6-2-3} href="#"><i className="fa fa-angle-double-right"></i> Create Break-Fix</NavItem>
							<NavItem eventKey={6-2-4} href="#"><i className="fa fa-angle-double-right"></i> Create Investigation</NavItem>
							<NavItem eventKey={6-2-5} href="#"><i className="fa fa-angle-double-right"></i> Create Change</NavItem>
						</Nav>					
					</NavItem>
					<NavItem eventKey={6-2} href="#"><i className="fa fa-angle-double-right"></i> Approvals</NavItem>
				</Nav>
			</NavItem>
			<NavItem eventKey={7} href="#"><span className="topNav workplace"></span>Knowledge Library</NavItem>
			<NavItem eventKey={8} href="#"><span className="topNav contact"></span>Alfy</NavItem>
			<NavItem eventKey={9} href="#"><span className="topNav groups"></span>Community Assistance</NavItem>
			<NavItem eventKey={10} href="#"><span className="mlogout"><i className="fa fa-power-off red"></i></span>Logout</NavItem>
		</Nav>
	</div>
	);
};


MobileTaskMainMenu = OnClickOutside(MobileTaskMainMenu);

export default MobileTaskMainMenu;