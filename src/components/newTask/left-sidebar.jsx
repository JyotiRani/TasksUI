import React from 'react';
import {Nav,NavItem} from 'react-bootstrap';

class LeftSidebarMenulist extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
		}
	};	
   render(){
      return(
		<div className="leftNav">
			<Nav bsClass="" className="leftMenu">
				<NavItem href="#" eventKey={1} title="Details"><span className="bgBtn9 lSidebar brkf1"></span></NavItem>
			</Nav>
		</div>
				
      );
   }
}

export default LeftSidebarMenulist;

